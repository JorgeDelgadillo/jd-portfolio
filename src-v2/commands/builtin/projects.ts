import { Command } from '../../types/command'

const projects = [
  {
    id: "1",
    title: "JD Portfolio",
    description: "This website! Built to showcase my skills, experience, and projects. Designed with a modern UI and responsive layout.",
    technologies: [
      { name: "React", color: "blue" },
      { name: "TypeScript", color: "purple" },
      { name: "Vite", color: "yellow" },
      { name: "Tailwind CSS", color: "sky" },
      { name: "SCSS", color: "pink" }
    ],
    link: "https://github.com/JorgeDelgadillo/jd-portfolio"
  },
  {
    id: "2",
    title: "LazyWhats",
    description: "A WhatsApp Terminal User Interface (TUI) client with Vim-style keybindings. Features QR code authentication, real-time messaging, and smart notifications—all from your terminal.",
    technologies: [
      { name: "TypeScript", color: "purple" },
      { name: "Node.js", color: "green" },
      { name: "Docker", color: "cyan" },
      { name: "Blessed", color: "indigo" }
    ],
    link: "https://github.com/JorgeDelgadillo/lazywhats"
  }
]

export const projectsCommand: Command = {
  name: 'projects',
  aliases: ['proj'],
  description: 'List featured projects',
  usage: 'projects [id|name]',
  category: 'content',
  handler: async (args) => {
    if (args.length === 0) {
      const list = projects.map(p => 
        `  [${p.id}] ${p.title}`
      ).join('\n')
      
      return `
Featured Projects:
${'─'.repeat(60)}

${list}

───────────────────────────────────────────────────────────

Type 'projects <id>' to see details for a specific project.
Example: projects 1
`.trim()
    }

    const searchId = args[0]
    const searchTerm = args.join(' ').toLowerCase()
    
    const project = projects.find(p => 
      p.id === searchId || 
      p.title.toLowerCase().includes(searchTerm)
    )

    if (!project) {
      return `Project not found. Try 'projects' to see all projects.`
    }

    const techList = project.technologies.map(t => `  • ${t.name}`).join('\n')

    return `
╔══════════════════════════════════════════════════════════╗
║  ${project.title.padEnd(56)} ║
╚══════════════════════════════════════════════════════════╝

DESCRIPTION
${project.description}

TECHNOLOGIES
${techList}

LINK
  ${project.link}
`.trim()
  }
}
