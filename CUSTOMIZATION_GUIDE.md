# Quick Customization Guide

## 🎯 Most Common Changes

### 1. Update Personal Information

#### Hero Section (`components/Hero.tsx`)
```typescript
// Line 48-50: Update your name
<h1>PHUONG TO</h1>

// Line 58-66: Update taglines
<TypeAnimation
  sequence={[
    'Your Title 1',
    2000,
    'Your Title 2',
    2000,
  ]}
/>

// Line 73-81: Update intro paragraph
<p>Your introduction here...</p>
```

#### Contact Section (`components/Contact.tsx`)
```typescript
// Line 14-44: Update all contact info
const contactInfo = [
  {
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
  },
  // ... update all fields
];
```

### 2. Add Your Photos

Create these directories and add images:
```bash
mkdir public/images
mkdir public/images/projects

# Add your photos:
# public/images/profile-hero.jpg (300x300px, circular)
# public/images/profile-about.jpg (350x350px, square)
# public/images/projects/project1.png (1200x675px, 16:9)
```

Then update the components:

#### Hero Photo (`components/Hero.tsx`, line 42-48)
```typescript
// Replace the placeholder div with:
<Image
  src="/images/profile-hero.jpg"
  alt="Phuong To"
  width={320}
  height={320}
  className="rounded-full object-cover"
/>
```

#### About Photo (`components/About.tsx`, line 44-50)
```typescript
// Replace the placeholder div with:
<Image
  src="/images/profile-about.jpg"
  alt="Phuong To"
  width={400}
  height={400}
  className="rounded-3xl object-cover"
/>
```

#### Project Screenshots (`components/Projects.tsx`)
```typescript
// For each project, replace the placeholder (around line 115):
<Image
  src="/images/projects/maibeauti.png"
  alt="MAiBeauti Project"
  width={600}
  height={400}
  className="rounded-lg object-cover"
/>
```

### 3. Update Projects

#### Edit Featured Projects (`components/Projects.tsx`, line 12-90)
```typescript
const projects = [
  {
    title: 'Your Project Name',
    subtitle: 'Project Subtitle',
    description: 'Full project description...',
    features: [
      '🚀 Feature 1',
      '💡 Feature 2',
    ],
    techStack: [
      { name: 'React', icon: <SiReact /> },
    ],
    github: 'https://github.com/yourusername/project',
    demo: 'https://yourproject.com',
  },
];
```

#### Edit Projects Table (`components/ProjectsTable.tsx`, line 12-60)
```typescript
const projects = [
  {
    skill: 'Your Skills',
    project: 'Project Name',
    github: 'https://github.com/yourusername/project',
  },
];
```

### 4. Update Work Experience

Edit `components/Experience.tsx`, line 14-90:
```typescript
const experiences = [
  {
    company: 'Company Name',
    title: 'Your Job Title',
    duration: 'Start Date – End Date',
    location: 'City, State',
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
    techStack: [
      { name: 'Technology', icon: <IconComponent /> },
    ],
  },
];
```

### 5. Update Skills

Edit `components/Skills.tsx`, line 34-110:
```typescript
const skillCategories = [
  {
    title: 'Category Name',
    skills: [
      { name: 'Skill Name', icon: <IconComponent /> },
    ],
  },
];
```

### 6. Change Colors

Edit `app/globals.css`, line 4-15:
```css
:root {
  /* Background Colors */
  --bg-dark: #0a0514;        /* Main dark background */
  --bg-secondary: #140a1f;   /* Secondary background */
  --bg-card: #1a0f2e;        /* Card background */
  
  /* Accent Colors */
  --neon-pink: #ff006e;      /* Primary pink */
  --neon-pink-glow: #ff1493; /* Pink glow */
  --accent-purple: #8b5cf6;  /* Purple accent */
  
  /* Text Colors */
  --text-primary: #ffffff;   /* White text */
  --text-secondary: #c4b5fd; /* Light purple */
  --text-muted: #94a3b8;     /* Gray text */
}
```

### 7. Update SEO Metadata

Edit `app/layout.tsx`, line 18-35:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your description...',
  keywords: ['keyword1', 'keyword2'],
  authors: [{ name: 'Your Name' }],
};
```

### 8. Add Resume

Replace the placeholder:
```bash
# Add your resume PDF
public/resume.pdf
```

Make sure it's named exactly `resume.pdf` or update the links in:
- `components/Hero.tsx` (line 95)
- `components/Contact.tsx` (line 125)

## 🎨 Advanced Customization

### Change Fonts

Edit `app/layout.tsx`, line 3-15:
```typescript
import { YourFont1, YourFont2 } from 'next/font/google';

const yourFont1 = YourFont1({
  subsets: ['latin'],
  variable: '--font-your-font',
});
```

Then update `app/globals.css`:
```css
body {
  font-family: var(--font-your-font), sans-serif;
}
```

### Add New Sections

1. Create new component in `components/YourSection.tsx`
2. Import in `app/page.tsx`
3. Add to the page:
```typescript
import YourSection from '@/components/YourSection';

export default function Home() {
  return (
    <main>
      {/* ... other sections ... */}
      <YourSection />
    </main>
  );
}
```

### Modify Animations

Edit animation settings in any component:
```typescript
// Change animation duration
transition={{ duration: 0.6 }}

// Change animation delay
transition={{ delay: 0.2 }}

// Change animation type
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
```

## 📱 Responsive Breakpoints

Tailwind CSS breakpoints used:
- `sm:` - 640px and up (small tablets)
- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (laptops)
- `xl:` - 1280px and up (desktops)

Example:
```typescript
<div className="text-sm md:text-base lg:text-lg">
  // Small on mobile, medium on tablet, large on desktop
</div>
```

## 🔍 Finding What to Edit

### To change text content:
1. Find the section on the page
2. Open the corresponding component file
3. Search for the text you want to change
4. Update it

### To change styling:
1. Look for `className` attributes
2. Tailwind classes: `bg-pink-500`, `text-white`, etc.
3. Custom classes: `glass-card`, `gradient-text`, etc.
4. Custom classes are defined in `app/globals.css`

### To add/remove sections:
1. Edit `app/page.tsx`
2. Comment out or remove component imports
3. The page will update automatically

## 💡 Pro Tips

1. **Use VS Code**: Install the Tailwind CSS IntelliSense extension
2. **Hot Reload**: Changes auto-refresh in the browser
3. **Component Structure**: Each section is a separate component
4. **Icons**: Browse icons at https://react-icons.github.io/
5. **Colors**: Use https://uicolors.app/ to generate color palettes

## 🐛 Common Issues

### Images not showing?
- Check file path is correct
- Make sure image is in `public/` folder
- Use `/images/photo.jpg` not `public/images/photo.jpg`

### Styles not applying?
- Check for typos in className
- Make sure Tailwind class exists
- Clear cache: delete `.next` folder and restart

### TypeScript errors?
- Check for missing imports
- Verify prop types match
- Look at the error message in terminal

## 📞 Need Help?

- Check the main README.md
- Look at Next.js docs: https://nextjs.org/docs
- Check Tailwind docs: https://tailwindcss.com/docs

---

**Happy customizing! 🎨**
