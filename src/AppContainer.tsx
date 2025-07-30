import { useTheme } from './ThemeContext'
import App from './App'
import "./AppContainer.scss";

function AppContainer() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <button
        className="theme-toggle-button"
        onClick={toggleDarkMode}
      >
        {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
      <App />
    </div>
  );
}

export default AppContainer
