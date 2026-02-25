# Technology Stack

## Framework & Build System
- **Astro 5.x** - Static site generator with component islands architecture
- **TypeScript** - Primary language for type safety
- **Node.js** - Runtime environment

## Key Dependencies
- `@astrojs/sitemap` - SEO sitemap generation
- `astro-compress` - Asset optimization
- `astro-icon` - Icon system
- `@astrojs/mdx` - Markdown with JSX support

## Development Tools
- **ESLint** - Code linting with Airbnb config
- **Prettier** - Code formatting with Astro plugin
- **TypeScript** - Type checking
- **Trunk** - Code quality and formatting

## Common Commands

### Development
```bash
npm run dev          # Start dev server at localhost:4321
npm run build        # Build production site to ./dist/
npm run preview      # Preview build locally
```

### Code Quality
```bash
npm run lint         # Run all linting checks
npm run lint:fix     # Auto-fix formatting issues
npm run lint:astro   # Astro-specific checks
npm run lint:types   # TypeScript type checking
```

### Installation
```bash
npm install          # Install dependencies
```

## Architecture Notes
- Static site generation for optimal performance
- Component-based architecture with Astro components
- Content collections for project data management
- CSS custom properties for theming (light/dark mode)