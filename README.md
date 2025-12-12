# Portfolio Website - Phuong To

A stunning, modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring glassmorphism effects, smooth animations, and a beautiful pink/purple neon theme.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, gradient text, and neon glow animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations and scroll-triggered effects
- **SEO Optimized**: Proper meta tags, semantic HTML, and optimized performance
- **Type-Safe**: Built with TypeScript for better code quality
- **Fast Performance**: Next.js 14 with App Router and optimized builds

## 📋 Sections

1. **Navigation** - Sticky navigation with glassmorphism effect
2. **Hero** - Eye-catching introduction with animated typing effect
3. **About** - Personal background and quick facts
4. **Experience** - Work history with timeline and tech stack badges
5. **Projects** - Featured projects with descriptions and links
6. **Projects Table** - Additional projects in table format
7. **Skills** - Categorized tech skills with icons
8. **Contact** - Contact information and social links
9. **Footer** - Credits and back-to-top button

## 🛠️ Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter, Space Grotesk)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/phuongtoVN/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --bg-dark: #0a0514;
  --neon-pink: #ff006e;
  --accent-purple: #8b5cf6;
}
```

### Content
Update your information in the component files:
- `components/Hero.tsx` - Name, tagline, intro
- `components/About.tsx` - Bio and background
- `components/Experience.tsx` - Work history
- `components/Projects.tsx` - Featured projects
- `components/Contact.tsx` - Contact information

### Images
Replace placeholder images:
1. Add your profile photo to `public/images/profile.jpg`
2. Add project screenshots to `public/images/projects/`
3. Update image paths in components

### Resume
Add your resume PDF to `public/resume.pdf`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

Vercel will automatically detect Next.js and configure everything.

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

### Deploy to GitHub Pages

Not recommended for Next.js apps. Use Vercel or Netlify instead.

## 📝 To-Do Before Launch

- [ ] Replace placeholder profile photos with actual photos
- [ ] Add project screenshots/mockups
- [ ] Upload your resume PDF to `public/resume.pdf`
- [ ] Update all personal information (email, phone, links)
- [ ] Test on multiple devices and browsers
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)

## 🎯 Performance Optimizations

- Lazy loading for images
- Code splitting with Next.js
- Optimized fonts with `next/font`
- Minimized CSS and JavaScript
- Intersection Observer for scroll animations

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Phuong To**
- LinkedIn: [linkedin.com/in/phuong-y-to/](https://linkedin.com/in/phuong-y-to/)
- GitHub: [@phuongtoVN](https://github.com/phuongtoVN)
- Email: phuongto112vn@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Fonts from Google Fonts
- Animations powered by Framer Motion

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**
