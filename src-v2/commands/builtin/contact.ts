import { Command } from '../../types/command'

export const contactCommand: Command = {
  name: 'contact',
  description: 'Show contact information',
  usage: 'contact',
  category: 'content',
  handler: async () => {
    return `
╔══════════════════════════════════════════════════════════╗
║                    CONTACT                                ║
╚══════════════════════════════════════════════════════════╝

📧 Email
  jorgdelgadillo@gmail.com

📅 Schedule a Meeting
  https://calendly.com/jorgdelgadillo/30min

📍 Location
  Querétaro, Mexico

💼 Availability
  Open to freelance projects and consulting

───────────────────────────────────────────────────────────

Type 'social' to see my social media profiles.
`.trim()
  }
}
