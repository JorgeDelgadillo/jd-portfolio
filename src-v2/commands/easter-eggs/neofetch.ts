import { Command } from '../../types/command'

export const neofetchCommand: Command = {
  name: 'neofetch',
  description: 'System information parody',
  usage: 'neofetch',
  category: 'fun',
  handler: async () => {
    const uptime = getUptime()
    const memory = getMemoryUsage()

    return `
       ████████╗    jorge@portfolio
     ██╗      ██╗   ─────────────────
     ██║  ██╗ ██║   OS: Portfolio OS v2.0
     ██║  ██║ ██║   Host: Web Browser
     ████████╝ ██║   Kernel: React 19.2.1
     ██║      ██║   Shell: bash 5.0
     ██║      ██║   Terminal: JD Terminal
                    Theme: ${getCurrentTheme()}
                    Uptime: ${uptime}
                    Packages: 15+ technologies
                    Memory: ${memory}
                    Resolution: ${window.screen.width}x${window.screen.height}
`.trim()
  }
}

function getUptime(): string {
  const nav = performance as any
  const start = nav.timing?.navigationStart || Date.now()
  const now = Date.now()
  const diff = Math.floor((now - start) / 1000)
  
  const hours = Math.floor(diff / 3600)
  const minutes = Math.floor((diff % 3600) / 60)
  const seconds = diff % 60
  
  return `${hours}h ${minutes}m ${seconds}s`
}

function getMemoryUsage(): string {
  const mem = (performance as any).memory
  if (mem) {
    return `${Math.round(mem.usedJSHeapSize / 1048576)} MB`
  }
  return '~245 MB'
}

function getCurrentTheme(): string {
  const saved = localStorage.getItem('terminal-theme')
  return saved || 'catppuccin-dark'
}
