# Freely Design System

## Overview

Freely is a modern web application that provides free products to users. This design system ensures consistency, accessibility, and a delightful user experience across all touchpoints.

## Brand Identity

### Brand Values
- **Modern**: Clean, contemporary design with cutting-edge aesthetics
- **Professional**: Trustworthy and reliable interface
- **Refreshing**: Bright, energetic, and uplifting visual language
- **Futuristic**: Forward-thinking design with innovative interactions

### Target Audience
- **Primary**: Gen Z to Millennial users (ages 16-35)
- **Characteristics**: Tech-savvy, value-conscious, digital natives
- **Preferences**: Clean interfaces, fast interactions, mobile-first experiences

## Color Palette

### Primary Colors
```css
/* Main Brand Color */
--primary-500: #65E856; /* Main green accent */

/* Primary Color Scale */
--primary-50: #f0fdf4;
--primary-100: #dcfce7;
--primary-200: #bbf7d0;
--primary-300: #86efac;
--primary-400: #4ade80;
--primary-500: #65E856; /* Main brand color */
--primary-600: #56d947;
--primary-700: #16a34a;
--primary-800: #15803d;
--primary-900: #166534;
```

### Neutral Colors
```css
/* Gray Scale */
--gray-50: #fafafa;
--gray-100: #f5f5f5;
--gray-200: #e5e5e5;
--gray-300: #d4d4d4;
--gray-400: #a3a3a3;
--gray-500: #737373;
--gray-600: #525252;
--gray-700: #404040;
--gray-800: #262626;
--gray-900: #171717;
```

### Semantic Colors
```css
/* Success */
--success-100: #dcfce7;
--success-500: #22c55e;
--success-800: #166534;

/* Warning */
--warning-100: #fef3c7;
--warning-500: #f59e0b;
--warning-800: #92400e;

/* Error */
--error-100: #fee2e2;
--error-500: #ef4444;
--error-800: #991b1b;
```

## Typography

### Font Families
```css
/* Primary Font */
font-family: 'Inter', system-ui, sans-serif;

/* Display Font */
font-family: 'Poppins', system-ui, sans-serif;
```

### Type Scale
```css
/* Headings */
h1: 4rem/1 (64px) - Poppins, Bold
h2: 3rem/1.1 (48px) - Poppins, Bold
h3: 2.25rem/1.2 (36px) - Poppins, Semibold
h4: 1.875rem/1.3 (30px) - Poppins, Semibold
h5: 1.5rem/1.4 (24px) - Poppins, Semibold
h6: 1.25rem/1.5 (20px) - Poppins, Semibold

/* Body Text */
body: 1rem/1.5 (16px) - Inter, Regular
large: 1.125rem/1.6 (18px) - Inter, Regular
small: 0.875rem/1.4 (14px) - Inter, Regular
xs: 0.75rem/1.3 (12px) - Inter, Regular
```

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extrabold**: 800

## Spacing System

### Base Unit: 4px (0.25rem)

```css
/* Spacing Scale */
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
--space-20: 5rem;    /* 80px */
--space-24: 6rem;    /* 96px */
--space-32: 8rem;    /* 128px */
```

## Border Radius

```css
/* Border Radius Scale */
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-3xl: 2rem;      /* 32px */
--radius-full: 9999px;   /* Full circle */
```

## Shadows

```css
/* Shadow System */
--shadow-soft: 0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04);
--shadow-medium: 0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-large: 0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05);
--shadow-glow: 0 0 20px rgba(101, 232, 86, 0.3);
--shadow-glow-lg: 0 0 40px rgba(101, 232, 86, 0.4);
```

## Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background-color: var(--primary-500);
  color: white;
  border-radius: var(--radius-full);
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition: all 0.2s;
  box-shadow: var(--shadow-soft);
}

.btn-primary:hover {
  background-color: var(--primary-600);
  transform: scale(1.05);
  box-shadow: var(--shadow-medium);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: var(--gray-100);
  color: var(--gray-900);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-full);
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition: all 0.2s;
}
```

#### Outline Button
```css
.btn-outline {
  border: 2px solid var(--primary-500);
  color: var(--primary-500);
  background: transparent;
  border-radius: var(--radius-full);
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-outline:hover {
  background-color: var(--primary-500);
  color: white;
}
```

### Cards

#### Standard Card
```css
.card {
  background: white;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-soft);
  border: 1px solid var(--gray-100);
  overflow: hidden;
  transition: all 0.2s;
}

.card:hover {
  box-shadow: var(--shadow-medium);
}
```

#### Interactive Card
```css
.card-hover {
  transition: all 0.2s;
}

.card-hover:hover {
  box-shadow: var(--shadow-large);
  transform: translateY(-4px);
}
```

### Input Fields

#### Standard Input
```css
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-xl);
  background: white;
  transition: all 0.2s;
}

.input:focus {
  outline: none;
  border-color: var(--primary-500);
  box-shadow: 0 0 0 3px rgba(101, 232, 86, 0.1);
}
```

### Badges

#### Primary Badge
```css
.badge-primary {
  background-color: var(--primary-100);
  color: var(--primary-800);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
}
```

## Layout

### Container
```css
.container-custom {
  max-width: 80rem; /* 1280px */
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container-custom {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding: 0 2rem;
  }
}
```

### Section Padding
```css
.section-padding {
  padding: 4rem 0; /* 64px */
}

@media (min-width: 768px) {
  .section-padding {
    padding: 6rem 0; /* 96px */
  }
}
```

## Animations

### Transitions
```css
/* Standard Transition */
transition: all 0.2s ease-in-out;

/* Fast Transition */
transition: all 0.15s ease-in-out;

/* Slow Transition */
transition: all 0.3s ease-in-out;
```

### Keyframe Animations
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Bounce Gentle */
@keyframes bounceGentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Pulse Gentle */
@keyframes pulseGentle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}
```

## Accessibility

### Color Contrast
- **Text on Primary**: 4.5:1 minimum contrast ratio
- **Text on White**: 7:1 minimum contrast ratio
- **Interactive Elements**: 3:1 minimum contrast ratio

### Focus States
```css
/* Focus Ring */
focus:outline-none;
focus:ring-2;
focus:ring-primary-500;
focus:ring-offset-2;
```

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Tab order follows logical document flow
- Skip links for main content areas

## Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
/* Base styles for mobile */

/* Small (640px and up) */
@media (min-width: 640px) { }

/* Medium (768px and up) */
@media (min-width: 768px) { }

/* Large (1024px and up) */
@media (min-width: 1024px) { }

/* Extra Large (1280px and up) */
@media (min-width: 1280px) { }

/* 2XL (1536px and up) */
@media (min-width: 1536px) { }
```

### Grid System
```css
/* Responsive Grid */
.grid {
  display: grid;
  gap: 1.5rem;
}

/* Mobile: 1 column */
.grid-cols-1

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .md:grid-cols-2
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .lg:grid-cols-3
}

/* Large Desktop: 4 columns */
@media (min-width: 1280px) {
  .xl:grid-cols-4
}
```

## Iconography

### Icon Sizes
```css
/* Icon Size Scale */
--icon-xs: 0.75rem;   /* 12px */
--icon-sm: 1rem;      /* 16px */
--icon-md: 1.25rem;   /* 20px */
--icon-lg: 1.5rem;    /* 24px */
--icon-xl: 2rem;      /* 32px */
--icon-2xl: 2.5rem;   /* 40px */
```

### Icon Guidelines
- Use consistent stroke width (2px)
- Maintain 1px padding around icons
- Use Lucide React icons for consistency
- Icons should be semantic and meaningful

## Best Practices

### Do's
- ✅ Use the design system consistently
- ✅ Maintain proper spacing and hierarchy
- ✅ Ensure accessibility compliance
- ✅ Test on multiple devices and screen sizes
- ✅ Use semantic HTML elements
- ✅ Optimize for performance

### Don'ts
- ❌ Don't use hardcoded colors
- ❌ Don't skip accessibility features
- ❌ Don't ignore mobile responsiveness
- ❌ Don't use inconsistent spacing
- ❌ Don't override design system without approval

## Implementation

### CSS Classes
All design system components are available as utility classes in the `index.css` file. Use these classes to maintain consistency:

```html
<!-- Button Examples -->
<button class="btn btn-primary btn-md">Primary Button</button>
<button class="btn btn-secondary btn-sm">Secondary Button</button>
<button class="btn btn-outline btn-lg">Outline Button</button>

<!-- Card Examples -->
<div class="card card-hover">Interactive Card</div>
<div class="card card-glow">Glow Effect Card</div>

<!-- Input Examples -->
<input class="input" type="text" placeholder="Enter text...">
<input class="input input-error" type="email" placeholder="Email with error">

<!-- Badge Examples -->
<span class="badge badge-primary">Primary Badge</span>
<span class="badge badge-success">Success Badge</span>
```

### Tailwind Integration
The design system is built on top of Tailwind CSS with custom extensions. All custom colors, spacing, and components are available as Tailwind utilities.

## Version History

### v1.0.0 (Current)
- Initial design system implementation
- Complete component library
- Responsive design patterns
- Accessibility guidelines
- Animation system
- Color palette and typography scale

---

*This design system is a living document and will be updated as the product evolves.*



