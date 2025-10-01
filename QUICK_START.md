# 🚀 Quick Start - Push to GitHub

## Prerequisites
- A GitHub account
- Your GitHub username

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Visit: https://github.com/new
2. Fill in:
   - **Repository name**: `portfolio-react`
   - **Description**: `Modern portfolio with dynamic theming`
   - **Visibility**: Public ✅
   - **DO NOT** check any initialization options
3. Click **"Create repository"**

### 2. Push Your Code

Copy and run these commands **ONE BY ONE** in your terminal:

```bash
# Navigate to project directory
cd /Users/abhayambekar/Documents/projects/cl/portfolio-react

# Add remote repository (REPLACE YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-react.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example** (if your username is `abhay3020`):
```bash
git remote add origin https://github.com/abhay3020/portfolio-react.git
git branch -M main
git push -u origin main
```

### 3. Deploy to GitHub Pages

Run this command to build and deploy:

```bash
npm run deploy
```

✅ Your portfolio will be live at: `https://YOUR_USERNAME.github.io/portfolio-react/`

### 4. Enable GitHub Pages (if needed)

If the site doesn't work:
1. Go to your repository: `https://github.com/YOUR_USERNAME/portfolio-react`
2. Click **Settings** → **Pages**
3. Under **Source**, select **gh-pages** branch
4. Click **Save**
5. Wait 1-2 minutes for deployment

---

## Alternative: Use Vercel (Easier & Faster)

1. Visit: https://vercel.com/login
2. Sign in with GitHub
3. Click **"Add New..."** → **"Project"**
4. Import `portfolio-react` repository
5. Click **"Deploy"**
6. ✅ Done! Your site is live at: `https://your-project.vercel.app`

---

## What's Included

✨ **Features Ready:**
- Dynamic theming (8 colors + custom)
- Dark/Light mode
- Fully responsive design
- Smooth animations
- Fullscreen mode
- Settings panel

📝 **To Customize:**
- Edit `src/data/portfolioData.js` for your content
- Replace images in `public/` folder
- Update CV link in portfolio data

---

## Need Help?

- Full documentation: [README.md](README.md)
- Deployment guide: [DEPLOYMENT.md](DEPLOYMENT.md)
- Issues? Open an issue on GitHub

---

**Happy Deploying! 🎉**

