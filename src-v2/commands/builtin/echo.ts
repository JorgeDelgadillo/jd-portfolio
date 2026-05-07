import { Command } from '../../types/command'

export const echoCommand: Command = {
  name: 'echo',
  description: 'Echo back text',
  usage: 'echo <text>',
  category: 'fun',
  handler: async (args) => {
    if (args.length === 0) {
      return 'Usage: echo <text>\nExample: echo Hello World'
    }
    return args.join(' ')
  }
}
