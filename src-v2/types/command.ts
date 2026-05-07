export interface CommandEntry {
  command: string
  output: string
  timestamp: Date
}

export interface Command {
  name: string
  aliases?: string[]
  description: string
  usage: string
  category: 'core' | 'content' | 'navigation' | 'fun'
  handler: (args: string[]) => Promise<string>
  autocomplete?: (args: string[]) => string[]
}

export interface CommandRegistry {
  [key: string]: Command
}
