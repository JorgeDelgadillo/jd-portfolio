import './App.css'
import { useTheme } from './ThemeContext'
import App from './App'

function AppContainer() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: darkMode ? '#18181b' : '#fff',
        color: darkMode ? '#fff' : '#18181b',
        transition: 'background 0.3s, color 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <button
        style={{ position: 'absolute', top: 16, right: 16 }}
        onClick={toggleDarkMode}
      >
        {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
      <App />
    </div>
  );
}

export default AppContainer
