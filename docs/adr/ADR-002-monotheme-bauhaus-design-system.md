# ADR-002: Monotema Bauhaus Murni & Eliminasi Beban Visual Fragmentasi

## Status
**ACCEPTED** (Implemented & Verified)

## Konteks & Masalah
Sebelumnya, sistem portofolio menyediakan 12 pilihan tema desain berbeda (`bauhaus`, `editorial`, `brutalist`, `luxury`, `swiss`, `retro-computing`, dll) di dalam `config/marketing-designs.ts`. Keberadaan 12 tema ini menimbulkan fragmentasi identitas brand insinyur, redundansi ratusan baris CSS classes, serta menurunkan fokus pembaca/rekruter terhadap esensi portofolio dan proyek rekayasa sistem yang dipamerkan.

## Keputusan Arsitektur
1. **Penguncian Monotema Bauhaus:**
   Mengeliminasi 11 tema lain dan menetapkan tema `bauhaus` sebagai satu-satunya sistem visual aplikasi (*Single Source of Truth*).
2. **Karakteristik Desain Bauhaus:**
   - **Form Follows Function:** Struktur tata letak geometris rasional tanpa hiasan yang tidak fungsional.
   - **Trio Warna Primer:** Merah Sinyal (`#D02020`), Biru Ultramarine (`#1850B0`), dan Kuning Cadmium (`#F0C020`).
   - **Kontras Tinggi & Garis Tegas:** Batas struktural 2px–3px berwarna hitam pekat (`#111111`) dengan neo-brutalist hard shadow (`4px 4px 0px #111111`).
   - **Kepatuhan Aksesibilitas:** Rasio kontras teks terhadap latar belakang kanvas unbleached (`#F5F2EB`) selalu melampaui standar WCAG 2.1 AA (rasio kontras > 7:1).

## Konsekuensi & Bukti Verifikasi
- **Positif:** Identitas visual personal engineer menjadi sangat kuat, distingtif, dan memorable di mata rekruter global.
- **Positif:** Mengurangi ukuran CSS stylesheet global dan meniadakan kompleksitas state switching tema di sisi klien.
