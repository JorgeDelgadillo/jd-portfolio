import { Command } from '../../types/command'

export const sudoCommand: Command = {
  name: 'sudo',
  description: 'Execute command as superuser',
  usage: 'sudo <command>',
  category: 'fun',
  handler: async () => {
    return `jorge is not in the sudoers file. This incident will be reported. 😄`
  }
}
