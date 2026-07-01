# MIVO - Luxury Brand Experience

A stunning luxury brand website featuring a dark cinematic aesthetic with gold accents, custom animations, and premium interactions.

## Features

### 🎬 Hero Section
- Fullscreen video background with gradient overlay
- Animated hero text with staggered entrance
- Custom navigation header
- Scroll indicator with bounce animation
- Responsive design that works on all devices

### ✨ Custom Cursor
- Interactive custom cursor with hover effects
- Gold-colored pointer with expanding ring
- Smooth transitions on interactive elements

### 📖 About Section
- Multi-column layout with elegant typography
- Scroll-triggered animations
- Value propositions with hover effects
- Beautiful divider lines with gradient

### 🎨 Collections Section
- Three-column collection grid
- Offset card layout for visual interest
- Hover effects with overlay animations
- Call-to-action buttons for each collection

### 📊 Stats Section
- Animated count-up numbers on scroll
- Key metrics highlighting brand prestige
- Inspirational quote section
- Elegant grid layout with bottom borders

### 🎞️ Marquee Section
- Continuously scrolling marquee text
- Premium brand keywords and values
- Fade-in animation on scroll

### 📬 Contact Form
- Full contact form with validation
- Real-time error messages
- Success feedback with checkmark icon
- Contact information section
- Responsive design

### 🔗 Footer
- Multi-column layout with links
- Social media connections
- Legal information and sitemap
- Brand positioning statement

## Technical Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 with custom theme
- **Typography**: Playfair Display (headers) + Geist Sans (body)
- **Icons**: Lucide React
- **Animations**: CSS-in-JS with custom keyframes
- **Color Palette**:
  - Dark: #0f0f0f
  - Dark Secondary: #1a1a1a
  - Gold: #d4af37
  - Gold Light: #e8c547
  - Cream: #f5f1e8

## Custom Animations

- `fadeInUp` - Content slides up with fade
- `fadeIn` - Simple opacity transition
- `scaleIn` - Scale and fade combination
- `slideInLeft/Right` - Horizontal slide animations
- `marquee` - Infinite scrolling text
- `countUp` - Number animation for stats

## Components

### `/components`
- `custom-cursor.tsx` - Interactive cursor system
- `hero-section.tsx` - Full-screen hero with video
- `about-section.tsx` - Brand story and values
- `collections-section.tsx` - Product collections grid
- `stats-section.tsx` - Metrics and testimonial
- `marquee-section.tsx` - Scrolling brand keywords
- `contact-section.tsx` - Contact form with validation
- `footer.tsx` - Site footer with links

## Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Customization

### Update Theme Colors
Edit `/app/globals.css` and modify the CSS variables in the `:root` section:
```css
--primary: #d4af37;           /* Gold */
--background: #0f0f0f;        /* Dark background */
--foreground: #f5f1e8;        /* Cream text */
```

### Update Brand Text
Edit `/components/hero-section.tsx` and other component files to replace placeholder text with your brand content.

### Add Your Video
Place your hero video in `/public/videos/hero.mp4` (currently uses a placeholder).

### Update Contact Information
Edit the contact info in `/components/footer.tsx` and `/components/contact-section.tsx`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Server-side rendering for fast initial load
- Intersection Observer for scroll animations
- Optimized images and lazy loading
- Smooth animations with GPU acceleration

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast ratio for text
- Screen reader friendly

## License

© 2024 MIVO. All rights reserved.
