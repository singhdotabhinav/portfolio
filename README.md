# Portfolio Website - Abhinav

A modern, interactive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features interactive video animations and a beautiful gradient design.

## 🚀 Features

- **Interactive Video Animations**: Custom animated character videos that transition from waving to working
- **Modern UI/UX**: Beautiful gradient design with smooth animations using Framer Motion
- **Responsive Design**: Fully responsive layout that works on all devices
- **Performance Optimized**: Optimized videos and images for fast loading
- **TypeScript**: Fully typed for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Videos
Place your videos in `public/videos/`:
- `waving.MP4` - Initial waving video
- `working.MP4` - Working on laptop video

Videos should be:
- Format: MP4 (H.264 codec)
- Resolution: 624x624 pixels (square)
- Optimized for web (use FFmpeg or HandBrake)

### Content
Edit `app/page.tsx` to update:
- Personal information
- Work experience
- Projects
- Skills
- Contact information

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### GitHub Pages (Free)
This portfolio is configured for GitHub Pages deployment:

1. **Push your code to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on every push to `main`

3. **Your site will be live at:**
   - `https://YOUR_USERNAME.github.io/portfolio/` (if repo name is `portfolio`)
   - Or `https://YOUR_USERNAME.github.io/` (if repo name matches your username)

**Note:** If deploying to a subdirectory, update `basePath` and `assetPrefix` in `next.config.mjs`

### Other Platforms
- **Vercel**: Import repository, auto-deploys
- **Netlify**: Connect GitHub repo, auto-deploys
- **AWS Amplify**: Connect GitHub repo, auto-deploys

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Abhinav**
- Senior Software Engineer
- Python | AWS | Snowflake | Generative AI
- Bengaluru, India

---

Built with ❤️ using Next.js and Tailwind CSS

