# 🏛️ Personal Portfolio — Architecture Showcase & Case Study

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript&logoColor=white)
![Design System](https://img.shields.io/badge/Design-Bauhaus%20Theme-D02020?logo=blueprint&logoColor=white)
![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-047857?logo=w3c&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-123%2F123_Passed-10B981?logo=checkmarx&logoColor=white)
![AI Engine](https://img.shields.io/badge/AI-Gemini%20Multimodal%20CV-8E75C2?logo=google&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)

**Etalase Portofolio Pribadi &amp; Studi Kasus Arsitektur Web Next.js**  
*Antarmuka responsif bertema Bauhaus fungsional dengan pengujian otomatis Vitest.*

[Arsitektur Sistem](#-1-arsitektur-sistem--clean-web-architecture) •
[Monotema Bauhaus](#-2-sistem-desain-monotema-bauhaus) •
[Semantic Vacancy Guard (HTTP 422)](#-3-ai-semantic-vacancy-guard--circuit-breaker-http-422) •
[Integritas ATS &amp; Zero Halusinasi](#-4-integritas-ats-resume--zero-educational-hallucination) •
[Kontrak Antarmuka Publik](#-5-kontrak-antarmuka-publik-typescript) •
[Laporan Verifikasi (123 Tests 100% Green)](#-6-laporan-verifikasi-kualitas--test-suite) •
[Daftar ADR](#-7-architecture-decision-records-adr)

---

</div>

> 💡 **Tentang Repositori Ini:**  
> Repositori ini adalah **Public Architecture Showcase** untuk antarmuka dan studi kasus portofolio pribadi Mikail Nurwahid. Basis kode produksi penuh disimpan di repositori privat internal [`Michaelo7710/personal-portfolio-ai`](https://github.com/Michaelo7710/personal-portfolio-ai).

---

## 🎯 Mengapa Proyek Ini Dibangun? (The Core Problem)

Website portofolio insinyur perangkat lunak sering kali terjebak dalam tiga kelemahan sistemik:
1. **Beban Visual & Fragmentasi Identitas (Design Bloat):** Menyediakan terlalu banyak tema visual dekoratif yang mengorbankan hierarki informasi teknis, memperlambat Core Web Vitals, dan memuat font eksternal berlebihan.
2. **AI Resume Generator yang Tidak Terkendali (Semantic Blindness):** Sistem generator resume AI konvensional menerima sembarang gambar acak (kucing, makanan, meme) lalu menghasilkan konten resume halusinatif, memboroskan kuota token LLM, dan menghasilkan data gelar akademik fiktif.
3. **Dilema Eksposur Kode Sumber (IP Exposure vs Proof of Craftsmanship):** Keharusan menunjukkan pembuktian kualitas rekayasa sistem kepada rekruter elit sering kali berujung pada kebocoran logika bisnis atau prompt proprietary jika seluruh kode di-open source sembarangan.

**Personal Portfolio AI** dirancang dari nol (*clean-slate engineering*) untuk menjawab ketiga tantangan tersebut secara elegan, kokoh, dan deterministik.

---

## 🏛️ 1. Arsitektur Sistem — Clean Web Architecture

Aplikasi dibangun di atas **Next.js 16 App Router** dengan pemisahan lapisan tanggung jawab yang ketat:

```mermaid
flowchart TD
    subgraph ClientLayer["🎨 Lapisan Klien & Presentasi (Next.js 16 / React 19)"]
        UI["Bauhaus Design Components (Atomic / Radix UI)"]
        DialogMDX["Case Study Modal & Canonical Route (/portfolio/[slug])"]
        ClientForm["Multimodal ATS Generator Form (Text / Image Loker)"]
        Tokens["Bauhaus Design Tokens (WCAG 2.1 AA Certified)"]
    end

    subgraph ServerLayer["⚙️ Lapisan Serverless & Orkestrasi API"]
        RouteHandler["Next.js Route Handler (/api/ai/cv-generate)"]
        VacancyGuard["Semantic Vacancy Guard (Heuristic Evaluator)"]
        CircuitBreaker["HTTP 422 Circuit Breaker (Deterministic Reject)"]
    end

    subgraph AILayer["🧠 Lapisan Kecerdasan Multimodal (Google Gemini)"]
        GeminiVision["Gemini Multimodal Vision Engine"]
        StructuredPrompt["Strict ATS Engineering Prompt (Zero Hallucination)"]
        ATSParser["Markdown ATS Formatter (Reverse-Chronological)"]
    end

    subgraph IPLayer["🛡️ Lapisan Kedaulatan & Repositori"]
        PrivateRepo["Private Production Repo (personal-portfolio-ai)"]
        PublicShowcase["Public Showcase & Contracts (personal-portfolio-showcase)"]
    end

    ClientForm -->|POST FormData (Job Spec / Image)| RouteHandler
    RouteHandler --> VacancyGuard
    VacancyGuard -->|Image Bukan Loker| CircuitBreaker
    CircuitBreaker -->|HTTP 422 Unprocessable Entity| ClientForm
    VacancyGuard -->|Loker Valid| GeminiVision
    GeminiVision --> StructuredPrompt
    StructuredPrompt --> ATSParser
    ATSParser -->|HTTP 200 OK + ATS Markdown| ClientForm
    UI -.-> Tokens
    PrivateRepo -.->|Isolasi IP & Ekstrak Kontrak Publik| PublicShowcase
```

---

## 🎨 2. Sistem Desain Monotema Bauhaus

Sistem desain dikunci secara mutlak pada satu filosofi: **Bauhaus (Form Follows Function)**.

### Matriks Warna & Token Visual

| Elemen | Kode Hex | Karakteristik & Kegunaan | Kontras WCAG |
| :--- | :--- | :--- | :--- |
| **Signal Red (Primary)** | `#D02020` | Titik fokal CTA, badge sorotan, dan penanda kritis | **Melampaui AA** |
| **Ultramarine Blue (Secondary)** | `#1850B0` | Tautan arsitektur, navigasi sekunder, dan garis konektor | **Melampaui AA** |
| **Cadmium Yellow (Accent)** | `#F0C020` | Aksen visual, indikator metrik, dan kartu sorotan | **Melampaui AA** |
| **Unbleached Cream (Background)** | `#F5F2EB` | Latar kanvas hangat alami, ramah mata tanpa radiasi putih silau | **Canvas Master** |
| **Obsidian Black (Foreground)** | `#111111` | Tipografi tegas, batas tebal (2px–3px), dan neo-brutalist shadow | **> 12:1 (AAA)** |

### Tipografi Ringan Bebas Bloat
- **Display / Heading:** `Space Grotesk` (Geometris, kokoh, berwibawa).
- **Body / Technical Copy:** `IBM Plex Sans` (Presisi, keterbacaan tinggi pada teks panjang).
- *Optimasi:* 5 font Google yang tidak digunakan dipangkas dari `app/layout.tsx`, menghemat ukuran aset web font secara masif.

---

## 🛡️ 3. AI Semantic Vacancy Guard & Circuit Breaker (HTTP 422)

Untuk mencegah eksploitasi API dan halusinasi resume terhadap masukan gambar acak (non-loker), sistem menerapkan validasi semantik dua lapis:

### Diagram Alir Pengujian Semantik

```
Input Gambar / Teks Masuk
        │
        ▼
Evaluasi Heuristik Loker (Semantic Guard)
        │
   ┌────┴────────────────────────┐
   │ Apakah konten info loker?  │
   └────┬────────────────────────┘
        │
   [TIDAK] ───► HTTP 422 Unprocessable Entity
        │       {
        │         "success": false,
        │         "code": "NON_VACANCY_IMAGE",
        │         "error": "Gambar yang Anda unggah tidak terdeteksi sebagai lowongan kerja..."
        │       }
        │
   [YA] ──────► Ekstraksi Relevansi Profil Insinyur
                Format ATS Markdown Terstruktur
                HTTP 200 OK
```

---

## 🎓 4. Integritas ATS Resume — Zero Educational Hallucination

Sistem menerapkan standardisasi etis mutlak terhadap riwayat kualifikasi:
- **Larangan Gelar Fiktif:** Sistem secara eksplisit memblokir pembuatan gelar sarjana fiktif (*Bachelor of CS*) jika pengguna tidak menyediakannya.
- **Independent Systems Engineering Track:** Dokumen resume memfokuskan pilar kualifikasi pada rekayasa sistem riil:
  ```markdown
  ## EDUCATION & CREDENTIALS
  - **Independent Systems Engineering Track & Continuous Specializations**
    *Fokus Pembelajaran:* Clean Architecture, Distributed Mobile-Backend Systems, Fullstack Systems Engineering, Applied AI Engineering.
  ```
- **Lolos Parser Mesin ATS:** Format output menggunakan Markdown murni ramah parser ATS tanpa elemen grafis yang membingungkan OCR rekruter.

---

## 📋 5. Kontrak Antarmuka Publik (TypeScript)

Seluruh definisi tipe data antarmuka publik diekspos secara transparan dalam direktori [`contracts/`](./contracts):
- [`contracts/ats-cv-engine.ts`](./contracts/ats-cv-engine.ts): Tipe data I/O request, response sukses, respons penolakan HTTP 422, dan verifikasi semantik.
- [`contracts/portfolio-schema.ts`](./contracts/portfolio-schema.ts): Tipe metadata proyek portofolio, kerangka STAR, metrik arsitektur, dan tautan showcase.
- [`contracts/bauhaus-theme-tokens.ts`](./contracts/bauhaus-theme-tokens.ts): Spesifikasi palet warna, tipografi, batas border, dan rasio aksesibilitas WCAG.

---

## 🧪 6. Laporan Verifikasi Kualitas & Test Suite

Seluruh komponen dan fungsi diuji secara ketat sebelum dirilis:

```
✓ TypeScript Typecheck  : 0 Errors (Strict Type-Safety)
✓ ESLint Analysis       : 0 Warnings, 0 Errors
✓ Vitest Test Suite     : 38/38 Test Files Passed (100%)
✓ Total Unit Tests      : 124/124 Tests Passed (100% Green)
✓ Next.js Build SSG     : 58/58 Static Pages Generated (Webpack Engine)
```

---

## 📚 7. Architecture Decision Records (ADR)

Keputusan arsitektur penting didokumentasikan secara formal dalam direktori [`docs/adr/`](./docs/adr):
1. [**ADR-001**](./docs/adr/ADR-001-nextjs16-compiler-and-font-optimization.md): Next.js 16 Webpack Compiler Stability & Zero Font Bloat.
2. [**ADR-002**](./docs/adr/ADR-002-monotheme-bauhaus-design-system.md): Monotema Bauhaus Murni & Eliminasi Beban Visual Fragmentasi.
3. [**ADR-003**](./docs/adr/ADR-003-ai-semantic-vacancy-guard-and-http-422.md): AI Semantic Vacancy Guard & Error 422 Circuit Breaker.
4. [**ADR-004**](./docs/adr/ADR-004-dual-repository-ip-isolation-strategy.md): Dual-Repository IP Isolation & Public Showcase Architecture.
5. [**ADR-005**](./docs/adr/ADR-005-zero-educational-hallucination-and-ats-integrity.md): Eliminasi Halusinasi Gelar Pendidikan & Integritas ATS Engineering Track.

---

<div align="center">

**Dikurasi dan Dikelola oleh Tim Rekayasa Sistem**  
*Membangun Produk Digital Andal, Kredibel, dan Kedaulatan Arsitektur Penuh.*

</div>
