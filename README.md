# 🚀 Abhay Ambekar - Portfolio

A modern, responsive portfolio website built with React, featuring dynamic theming, smooth animations, and an elegant UI design.

## ✨ Features

- **🎨 Dynamic Theming**: 
  - 8 preset accent colors (Cyan, Green, Blue, Purple, Pink, Red, Orange, Yellow)
  - Custom color picker for unlimited customization
  - Dark/Light mode toggle
  - Real-time theme changes across the entire site

- **📱 Fully Responsive**: 
  - Optimized for desktop, tablet, and mobile devices
  - Adaptive layouts and sizing
  - Touch-friendly interactions

- **🎭 Smooth Animations**:
  - Powered by Framer Motion
  - Typewriter effect for job titles
  - Smooth page transitions
  - Interactive hover effects

- **🎯 Sections**:
  - **About**: Professional summary, stats, and social links
  - **Projects**: Showcase of work with tech stacks and links
  - **Experience**: Professional timeline with company logos
  - **Skills**: Comprehensive skill set with proficiency levels
  - **Education**: Academic background with university logos

- **🔧 Additional Features**:
  - Fullscreen mode for each section
  - Settings panel for customization
  - Downloadable CV
  - Direct email contact integration
  - Social media links (LinkedIn, GitHub)

## 🛠️ Tech Stack

- **React 19** - UI Framework
- **Vite** - Build tool and dev server
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio-react.git

# Navigate to project directory
cd portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment

### GitHub Pages

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

### Manual Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal details (name, title, location)
- About section content
- Projects
- Experience history
- Skills
- Education
- Contact information

### Theming

Themes are dynamically generated based on CSS variables. You can modify the default theme in `src/App.jsx`:

```javascript
const [accentColor, setAccentColor] = useState('#00ffff');
const [isDarkMode, setIsDarkMode] = useState(true);
```

### Profile Images

Replace the following images in the `public` folder:
- `spf.png` - Sidebar profile picture
- `abhay.JPG` - About section profile picture

### CV/Resume

Upload your CV to Google Drive and update the download link in `src/data/portfolioData.js`.

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── abhay.JPG          # About section profile image
│   ├── spf.png            # Sidebar profile image
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/
│   │   ├── About.jsx      # About section
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Experience.jsx # Work experience timeline
│   │   ├── Skills.jsx     # Skills grid
│   │   └── Education.jsx  # Education history
│   ├── data/
│   │   └── portfolioData.js  # All portfolio content
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Color Themes

The portfolio comes with 8 beautiful preset colors:

| Color    | Hex Code  |
|----------|-----------|
| Cyan     | `#00ffff` |
| Green    | `#00ff00` |
| Blue     | `#0066ff` |
| Purple   | `#9945ff` |
| Pink     | `#ff00ff` |
| Red      | `#ff0055` |
| Orange   | `#ff6600` |
| Yellow   | `#ffcc00` |

Plus a custom color picker for any color you want!

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Abhay Ambekar**
- Email: abhay.shrihari.ambekar@gmail.com
- LinkedIn: [linkedin.com/in/abhay3020](https://linkedin.com/in/abhay3020)
- Location: Texas, USA

## 🙏 Acknowledgments

- Design inspiration from Mark Choi and Ryan Balieiro portfolios
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

Made with ❤️ using React and Vite
