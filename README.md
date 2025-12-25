# React + Vite + Tailwind CSS

A modern React application setup with Vite as the build tool and Tailwind CSS for styling.

## Features

- ⚡️ **Vite** - Fast build tool and dev server
- ⚛️ **React 18** - Latest React with hooks
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔧 **ESLint** - Code linting
- 🚀 **Hot Module Replacement** - Instant updates during development

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)
- npm or yarn

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
react-vite-tailwind/
├── public/
├── src/
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## Customization

### Tailwind CSS

Edit `tailwind.config.js` to customize your Tailwind setup:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom styles here
    },
  },
  plugins: [],
}
```

### Vite Configuration

Modify `vite.config.js` for additional Vite settings.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

Happy coding! 🚀