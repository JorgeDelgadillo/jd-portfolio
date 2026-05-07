import { Command } from '../../types/command'

export const historyCommand: Command = {
  name: 'history',
  description: 'Show command history',
  usage: 'history [--clear]',
  category: 'core',
  handler: async (args) => {
    if (args[0] === '--clear') {
      localStorage.removeItem('command-history')
      return 'Command history cleared.'
    }

    const saved = localStorage.getItem('command-history')
    const history = saved ? JSON.parse(saved) : []

    if (history.length === 0) {
      return 'No command history.'
    }

    const last20 = history.slice(-20)
    const list = last20.map((cmd: string, i: number) => 
      `  ${history.length - 20 + i + 1}.  ${cmd}`
    ).join('\n')

    return `
Command History (last 20):
${'─'.repeat(60)}

${list}

───────────────────────────────────────────────────────────

Type 'history --clear' to clear command history.
`.trim()
  }
}
