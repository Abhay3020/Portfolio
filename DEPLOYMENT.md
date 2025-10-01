# 🚀 Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - Repository name: `portfolio-react`
   - Description: "Modern portfolio website with dynamic theming"
   - Make it **Public** (required for GitHub Pages on free tier)
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, run these commands in your terminal:

```bash
cd /Users/abhayambekar/Documents/projects/cl/portfolio-react

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-react.git

# Push the code
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages

There are two ways to deploy:

### Option A: Using npm script (Automated)

```bash
npm run deploy
```

This will:
1. Build the production version
2. Deploy to GitHub Pages automatically
3. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio-react/`

### Option B: Manual GitHub Pages Setup

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "gh-pages" branch
5. Click "Save"
6. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio-react/`

## Step 4: Update Portfolio Content

To update your portfolio after deployment:

1. Make changes to `src/data/portfolioData.js` or component files
2. Commit your changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
3. Deploy the changes:
   ```bash
   npm run deploy
   ```

## Alternative Deployment Options

### Vercel (Recommended for custom domains)

1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New" → "Project"
4. Import your `portfolio-react` repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

### Netlify

1. Go to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select `portfolio-react` repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

Your site will be live at: `https://random-name.netlify.app`

## Custom Domain Setup

### For GitHub Pages:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Add a `CNAME` file in the `public` folder with your domain name
3. In your domain registrar's DNS settings, add:
   - Type: `A` Record
   - Host: `@`
   - Points to: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Type: `CNAME` Record
   - Host: `www`
   - Points to: `YOUR_USERNAME.github.io`
5. In GitHub repository settings → Pages, add your custom domain

### For Vercel/Netlify:

1. Go to your project settings
2. Add your custom domain
3. Follow the DNS configuration instructions provided
4. Enable HTTPS (automatic)

## Troubleshooting

### Issue: Blank page after deployment
- **Solution**: Check if `base` in `vite.config.js` matches your repository name
- For root domain: `base: '/'`
- For GitHub Pages: `base: '/portfolio-react/'`

### Issue: Images not loading
- **Solution**: Make sure images are in the `public` folder
- Use absolute paths starting with `/` (e.g., `/spf.png`)

### Issue: 404 on page refresh
- **Solution**: For GitHub Pages, this is normal for single-page apps
- For Vercel/Netlify, they handle this automatically

## Updating Node.js Version

If you encounter Node.js version errors:

```bash
# Install nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js 20
nvm install 20
nvm use 20

# Verify
node --version  # Should show v20.x.x
```

## 🎉 Success!

Your portfolio should now be live! Share the link:
- GitHub Pages: `https://YOUR_USERNAME.github.io/portfolio-react/`
- Vercel: `https://your-project.vercel.app`
- Netlify: `https://random-name.netlify.app`

---

**Need help?** Check the main [README.md](README.md) or open an issue on GitHub.

