import { Command } from '../../types/command'

export const fastfetchCommand: Command = {
  name: 'fastfetch',
  description: 'Minimalist system info',
  usage: 'fastfetch',
  category: 'fun',
  handler: async () => {
    return `
       ████╗       jorge@portfolio
      ██╔══██╗     ───────────────
      ████████╝    React 19 | TypeScript
      ██╔══██╗     5+ years | 20+ projects
      ██║  ██║
`.trim()
  }
}
