/* PORTFOLIO QUICK REFERENCE GUIDE */

// ============================================
// CERTIFICATE ISOLATION - HOW IT WORKS
// ============================================

/**
 * VANILLA JS VERSION (Web Components)
 * Each <certificate-card> is a custom element with Shadow DOM
 */

// HTML Usage:
/*
<certificate-card 
  title="Certificate Title"
  issuer="Issuing Organization"
  default-image="https://example.com/image.jpg">
</certificate-card>
*/

// Internal State (per card):
/*
{
  imageUrl: string,
  isEditing: boolean,
  isLoading: boolean,
  hasError: boolean
}
*/

// Event Flow:
// 1. User clicks "Add Image URL" → sets isEditing=true, renders input
// 2. User pastes URL → auto-triggers saveImage()
// 3. saveImage() creates new Image(), tests if loads
// 4. onload → updates imageUrl state, hides input
// 5. onerror → shows error message, keeps input visible

// Why It's Isolated:
// - Shadow DOM prevents style/event leakage
// - Each card has own state variables (no global state)
// - Event listeners scoped to shadowRoot only
// - Re-render affects only that card's DOM subtree


/**
 * REACT VERSION (Local useState)
 * Each CertificateCard component manages independent state
 */

// Component Structure:
function CertificateCard({ title, issuer, defaultImage }) {
  const [imageUrl, setImageUrl] = useState(defaultImage || '')
  const [isEditing, setIsEditing] = useState(false)
  const [inputValue, setInputValue] = useState(defaultImage || '')
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  
  // Each card has own event handlers
  // State updates only trigger re-render of THIS component
}

// Why It's Isolated:
// - No shared state (no Context, no Redux)
// - useState is local to component instance
// - Parent doesn't re-render when child state changes
// - Each card is a separate React fiber node


// CSS (native smooth scroll):
/*
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}
*/
// Example implementation (should be in CSS file):
/*
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}
*/

// JavaScript enhancement:
element.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
})

// Active link tracking:
useEffect(() => {
  const handleScroll = () => {
    const sections = document.querySelectorAll('section')
    const scrollPosition = window.scrollY + 150
    
    sections.forEach(section => {
      if (section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition) {
        // Update active link
      }
    })
  }
  
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])


// ============================================
// SCROLL ANIMATIONS WITH INTERSECTION OBSERVER
// ============================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active')
      }
    })
  },
  { 
    threshold: 0.1,           // Trigger when 10% visible
    rootMargin: '0px 0px -50px 0px'  // Trigger 50px before entering viewport
  }
)

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

// CSS for animation:
/*
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-active {
  opacity: 1;
  transform: translateY(0);
}
*/


// ============================================
// THEME TOGGLE IMPLEMENTATION
// ============================================

// React version:
const [theme, setTheme] = useState(() => 
  localStorage.getItem('theme') || 'dark'
)

// CSS:
/*
:root { dark theme vars }
[data-theme="light"] { light theme vars }
*/
// ============================================
// GLASSMORPHISM EFFECT
// ============================================

/*
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
*/

// Key properties:
// Good (uses compositor):
/*
.animate {
  transform: translateY(-8px);
  opacity: 0.8;
  transition: transform 0.3s, opacity 0.3s;
}
*/

// Bad (causes reflow):
/*
.animate-bad {
  top: -8px;
  margin-top: -8px;
}
*/

// Use will-change sparingly:
/*
.hover-card:hover {
  will-change: transform;
  transform: translateY(-8px);
}
*/
/* Mobile First Approach
.grid {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

Breakpoints used:
- 480px: Small mobile adjustments
- 768px: Tablet
- 1024px: Desktop
- 1400px: Max container width
*/

// ============================================
// ACCESSIBILITY FEATURES
// ============================================

// Skip link:

// Keyboard navigation:
/*
.skill-badge:focus {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}
*/

// Reduced motion:
/*
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
*/

// Change accent colors:
// <button aria-label="Toggle theme">🌙</button>
// <input aria-label="Certificate image URL" />
// 1. Lazy load images:
// <img loading="lazy" src="..." alt="..." />

// 2. Use transform instead of positional properties
// 3. Debounce scroll handlers
// 4. Use IntersectionObserver instead of scroll events
// 5. Minimize DOM queries (cache selectors)
// 6. Use CSS containment:
/*
.card {
  contain: layout style paint;
}
*/

// Change accent colors:
/*
:root {
  --accent-primary: #ff6b6b;
  --accent-secondary: #4ecdc4;
}
*/

// Adjust animation speeds:
/*
:root {
  --transition-fast: 0.1s;
  --transition-base: 0.2s;
  --transition-slow: 0.4s;
}
*/

// Change spacing scale:
/*
:root {
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
*/

// Change accent colors:
/*
:root {
  --accent-primary: #ff6b6b;
  --accent-secondary: #4ecdc4;
}
*/

// Adjust animation speeds:
/*
:root {
  --transition-fast: 0.1s;
  --transition-base: 0.2s;
  --transition-slow: 0.4s;
}
*/

// Change spacing scale:
/*
:root {
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
*/

// Animation not triggering?
/*
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log('Element:', entry.target, 'Visible:', entry.isIntersecting)
  })
})
*/

// Add new section (React):
// 1. Create component in src/pages/NewSection.jsx
// 2. Import in src/App.jsx
// 3. Add <section id="newsection"><NewSection /></section>
// 4. Add nav item in src/components/Sidebar.jsx


// ============================================
// DEBUGGING TIPS
// ============================================

// Certificate not updating?
// console.log('Current state:', { imageUrl, isEditing, hasError })

// Theme not switching?
// console.log('Theme:', document.documentElement.getAttribute('data-theme'))
// console.log('LocalStorage:', localStorage.getItem('theme'))

// Scroll not smooth?
// console.log('Scroll behavior:', getComputedStyle(document.documentElement).scrollBehavior)

// Animation not triggering?
/*
const debugObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log('Element:', entry.target, 'Visible:', entry.isIntersecting)
  })
})
*/


// ============================================
// DEPLOYMENT
// ============================================

// Standalone HTML:
// 1. Just upload portfolio-standalone.html to any web server
// 2. No build step required
// 3. Works with GitHub Pages, Netlify, Vercel

// React version:
// 1. npm run build
// 2. Upload dist/ folder contents
// 3. Configure server to serve index.html for all routes
// 4. Set base path in vite.config.js if needed:
//    export default { base: '/your-repo-name/' }


// ============================================
// END OF QUICK REFERENCE
// ============================================
