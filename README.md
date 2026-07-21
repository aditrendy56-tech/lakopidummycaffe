# Lakopi Next.js Landing Page

Landing page Lakopi yang dipindahkan dari HTML statis ke Next.js App Router, siap deploy ke Vercel dan mudah dihubungkan ke Supabase.

## Stack

- Next.js 15
- React 19
- Supabase JS client
- Vercel deployment

## Setup

1. Install dependency:

```bash
npm install
```

2. Salin environment variable dari `.env.example` ke `.env.local`.

3. Jalankan lokal:

```bash
npm run dev
```

## Supabase

Saat ini landing page belum memakai database secara aktif. Client Supabase sudah disiapkan di `lib/supabase/client.ts` supaya nanti mudah ditambah untuk form kontak, leads, atau booking ringan.

Jika ingin menyimpan inquiry dari pengunjung, buat tabel misalnya `inquiries` dengan field:

- `id` uuid
- `name` text
- `contact` text
- `message` text
- `created_at` timestamp with time zone

## Deploy ke Vercel

1. Push repo ke GitHub.
2. Import project di Vercel.
3. Tambahkan environment variable:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy.