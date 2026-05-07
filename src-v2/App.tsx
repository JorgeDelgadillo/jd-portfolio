import { ThemeProvider } from './ThemeContext'
import AppContainer from './AppContainer'

function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  )
}

export default App
