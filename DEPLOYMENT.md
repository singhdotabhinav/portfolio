# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages for free.

## Prerequisites

- GitHub account
- Git installed on your machine
- Code pushed to a GitHub repository

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

If you haven't already, push your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 2. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/portfolio`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### 3. Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your Next.js app as static files
- Deploy to GitHub Pages
- Run on every push to the `main` branch

### 4. Access Your Site

After the first deployment (usually takes 1-2 minutes), your site will be live at:

- **If repo name is `portfolio`**: `https://YOUR_USERNAME.github.io/portfolio/`
- **If repo name matches your username**: `https://YOUR_USERNAME.github.io/`

### 5. Check Deployment Status

1. Go to your repository on GitHub
2. Click on **Actions** tab
3. You'll see the deployment workflow running
4. Once complete, click on it to see the deployment URL

## Important Notes

### If Deploying to a Subdirectory

If your repository name is NOT your username (e.g., `portfolio`), you need to update `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',  // Replace 'portfolio' with your repo name
  assetPrefix: '/portfolio',  // Replace 'portfolio' with your repo name
};
```

Then rebuild and push:
```bash
npm run build
git add .
git commit -m "Update basePath for GitHub Pages"
git push
```

### Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   yourdomain.com
   ```

2. Update your DNS settings to point to GitHub Pages
3. Enable custom domain in GitHub Pages settings

## Troubleshooting

### Build Fails

- Check the **Actions** tab for error messages
- Make sure all dependencies are in `package.json`
- Ensure `next.config.mjs` has `output: 'export'`

### Assets Not Loading

- Check if `basePath` and `assetPrefix` are set correctly
- Verify all paths use relative URLs (Next.js handles this automatically)

### Videos Not Playing

- Ensure video files are in `public/videos/` directory
- Check file sizes (GitHub Pages has a 100MB file size limit)
- Verify video codec is H.264

## Manual Deployment (Alternative)

If GitHub Actions doesn't work, you can deploy manually:

```bash
# Build the static site
npm run build

# The output will be in the 'out' directory
# Push the 'out' directory to the 'gh-pages' branch
```

But the GitHub Actions method is recommended as it's automatic.

## Updating Your Site

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Actions will automatically rebuild and redeploy your site!

