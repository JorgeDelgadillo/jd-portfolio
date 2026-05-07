import { Command } from '../../types/command'

export const socialCommand: Command = {
  name: 'social',
  description: 'Show social media links',
  usage: 'social [platform]',
  category: 'content',
  handler: async (args) => {
    const socials = {
      github: 'https://github.com/JorgeDelgadillo',
      linkedin: 'https://www.linkedin.com/in/jorge-delgadillo/',
      twitter: 'https://x.com/KrJorgeD'
    }

    if (args.length === 0 || args[0] === 'all') {
      return `
Social Media:
${'─'.repeat(60)}

  GitHub:    ${socials.github}
  LinkedIn:  ${socials.linkedin}
  Twitter:   ${socials.twitter}

───────────────────────────────────────────────────────────

Type 'social <platform>' to open a specific profile.
Platforms: github, linkedin, twitter
`.trim()
    }

    const platform = args[0].toLowerCase()
    const url = socials[platform as keyof typeof socials]

    if (!url) {
      return `Platform not found. Available: github, linkedin, twitter`
    }

    return `Opening ${platform}...\n${url}`
  }
}
