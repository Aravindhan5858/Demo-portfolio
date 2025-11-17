# Modern Portfolio - Production Ready

A fully responsive, animated portfolio website built with modern web technologies featuring dark/light themes, glassmorphism design, smooth animations, and isolated certificate components.

## 🌟 Features

### Design & UX
- **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- **Glassmorphism UI** - Modern glass-effect cards with backdrop blur
- **Neon Accent Colors** - Purple-to-cyan gradient accents
- **Smooth Animations** - GPU-accelerated transitions with IntersectionObserver
- **Responsive Layout** - Mobile-first design with breakpoints for all devices
- **Accessibility** - WCAG compliant with ARIA labels and keyboard navigation

### Sections
- **Hero** - Animated landing with floating gradient orbs
- **About** - Sticky profile card with timeline and stats
- **Projects** - Hover-interactive project cards with tech stack tags
- **Skills** - Categorized skill badges with glow effects
- **Certificates** - **Isolated components** with individual image URL management
- **Contact** - Functional form with social links

### Technical Features
- **Web Components** (vanilla version) - Custom `<certificate-card>` elements
- **React Local State** (React version) - Per-component useState isolation
- **Smooth Scrolling** - Native scroll-behavior with active link tracking
- **Lazy Loading** - Images load only when visible
- **Performance Optimized** - Transform-based animations, minimal reflows
- **Zero Dependencies** - Standalone HTML version requires no build step

---

## 🚀 Quick Start

### Option A: Standalone HTML (Zero Dependencies)

1. **Open the file:**
   ```bash
   open portfolio-standalone.html
   ```
   Or drag `portfolio-standalone.html` into your browser.

2. **That's it!** The page is fully functional with:
   - Dark/light theme toggle
   - Smooth scroll navigation
   - Certificate image URL paste functionality
   - All animations and interactions

### Option B: React + Vite Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output in `dist/` folder

---

## 📚 Certificate Component Isolation

### How It Works

Each certificate card is an **independent component** that manages its own state without affecting other cards.

#### Vanilla JS (Web Components)
```html
<certificate-card 
  title="React Professional Certificate"
  issuer="Meta"
  default-image="https://example.com/cert.jpg">
</certificate-card>
```

Each `<certificate-card>` uses Shadow DOM to encapsulate:
- Local state (imageUrl, isEditing, isLoading, hasError)
- Event listeners scoped to that card only
- Isolated styling

#### React (Local useState)
```jsx
<CertificateCard
  title="React Professional Certificate"
  issuer="Meta"
  defaultImage="https://example.com/cert.jpg"
/>
```

Each `<CertificateCard>` component uses:
- `useState` for local image URL state
- Individual event handlers
- No global state or context

### Using the Certificate Cards

1. **Hover** over any certificate card
2. Click **"Add Image URL"**
3. **Paste** your certificate image URL (auto-saves on paste)
4. Or type/edit the URL and press **Enter** or click **Save**
5. Click **"View Full"** to open the image in a new tab

**Key Feature:** Updating one card does **not** re-render any other cards.

---

## 🎨 Customization

### Change Colors

Edit CSS variables in `index.css` or `<style>` section:

```css
:root {
  --accent-primary: #8b5cf6;  /* Purple */
  --accent-secondary: #06b6d4; /* Cyan */
  /* Change to your brand colors */
}
```

### Update Content

#### Standalone HTML
Edit content directly in `portfolio-standalone.html`:
- Personal info in Hero section
- About timeline items
- Project cards data
- Skills lists
- Contact details

#### React Version
Edit data in component files:
- `src/pages/Home.jsx` - Hero content
- `src/pages/About.jsx` - Bio and timeline
- `src/pages/Projects.jsx` - `projectsData` array
- `src/pages/Gallery.jsx` - `skillsData` object
- `src/pages/Contact.jsx` - Contact info
- `src/pages/Certificates.jsx` - `certificatesData` array

### Add/Remove Sections

**React:** Update `src/App.jsx`:
```jsx
<section id="newsection" className="section reveal">
  <NewComponent />
</section>
```

Update `src/components/Sidebar.jsx` nav items.

---

## ⚙️ Animations & Accessibility

### Smooth Scroll

Automatic smooth scrolling is enabled. Navigation links use:
```javascript
element.scrollIntoView({ behavior: 'smooth', block: 'start' })
```

### Scroll Animations

Elements with class `.reveal` fade in when scrolled into view using IntersectionObserver.

### Reduced Motion

Respects user's motion preferences:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Tab through navigation, skills, and certificates
- Enter/Space activate buttons
- Escape closes certificate edit mode

---

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- All modern mobile browsers

**Required Features:**
- CSS Grid & Flexbox
- CSS Custom Properties
- IntersectionObserver
- Web Components (for standalone version)

---

## 📁 File Structure

### Standalone Version
```
portfolio-standalone.html    # Complete single-file app
```

### React Version
```
Demo-portfolio/
├── index.html              # Entry HTML
├── index.css               # Global theme styles
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx             # Main app with routing
    ├── index.css           # Import wrapper
    ├── main.jsx            # React entry point
    ├── components/
    │   ├── Sidebar.jsx     # Navigation with active tracking
    │   └── CertificateCard.jsx  # Isolated certificate component
    └── pages/
        ├── Home.jsx        # Hero section
        ├── About.jsx       # About with timeline
        ├── Projects.jsx    # Project grid
        ├── Gallery.jsx     # Skills section
        ├── Certificates.jsx # Certificate gallery
        └── Contact.jsx     # Contact form
```

---

## 🔧 Troubleshooting

### Images not loading in certificates
- Ensure the URL is publicly accessible
- Check browser console for CORS errors
- Use direct image URLs (not HTML pages)

### Smooth scroll not working
- Ensure `scroll-behavior: smooth` is in CSS
- Check browser support for native smooth scrolling
- JavaScript fallback is included

### Theme not persisting
- Check localStorage is enabled in browser
- Verify `localStorage.getItem('theme')` works in console

### Build errors (React)
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📝 License

Free to use for personal and commercial projects.

---

## 🤝 Contributing

This is a template project. Feel free to:
- Fork and customize
- Submit improvements via pull requests
- Report bugs or suggest features

---

## 📧 Contact

Built by **Aravindhan.C**
- Email: aravindhan@example.com
- GitHub: [Update with your GitHub URL]

---

## ⭐ Acknowledgments

- Design inspiration: Modern portfolio trends 2024-2025
- Glassmorphism: CSS backdrop-filter techniques
- Animations: GPU-accelerated transform patterns
- Web Components: MDN Web Components guide
- React patterns: React 18 best practices

---

**Enjoy building your portfolio! 🚀**
