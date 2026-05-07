import { Command } from '../../types/command'

export const aboutCommand: Command = {
  name: 'about',
  description: 'Display personal information',
  usage: 'about',
  category: 'content',
  handler: async () => {
    return `
╔══════════════════════════════════════════════════════════╗
║                    ABOUT ME                               ║
╚══════════════════════════════════════════════════════════╝

👋 Hi, I'm Jorge Delgadillo

📍 Location: Querétaro, Mexico
💼 Role: Fullstack Software Engineer
📅 Experience: 5+ years

───────────────────────────────────────────────────────────

MY JOURNEY

I'm a versatile and detail-oriented Fullstack Software 
Engineer with over 5 years of experience in startups and 
international environments. My journey spans from building 
critical payments infrastructure to developing cross-platform 
mobile applications that serve thousands of users.

My expertise lies in creating scalable backend systems, 
designing seamless user experiences, and managing cloud 
infrastructure. I have a track record of leading greenfield 
projects, implementing automation solutions, and integrating 
complex payment systems like Stripe and Hyperwallet.

Recently, in my Freelance work, I've implemented subscription 
flows and webhook security with Stripe, built custom AI agents 
using LangChain, and designed automation pipelines in n8n 
integrating LLMs, vector databases, and external APIs.

I'm passionate about clean code, test-driven development, 
and building AI-powered solutions that automate complex 
workflows.

───────────────────────────────────────────────────────────

QUICK STATS

  Years Experience:  5+
  Projects:          20+
  Technologies:      15+
  Countries:         3
`.trim()
  }
}
