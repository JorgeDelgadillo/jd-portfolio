import { Command } from '../../types/command'

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Kotlin", "Swift"]
  },
  { 
    category: "Frameworks", 
    items: ["React", "React Native", "Django"] 
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "AWS (EC2, S3, KMS)", "Datadog", "Sentry", "Kubernetes"]
  },
  {
    category: "Databases & Testing",
    items: ["PostgreSQL", "MongoDB", "Jest", "Pytest", "Appium"]
  },
  {
    category: "Other Technologies",
    items: ["Stripe", "Hyperwallet", "LangChain", "GraphQL", "Browserstack", "n8n"]
  }
]

export const skillsCommand: Command = {
  name: 'skills',
  description: 'Display technical skills',
  usage: 'skills [category]',
  category: 'content',
  handler: async (args) => {
    if (args.length === 0) {
      const allSkills = skills.map(s => {
        const items = s.items.join(', ')
        return `  ${s.category}:\n    ${items}`
      }).join('\n\n')

      return `
Technical Skills:
${'─'.repeat(60)}

${allSkills}

───────────────────────────────────────────────────────────

Type 'skills <category>' to see skills in a specific category.
Categories: languages, frameworks, devops, databases, other
`.trim()
    }

    const searchTerm = args[0].toLowerCase()
    
    const categoryMap: { [key: string]: string } = {
      'languages': 'Languages',
      'frameworks': 'Frameworks',
      'devops': 'DevOps & Tools',
      'databases': 'Databases & Testing',
      'other': 'Other Technologies'
    }

    const categoryName = categoryMap[searchTerm] || 
      skills.find(s => s.category.toLowerCase().includes(searchTerm))?.category

    const skillGroup = skills.find(s => s.category === categoryName)

    if (!skillGroup) {
      return `Category not found. Try 'skills' to see all categories.`
    }

    const items = skillGroup.items.join('\n  • ')

    return `
${skillGroup.category}:
${'─'.repeat(60)}

  • ${items}
`.trim()
  }
}
