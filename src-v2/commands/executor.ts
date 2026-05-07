import { findCommand, commands } from './registry'

export async function executeCommand(input: string): Promise<string> {
  const parsed = findCommand(input)

  if (!parsed) {
    return `Command not found: ${input.split(' ')[0]}\nType 'help' to see available commands.`
  }

  const { command, args } = parsed
  const cmd = commands[command]

  try {
    return await cmd.handler(args)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return `Error executing command '${command}': ${errorMessage}`
  }
}
