# Deploy Next.js Project to Hostinger 🚀

## Prerequisites
- Akun Hostinger dengan **Node.js Hosting** aktif.
- Domain yang sudah terhubung ke hosting (atau sub‑domain).
- Git (opsional) atau akses FTP/File Manager di hPanel.

## 1️⃣ Persiapan Lokally
```powershell
# Masuk ke folder proyek
cd "C:\Users\guest 1\Downloads\Compressed\v0-website-generation-prompt-main\v0-website-generation-prompt-main"

# Install dependensi & buat build produksi
npm ci
npm run build   # menghasilkan .next
```
Jika ingin versi **static**:
```powershell
npm run export   # hasil di folder out/
```

## 2️⃣ File Penting untuk Deploy
- **package.json** (sudah di‑update `"start": "node server.js"`).
- **server.js** – entry point yang akan dipakai Hostinger.
- **.next** (atau **out/** jika static) – hasil `npm run build`/`export`.
- Semua folder **components**, **app**, **public**, **styles**, dll.

## 3️⃣ Upload ke Hostinger
### Metode A – **File Manager / FTP**
1. **Zip** seluruh isi folder proyek (kecualikan `node_modules`).
2. Masuk ke **hPanel → File Manager**.
3. Upload file ZIP ke direktori root yang Anda tentukan (mis. `/home/username/seonsem-site`).
4. Klik **Extract**.

### Metode B – **Git Deployment**
1. Pada hPanel, pilih **Git** → **Create Repository** atau **Connect Existing**.
2. Masukkan URL repo (GitHub/Bitbucket) dan pilih folder target yang sama.
3. Klik **Pull**.

## 4️⃣ Install Dependensi di Server
Buka **Terminal** di hPanel (atau SSH) lalu jalankan:
```bash
cd /home/username/seonsem-site   # sesuaikan path
npm ci
npm run build   # atau npm run export jika ingin static
```
> **Catatan:** `npm ci` memastikan versi yang tepat sesuai `package-lock.json`.

## 5️⃣ Konfigurasi Aplikasi Node.js
1. Di hPanel → **Node.js → Create New Application**.
2. Isi:
   - **Application Name:** `seonsem-site`
   - **Root Directory:** `/home/username/seonsem-site`
   - **Node.js Version:** pilih versi LTS (mis. 20.x)
   - **Startup File:** `server.js`
3. Simpan, lalu klik **Restart**.

## 6️⃣ (Opsional) Set Environment Variables
Jika ada variabel `.env`, tambahkan di **Node.js → Environment Variables** dan restart lagi.

## 7️⃣ Cek Situs
Buka domain Anda di browser. Semua meta tag SEO, animasi, dan komponen dinamis (contoh: PromoFlyer) harus berfungsi.

## 8️⃣ Troubleshooting
- **Log aplikasi:** hPanel → **Node.js → Logs**.
- **Port error:** Pastikan `server.js` memakai `process.env.PORT` (sudah ada).
- **SSL:** Aktifkan **Free SSL** di hPanel → **SSL**.

---
**Selamat!** Situs Next.js Anda kini live di Hostinger.
