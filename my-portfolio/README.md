# John Doe - Personal Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode toggle, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Meta tags and structured data
- **Fast Performance**: Built with Vite for optimal loading
- **Accessible**: WCAG compliant design patterns

## 📋 Sections

1. **Hero Section** - Animated background with call-to-action buttons
2. **About Me** - Personal introduction and tech stack showcase
3. **Skills** - Interactive skill bars and technology grid
4. **Projects** - Portfolio of featured projects with live demos
5. **Experience** - Professional timeline with achievements
6. **Contact** - Contact form and social media links
7. **Footer** - Clean footer with quick links

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Customization

### Personal Information
Update the following files with your information:

- **Name & Title**: Update in `src/components/Hero.tsx`
- **About Section**: Modify content in `src/components/About.tsx`
- **Skills**: Edit skill levels in `src/components/Skills.tsx`
- **Projects**: Add your projects in `src/components/Projects.tsx`
- **Experience**: Update work history in `src/components/Experience.tsx`
- **Contact**: Update contact info in `src/components/Contact.tsx`

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font families in the Tailwind config
- **Animations**: Customize Framer Motion animations in components

### SEO
Update meta tags in `index.html`:
- Title and description
- Open Graph tags
- Twitter Card tags
- Canonical URL

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Dark Mode

Dark mode is implemented using Tailwind's dark class strategy:
- Automatically detects system preference
- Toggle button in navigation
- Persists user preference in localStorage

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The project can be deployed to any static hosting service:
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Loading Speed**: Fast initial load with lazy loading
- **SEO**: Fully optimized for search engines

## 🔍 SEO Features

- Meta tags for all major platforms
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Sitemap generation ready
- Robots.txt configuration

## 🛡️ Security

- No sensitive data in client-side code
- Secure form handling
- HTTPS enforcement
- Content Security Policy ready

## 📈 Analytics

To add analytics, update the following:

### Google Analytics
Add your GA4 tracking ID to `index.html`

### Other Analytics
Integrate your preferred analytics service in the head section

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for build tooling

## 📞 Support

If you have any questions or need help customizing the portfolio:

- Create an issue on GitHub
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]

---

**Made with ❤️ by John Doe**
