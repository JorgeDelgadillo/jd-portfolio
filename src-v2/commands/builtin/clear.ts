import { Command } from '../../types/command'

export const clearCommand: Command = {
  name: 'clear',
  description: 'Clear terminal output',
  usage: 'clear',
  category: 'core',
  handler: async () => {
    return '__CLEAR_TERMINAL__'
  }
}
