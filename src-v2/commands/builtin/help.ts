import { Command } from '../../types/command'

export const helpCommand: Command = {
  name: 'help',
  description: 'List all commands or show help for specific command',
  usage: 'help [command]',
  category: 'core',
  handler: async (args) => {
    const { commands } = await import('../registry')

    if (args[0] && commands[args[0]]) {
      const cmd = commands[args[0]]
      return `
${cmd.name}
${'─'.repeat(50)}

Usage: ${cmd.usage}
Category: ${cmd.category}
Description: ${cmd.description}
${cmd.aliases ? `\nAliases: ${cmd.aliases.join(', ')}` : ''}
`.trim()
    }

    const coreCommands = Object.values(commands).filter(c => c.category === 'core')
    const contentCommands = Object.values(commands).filter(c => c.category === 'content')
    const navigationCommands = Object.values(commands).filter(c => c.category === 'navigation')
    const funCommands = Object.values(commands).filter(c => c.category === 'fun')

    const formatCommands = (cmds: typeof coreCommands) => 
      cmds.map(c => `  ${c.name.padEnd(15)} ${c.description}`).join('\n')

    return `
Available Commands:
${'─'.repeat(50)}

Core Commands:
${formatCommands(coreCommands)}

Content Commands:
${formatCommands(contentCommands)}

Navigation:
${formatCommands(navigationCommands)}

Fun / Easter Eggs:
${formatCommands(funCommands)}

───────────────────────────────────────────────────────────

Type 'help <command>' for more details on a specific command.
Example: help about
`.trim()
  }
}
