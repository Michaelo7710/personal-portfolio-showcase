# ADR-004: Dual-Repository IP Isolation & Public Showcase Architecture

## Status
**ACCEPTED** (Implemented & Verified)

## Konteks & Masalah
Pengembang software senior/arsitek sistem membutuhkan etalase publik di GitHub untuk memvalidasi portofolio mereka kepada rekruter dan klien global. Namun, melepaskan basis kode produksi internal secara *full open-source* berisiko:
1. Membocorkan logika bisnis privat dan orkestrasi pipeline AI internal.
2. Membocorkan rancangan prompt sistem rahasia (*secret prompt engineering*).
3. Membuka kerentanan terhadap kloning langsung (*direct asset cloning*) oleh pihak ketiga.

## Keputusan Arsitektur
1. **Penerapan Strategi Repositori Ganda (Dual-Repository Architecture):**
   - **Repositori Privat (`personal-portfolio-ai`):** Menyimpan kode implementasi penuh, server route, integrasi API AI produksi, konfigurasi deployment hosting, dan riwayat sprint internal.
   - **Repositori Publik Showcase (`personal-portfolio-showcase`):** Menyajikan etalase arsitektural komprehensif, kontrak antarmuka TypeScript (`contracts/`), dokumentasi keputusan teknis (`docs/adr/`), diagram dataflow Mermaid, dan laporan pembuktian kualitas uji (124 tests pass, Core Web Vitals).
2. **Klausul Kedaulatan Kode (Sovereignty Clause):**
   Menyematkan pernyataan eksplisit di seluruh studi kasus MDX dan modal dialog bahwa kode sumber privat dilindungi dan rekruter diarahkan ke etalase arsitektur resmi ini.

## Konsekuensi & Bukti Verifikasi
- **Positif:** Kekayaan intelektual (IP) terlindungi 100% tanpa mengorbankan transparansi pembuktian keahlian rekayasa sistem.
- **Positif:** Mengikuti preseden industri Tier A (Apple Architecture Papers, Netflix TechBlog, Stripe API Architecture).
