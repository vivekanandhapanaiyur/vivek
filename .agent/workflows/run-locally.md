---
description: How to run the VIVEKANANDHA school project locally
---

To run this project on your local machine, follow these steps:

### 1. Open Terminal
Open PowerShell or Command Prompt in the project folder `c:\Users\DELL\vivekanandha`.

### 2. Fix Execution Policy (If needed)
If you see an error about `npm.ps1` not being able to load, run this command once to allow script execution:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 3. Install Dependencies
Install all the necessary packages (Next.js, GSAP, Lenis, etc.):
```bash
npm install
```

### 4. Run Development Server
Start the local server:
```bash
npm run dev
```

### 5. View in Browser
Open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

---

### Production Build (Optional)
To test the production build:
```bash
npm run build
npm start
```
