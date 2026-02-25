# Project Structure

## Root Directory
- `package.json` - Dependencies and scripts
- `astro.config.mjs` - Astro configuration
- `tsconfig.json` - TypeScript configuration
- `.eslintrc.json` - ESLint rules
- `.prettierrc.json` - Prettier formatting rules

## Source Code (`src/`)
```
src/
├── components/     # Reusable Astro components
├── content/        # Content collections (projects)
├── layouts/        # Page layout templates
├── pages/          # File-based routing
└── styles/         # Global CSS and theme files
```

### Components (`src/components/`)
- Reusable UI components (Button, Card, Header, etc.)
- Follow Astro component conventions (.astro files)
- Include accessibility features and responsive design

### Content (`src/content/`)
- `projects/` - Markdown files for project case studies
- `content.config.mjs` - Zod schema definitions for content validation
- Each project has frontmatter with metadata (title, date, description, tags, image)

### Pages (`src/pages/`)
- `index.astro` - Homepage with project grid
- `projects/[slug].astro` - Dynamic project detail pages
- `robots.txt.ts` - SEO robots file

### Styles (`src/styles/`)
- `global.css` - Base styles and CSS custom properties
- `dark.css` - Dark theme variables
- `light.css` - Light theme variables

## Public Assets (`public/`)
```
public/
├── assets/
│   ├── img/        # Project images and UI icons
│   └── *.svg       # Icon assets
└── favicon.svg
```

## Build Output
- `dist/` - Generated static site (created by `npm run build`)
- `.astro/` - Astro build cache and type definitions

## Configuration Files
- `.trunk/` - Trunk code quality tool configuration
- `.vscode/` - VS Code workspace settings
- `.git/` - Git repository data