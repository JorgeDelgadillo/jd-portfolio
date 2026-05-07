import { Command } from '../../types/command'

const experiences = [
  {
    id: 0,
    company: "Freelance",
    position: "Software Engineer",
    period: "Jun 2025 – Present",
    location: "Querétaro, Mexico (Remote)",
    description: "Freelance work implementing payment infrastructures, building AI agents, and modernizing client applications and services.",
    technologies: ["Stripe", "TypeScript", "Python", "React", "LangChain", "n8n"],
    achievements: [
      "Implemented payment infrastructures with Stripe, including subscription flows, webhook security, and multi-platform integration for SaaS and ecommerce clients.",
      "Built custom AI agents with LangChain to automate data processing, knowledge retrieval, and workflow orchestration for internal operations.",
      "Designed AI automation pipelines in n8n, integrating LLMs, vector databases, and external APIs to reduce manual work for clients.",
      "Performed code refactors, including migrating entire projects from JavaScript to TypeScript, improving type safety, maintainability, and reliability.",
      "Upgraded legacy frontend apps by updating React versions, resolving breaking changes, improving performance, and modernizing tooling.",
      "Developed and extended REST APIs and microservices in Python."
    ]
  },
  {
    id: 1,
    company: "Instawork",
    position: "Software Engineer",
    period: "Dec 2021 – May 2025",
    location: "San Francisco, CA (Remote from Mexico)",
    description: "Maintained and supported critical Payments infrastructure using Python (Stripe, Hyperwallet). Built native Android and iOS components and integrated with React Native.",
    technologies: ["Python", "React Native", "Kotlin", "Swift", "Stripe", "Hyperwallet", "LangChain"],
    achievements: [
      "Maintained critical Payments infrastructure using Python (Stripe, Hyperwallet)",
      "Implemented banking services module including transactions, 2FA, and card support",
      "Built native Android and iOS components (Kotlin/Swift) integrated with React Native",
      "Designed custom AI agents with LangChain for internal automation",
      "Led greenfield projects, refactors, and module removals",
      "Built end-to-end testing flows with Appium and Browserstack"
    ]
  },
  {
    id: 2,
    company: "Stateoftheart.ai",
    position: "Fullstack Developer",
    period: "Aug 2020 – Nov 2021",
    location: "Querétaro, Mexico",
    description: "Developed fullstack features for web applications using React. Maintained Dockerized services and basic AWS infrastructure.",
    technologies: ["React", "Docker", "AWS", "TypeScript", "Python"],
    achievements: [
      "Developed fullstack features for web applications using React",
      "Maintained Dockerized services and basic AWS infrastructure",
      "Contributed across frontend/backend layers for fast-paced deployments"
    ]
  },
  {
    id: 3,
    company: "Corebooks",
    position: "Software Developer",
    period: "Jan 2019 – Jun 2020",
    location: "Celaya, Mexico",
    description: "Built cross-platform mobile point-of-sale system with React Native for mobile and React for web. Integrated Stripe payments and created ERP modules in Odoo.",
    technologies: ["React Native", "React", "Python", "Stripe", "Odoo"],
    achievements: [
      "Built cross-platform mobile point-of-sale system with React Native",
      "Developed web version using React",
      "Integrated Stripe payments for transaction processing",
      "Created ERP modules in Odoo using Python"
    ]
  }
]

export const experienceCommand: Command = {
  name: 'experience',
  aliases: ['exp'],
  description: 'Show work experience',
  usage: 'experience [id|company]',
  category: 'content',
  handler: async (args) => {
    if (args.length === 0) {
      const list = experiences.map(exp => 
        `  [${exp.id}] ${exp.company.padEnd(20)} - ${exp.position} (${exp.period})`
      ).join('\n')
      
      return `
Work Experience:
${'─'.repeat(60)}

${list}

───────────────────────────────────────────────────────────

Type 'experience <id>' to see details for a specific role.
Example: experience 0
`.trim()
    }

    const searchId = parseInt(args[0])
    const searchTerm = args.join(' ').toLowerCase()
    
    const exp = experiences.find(e => 
      e.id === searchId || 
      e.company.toLowerCase().includes(searchTerm)
    )

    if (!exp) {
      return `Experience not found. Try 'experience' to see all positions.`
    }

    const techList = exp.technologies.join('  ')
    const achievements = exp.achievements.map(a => `  • ${a}`).join('\n')

    return `
╔══════════════════════════════════════════════════════════╗
║  ${exp.position.padEnd(56)} ║
║  at ${exp.company.padEnd(50)} ║
╚══════════════════════════════════════════════════════════╝

📅 Period: ${exp.period}
📍 Location: ${exp.location}

DESCRIPTION
${exp.description}

TECHNOLOGIES
  ${techList}

KEY ACHIEVEMENTS
${achievements}
`.trim()
  }
}
