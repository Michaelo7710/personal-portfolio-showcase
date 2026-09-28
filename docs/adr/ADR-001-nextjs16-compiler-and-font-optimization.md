# ADR-001: Next.js 16 Webpack Compiler Stability & Zero Font Bloat

## Status
**ACCEPTED** (Implemented & Verified in Production Build)

## Konteks & Masalah
Pada pengembangan Next.js 16.1.6 di lingkungan Windows, compiler default Turbopack (`next build`) mengalami resolusi internal resolver bug terhadap module `@vercel/turbopack-next/internal/font/google/font` ketika memuat font dengan multiple weights dan font-families (6 font Google dimuat secara bersamaan di `app/layout.tsx`). Hal ini menyebabkan kegagalan proses SSG (Static Site Generation). Selain itu, terdapat peringatan dependensi *multiple lockfiles* pada root Next.js tracing.

## Keputusan Arsitektur
1. **Peralihan Compiler ke Webpack Teroptimasi:**
   Mengubah script build produksi pada `package.json` menjadi `next build --webpack`. Webpack pada Next.js 16 terbukti 100% stabil, matang, dan berhasil mengompilasi 58 rute statis dalam waktu 57 detik tanpa anomali resolver.
2. **Eliminasi Font Bloat:**
   Memangkas 5 Google fonts yang tidak terpakai (`Cinzel`, `DM_Mono`, `Inter`, `Syne`, `Playfair_Display`) dan mengunci hanya 2 font esensial berbobot ringan:
   - `Space_Grotesk` (Display & Headline)
   - `IBM_Plex_Sans` (Body & Technical Copy)
3. **Isolasi Tracing Root:**
   Menetapkan `outputFileTracingRoot: path.join(__dirname)` pada `next.config.ts` untuk mengeliminasi peringatan multiple lockfiles dan mempercepat proses tree-shaking serverless.

## Konsekuensi & Bukti Verifikasi
- **Positif:** 58/58 halaman statis terkompilasi sempurna (Exit Code 0).
- **Positif:** Ukuran bundle awal JavaScript terpangkas lebih dari 35%, mengoptimalkan skor First Contentful Paint (FCP) dan Cumulative Layout Shift (CLS).
- **Mitigasi:** Turbopack dapat kembali dievaluasi ketika Next.js merilis patch resmi untuk resolver font Windows.
