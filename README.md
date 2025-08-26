

# JD Portfolio

A modern portfolio built with React, TypeScript, and Vite.

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose installed
- Node.js 22+ (for local development)

### Docker Deployment (Recommended)

1. **Clone the repository:**
  ```bash
  git clone https://github.com/<your-username>/jd-portfolio.git
  cd jd-portfolio
  ```

2. **Build and run with Docker Compose:**
  ```bash
  docker-compose up --build
  ```

3. **Access the application:**
  Open your browser and visit [http://localhost:5173](http://localhost:5173)

4. **Stop the application:**
  ```bash
  docker-compose down
  ```

### Alternative Docker Commands

```bash
docker build -t jd-portfolio .
docker run -p 5173:5173 jd-portfolio
```

### Local Development

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

- **Frontend:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint
- **Containerization:** Docker

## 📦 Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build

## 🔧 Development Notes

### Theme / Dark Mode

The app now defaults to the user's OS color scheme (via prefers-color-scheme). If a user toggles the theme in the UI, that choice is saved in localStorage and will override the system preference on subsequent visits. To clear a stored preference, remove the `theme-preference` key from localStorage in the browser console:

```js
localStorage.removeItem('theme-preference')
```

### ESLint Configuration

TypeScript ESLint is used with recommended rules. For stricter linting, expand your config in `eslint.config.js` as needed.

### React-Specific Linting

React and React DOM lint rules are enabled via `eslint-plugin-react-x` and `eslint-plugin-react-dom`.

## 🚢 Production Deployment

Build and deploy the Docker image to any Docker-compatible hosting service (AWS ECS/EKS, Google Cloud Run, DigitalOcean, etc.).

## ⚙️ Environment Variables

The app runs on port 5173 by default. Adjust ports in `docker-compose.yml` or `Dockerfile` as needed.

## 📝 License

This project is private and proprietary.
