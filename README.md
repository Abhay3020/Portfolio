# 🚀 Data Engineer Portfolio

A stunning, modern portfolio website built with React, featuring a dark theme with glassmorphism effects, neon accents, and smooth animations.

## ✨ Features

- **Dark Theme**: Professional dark mode with neon cyan and orange accents
- **Glassmorphism Design**: Beautiful frosted glass effects with backdrop blur
- **Smooth Animations**: Powered by Framer Motion for fluid interactions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **3D Effects**: Subtle hover animations and perspective transforms
- **Modular Components**: Clean, maintainable React component architecture

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd portfolio-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📝 Customizing Your Portfolio

### 1. Update Personal Information

Edit the data props in `src/App.jsx`:

```jsx
// About section data
data={{
  heading: "Your Professional Tagline",
  description: "Your professional summary...",
  stats: {
    experience: "X+",
    projects: "Y+", 
    technologies: "Z+"
  },
  contact: {
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername"
  }
}}
```

### 2. Update Projects

Edit `src/components/Projects.jsx` or pass data as props:

```jsx
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://yourproject.com",
    githubUrl: "https://github.com/yourusername/project"
  }
];
```

### 3. Update Experience

Edit `src/components/Experience.jsx`:

```jsx
const experience = [
  {
    title: "Your Job Title",
    company: "Company Name",
    duration: "2020 - Present",
    location: "City, State",
    description: "Job description...",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2"
    ]
  }
];
```

### 4. Update Skills

Edit `src/components/Skills.jsx`:

```jsx
const skills = {
  "Category 1": [
    { name: "Skill 1", icon: IconComponent },
    { name: "Skill 2", icon: IconComponent }
  ]
};
```

### 5. Update Education

Edit `src/components/Education.jsx`:

```jsx
const education = [
  {
    title: "Your Degree",
    university: "University Name",
    year: "2020",
    description: "Degree description...",
    achievements: ["Achievement 1", "Achievement 2"]
  }
];
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

### Option 2: Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to [Netlify](https://netlify.com)

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   "homepage": "https://yourusername.github.io/portfolio-react",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### Option 4: Custom Domain

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload** the `dist` folder to your web server

## 🎨 Customization Tips

### Colors
Edit the color variables in your styled components:
- `#00ffff` - Neon cyan
- `#ff6b35` - Orange accent
- `#0a0a0a` - Dark background

### Animations
Adjust animation timing in Framer Motion components:
- `duration: 0.6` - Animation speed
- `delay: 0.2` - Stagger delay
- `ease: "easeOut"` - Animation easing

### Layout
Modify the sidebar width and main content margins in the styled components.

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px  
- **Mobile**: 767px and below

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Code Splitting**: Consider lazy loading for heavy components
3. **Bundle Analysis**: Run `npm run build` and check bundle size

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

If you need help customizing your portfolio, feel free to open an issue or reach out!

---

**Happy coding! 🎉**