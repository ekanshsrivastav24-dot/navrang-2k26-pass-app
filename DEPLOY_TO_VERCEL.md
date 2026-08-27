# 🚀 How to Deploy Navrang 2K26 App to Vercel (Free 1-Click Guide)

Follow these simple steps to put the **Navrang 2K26** ticketing and gate scanner web app live on Vercel with a free hosted database.

---

## Step 1: Get a Free Cloud Database (1 Minute)

Because Vercel serverless functions run across cloud instances, you need a free hosted PostgreSQL database (like **Neon** or **Supabase**):

1. Go to **[neon.tech](https://neon.tech)** (or [supabase.com](https://supabase.com)) and sign up for free.
2. Click **Create Project** -> Name it `navrang-2k26`.
3. Copy your **Connection String** (`DATABASE_URL`), which looks like:
   ```
   postgresql://neondb_owner:npg_xyz@ep-cool-sample.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

---

## Step 2: Push Project to GitHub

Open terminal in the project directory:
```bash
cd C:\Users\sriva\.gemini\antigravity\scratch\dandiya-pass-app

git init
git add .
git commit -m "Initial commit for Navrang 2K26"
```
Create a new GitHub repository (e.g. `navrang-2k26-pass-app`) and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/navrang-2k26-pass-app.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com)** and log in with GitHub.
2. Click **"Add New Project"** -> Import your `navrang-2k26-pass-app` repository.
3. In **Environment Variables**, add the following:

| Key | Value |
| :--- | :--- |
| `DATABASE_URL` | *Your Neon / Supabase connection string from Step 1* |
| `APP_SECRET` | `navrang-2k26-secret-security-key-garba-auth` |
| `ADMIN_ID` | `admin` |
| `ADMIN_PASSWORD` | `navrang@admin2026` |
| `GATE_PASSWORD` | `gate@2026` |

4. Click **Deploy**! 🚀
   - Vercel will automatically build the Next.js app, sync the Prisma schema, and give you a live HTTPS URL (e.g. `https://navrang2k26.vercel.app`).

---

## Step 4: Seed Initial Event Data (Optional)

To seed initial settings and sample passes in your new cloud database, run:
```bash
npx prisma db push --schema=prisma/schema.postgresql.prisma
node prisma/seed.js
```

---

## 📱 Mobile Gate Volunteers

Volunteers can open `https://your-app.vercel.app/scanner` directly in Safari or Chrome on their smartphones to scan QR codes seamlessly with the device camera!
