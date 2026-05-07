import { Command } from '../../types/command'

export const vimCommand: Command = {
  name: 'vim',
  description: 'Open vim editor',
  usage: 'vim [file]',
  category: 'fun',
  handler: async () => {
    return `
~
~
~
~
[No Name]                                                        0,0-1    All

You opened vim. Now how do you exit?

Hint: Try :quit, :wq, or ZZ... or just type 'help' to escape this joke. 😉
`.trim()
  }
}
