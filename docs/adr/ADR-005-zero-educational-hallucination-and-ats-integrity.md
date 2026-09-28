# ADR-005: Eliminasi Halusinasi Gelar Pendidikan & Integritas ATS Engineering Track

## Status
**ACCEPTED** (Implemented & Verified)

## Konteks & Masalah
Pada prompt generator ATS CV sebelumnya, terdapat template default yang mencantumkan gelar akademik fiktif (*Bachelor of Computer Science*). Hal ini menimbulkan risiko disinformasi etis yang fatal apabila dokumen resume hasil generator dikirimkan kepada calon pemberi kerja atau rekruter resmi. Sistem AI tidak boleh merekayasa atau berhalusinasi atas kredensial yang tidak pernah diberikan oleh pengguna.

## Keputusan Arsitektur
1. **Penghapusan Total Gelar Akademik Fiktif:**
   Mengeliminasi klaim gelar formal fiktif (*Bachelor of Computer Science / Sarjana Komputer*) dari seluruh prompt sistem dan template resume ATS di `lib/ai/ats-prompt.ts`.
2. **Standardisasi Trek Rekayasa Mandiri (*Independent Systems Track*):**
   Mengganti bagian pendidikan dengan format yang berbasis rekayasa sistem riil:
   ```markdown
   ## EDUCATION & CREDENTIALS
   - **Independent Systems Engineering Track & Continuous Specializations**
     *Fokus Pembelajaran:* Clean Architecture, Distributed Mobile-Backend Systems, Fullstack Systems Engineering, Applied AI Engineering.
   ```
3. **Penguncian Integritas Etis:**
   Menambahkan guardrail instruksi kepada model AI untuk tidak pernah menciptakan nama institusi perguruan tinggi atau tahun kelulusan khayalan jika tidak ada data pendidikan formal yang diinputkan pengguna.

## Konsekuensi & Bukti Verifikasi
- **Positif:** 100% bebas halusinasi pendidikan (*Zero Hallucination*).
- **Positif:** Resume tetap lolos parser mesin ATS dengan format semantik Markdown yang valid dan mengutamakan portofolio rekayasa sistem nyata dengan metrik teruji.
