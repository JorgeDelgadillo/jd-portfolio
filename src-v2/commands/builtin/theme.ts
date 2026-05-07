import { Command } from '../../types/command'
import { useTheme } from '../../ThemeContext'

export const themeCommand: Command = {
  name: 'theme',
  description: 'Manage terminal themes',
  usage: 'theme [name|action]',
  category: 'navigation',
  handler: async (args) => {
    const { themes } = await import('../../themes')
    const themeList = Object.keys(themes)

    if (args.length === 0) {
      const saved = localStorage.getItem('terminal-theme')
      const current = saved || 'catppuccin-dark'
      
      return `
Current theme: ${current}

───────────────────────────────────────────────────────────

Type 'theme list' to see all available themes.
Type 'theme <name>' to apply a theme.
Type 'theme toggle' to switch between dark/light.
`.trim()
    }

    if (args[0] === 'list') {
      const list = themeList.map(name => {
        const theme = themes[name]
        const variant = theme.variant === 'dark' ? '🌙' : '☀️'
        return `  ${variant} ${name}`
      }).join('\n')

      return `
Available Themes:
${'─'.repeat(60)}

${list}

───────────────────────────────────────────────────────────

Type 'theme <name>' to apply a theme.
Example: theme tokyo-night
`.trim()
    }

    if (args[0] === 'toggle') {
      const saved = localStorage.getItem('terminal-theme')
      const current = saved || 'catppuccin-dark'
      const currentTheme = themes[current]
      
      if (!currentTheme) {
        return 'Error: Current theme not found'
      }

      const targetVariant = currentTheme.variant === 'dark' ? 'light' : 'dark'
      const baseName = currentTheme.name.split('-').slice(0, -1).join('-')
      const alternateTheme = themes[`${baseName}-${targetVariant}`]
      
      if (alternateTheme) {
        localStorage.setItem('terminal-theme', alternateTheme.name)
        window.dispatchEvent(new Event('storage'))
        return `Theme changed to: ${alternateTheme.name}`
      }

      return 'No alternate theme found for toggling'
    }

    const themeName = args[0]
    if (themes[themeName]) {
      localStorage.setItem('terminal-theme', themeName)
      window.dispatchEvent(new Event('storage'))
      return `Theme changed to: ${themeName}\nRefresh the page to see the changes.`
    }

    return `Theme not found: ${themeName}\nType 'theme list' to see available themes.`
  }
}
