---
description: How to deploy the VIVEKANANDHA school project to Vercel
---

Deploying your Next.js project to Vercel is straightforward. Follow these steps:

### 1. Prepare your Repository
Make sure your code is pushed to a Git provider (GitHub, GitLab, or Bitbucket).
1. Initialize git (if not done): `git init`
2. Add files: `git add .`
3. Commit: `git commit -m "Initial commit of Vivekanandha School website"`
4. Push to your repository.

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** and then **"Project"**.
3. Import your Git repository.

### 3. Configure Build Settings
During the import process:
1. **Framework Preset**: Ensure it's set to **Next.js**.
2. **Root Directory**: Should be `./` (default).
3. **Build Command**: `next build` (default).

### 4. Handle Dependency Conflicts (CRITICAL)
Since this project uses React 19 and requires legacy peer dependency resolution:
1. Expand the **"Environment Variables"** section.
2. Add a new variable:
   - **Key**: `NPM_CONFIG_LEGACY_PEER_DEPS`
   - **Value**: `true`
3. Click **Add**.

### 5. Deploy
1. Click **"Deploy"**.
2. Wait a few minutes for Vercel to build and launch your site.

### 6. Custom Domain (Optional)
Once deployed, Vercel will give you a `.vercel.app` URL. You can connect your own domain (e.g., `vivekanandhaschool.com`) in the **Project Settings > Domains** tab.
