import { CommandRegistry } from '../types/command'
import { helpCommand } from './builtin/help'
import { clearCommand } from './builtin/clear'
import { echoCommand } from './builtin/echo'
import { aboutCommand } from './builtin/about'
import { experienceCommand } from './builtin/experience'
import { projectsCommand } from './builtin/projects'
import { skillsCommand } from './builtin/skills'
import { contactCommand } from './builtin/contact'
import { socialCommand } from './builtin/social'
import { themeCommand } from './builtin/theme'
import { historyCommand } from './builtin/history'
import { neofetchCommand } from '../easter-eggs/neofetch'
import { fastfetchCommand } from '../easter-eggs/fastfetch'
import { sudoCommand } from '../easter-eggs/sudo'
import { vimCommand } from '../easter-eggs/vim'

export const commands: CommandRegistry = {
  help: helpCommand,
  clear: clearCommand,
  echo: echoCommand,
  about: aboutCommand,
  experience: experienceCommand,
  projects: projectsCommand,
  skills: skillsCommand,
  contact: contactCommand,
  social: socialCommand,
  theme: themeCommand,
  history: historyCommand,
  neofetch: neofetchCommand,
  fastfetch: fastfetchCommand,
  sudo: sudoCommand,
  vim: vimCommand
}

export function findCommand(input: string): { command: string; args: string[] } | null {
  const parts = input.trim().split(/\s+/)
  const commandName = parts[0].toLowerCase()
  const args = parts.slice(1)

  if (commands[commandName]) {
    return { command: commandName, args }
  }

  const aliasMatch = Object.entries(commands).find(([_, cmd]) =>
    cmd.aliases?.includes(commandName)
  )

  if (aliasMatch) {
    return { command: aliasMatch[0], args }
  }

  return null
}
