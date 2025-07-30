# JD Portfolio

A modern portfolio built with React, TypeScript, and Vite, featuring Tailwind CSS for styling.

## 🚀 Quick Start  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## 🚢 Production Deployment

### Docker Image for Production

For production deployment, you might want to create a multi-stage Docker build:

1. **Build the application:**
   ```bash
   docker build -t jd-portfolio:production .
   ```

2. **Deploy to your preferred platform:**
   - Docker Hub
   - AWS ECS/EKS
   - Google Cloud Run
   - DigitalOcean App Platform
   - Any Docker-compatible hosting service

### Environment Variables

The application runs on port 5173 by default. You can modify the `docker-compose.yml` or Dockerfile to change ports as needed for your deployment environment.

## 📝 License

This project is private and proprietary.- Docker and Docker Compose installed on your system
- Node.js 22+ (for local development)

### Docker Deployment (Recommended)

The easiest way to run this application is using Docker:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JorgeDelgadillo/jd-portfolio.git
   cd jd-portfolio
   ```

2. **Build and run with Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   Open your browser and visit `http://localhost:5173`

4. **Stop the application:**
   ```bash
   docker-compose down
   ```

### Alternative Docker Commands

If you prefer using Docker directly:

```bash
# Build the Docker image
docker build -t jd-portfolio .

# Run the container
docker run -p 5173:5173 jd-portfolio
```

### Local Development

For local development without Docker:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint
- **Containerization:** Docker

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🔧 Development Notes

### ESLint Configuration

This project uses TypeScript ESLint with recommended rules. If you need to expand the ESLint configuration for production use, you can enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

### React-Specific Linting

For additional React-specific lint rules, you can install and configure:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
