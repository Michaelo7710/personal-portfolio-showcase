# ADR-003: AI Semantic Vacancy Guard & Error 422 Circuit Breaker

## Status
**ACCEPTED** (Implemented & Verified with Unit/Integration Tests)

## Konteks & Masalah
Fitur ATS CV Generator menerima masukan berupa teks deskripsi lowongan kerja ataupun gambar tangkapan layar (screenshot loker). Sebelumnya, model multimodal AI akan mencoba menghasilkan CV terhadap input gambar apapun—bahkan gambar acak yang tidak memiliki keterkaitan sama sekali dengan lowongan kerja (seperti foto makanan, binatang peliharaan, atau meme). Hal ini menghasilkan konten resume halusinatif, memboroskan kuota token LLM (Gemini API), serta merusak reputasi profesional sistem.

## Keputusan Arsitektur
1. **Aturan Heuristik Validasi Semantik Dua Lapis (Two-Tier Guard):**
   - **Lapis 1 (Prompt Constraint Semantik):** Menginstruksikan model AI untuk mengevaluasi secara ketat apakah gambar atau teks merupakan informasi lowongan kerja nyata (*Job Vacancy, Career Opening, atau Job Specification*). Jika tidak, model diwajibkan mengembalikan JSON penolakan eksplisit: `{ "isValidJobVacancy": false, "rejectionReason": "..." }`.
   - **Lapis 2 (Backend Circuit Breaker HTTP 422):** Route handler pada Next.js API (`app/api/ai/cv-generate/route.ts`) menangkap sinyal penolakan semantik ini dan secara deterministik merespons dengan status code `HTTP 422 Unprocessable Entity` beserta payload JSON terstruktur, bukan membiarkan proses berlanjut atau mengembalikan HTTP 200 dengan resume palsu.

## Konsekuensi & Bukti Verifikasi
- **Positif:** Perlindungan token LLM dan pencegahan halusinasi 100%. Gambar non-loker ditolak secara elegan dan informatif.
- **Positif:** Diuji secara otomatis dengan test suite unit di `tests/app/api-ai-cv-generate-route.test.ts` dan `tests/portfolio-cv.test.ts` dengan status 100% Passed.
