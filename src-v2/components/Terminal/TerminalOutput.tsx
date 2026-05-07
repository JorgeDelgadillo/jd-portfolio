import { useEffect, useState } from 'react'
import { CommandEntry } from '../../types/command'
import { TerminalTheme } from '../../themes/types'

interface TerminalOutputProps {
  output: CommandEntry[]
  theme: TerminalTheme
}

export default function TerminalOutput({ output, theme }: TerminalOutputProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])

  useEffect(() => {
    const lines: string[] = []
    
    output.forEach(entry => {
      lines.push(
        `%c${'jorge@portfolio'}%c $ ${entry.command}`,
        `color: ${theme.colors.green}`,
        `color: ${theme.colors.foreground}`
      )
      
      const outputLines = entry.output.split('\n')
      outputLines.forEach(line => {
        lines.push(line)
      })
    })

    setDisplayedLines(lines)
  }, [output, theme])

  return (
    <div className="space-y-1">
      {displayedLines.map((line, index) => {
        const isCommandPrompt = line.includes('%c')
        
        if (isCommandPrompt) {
          const parts = line.split('%c')
          return (
            <div key={index} className="font-mono text-sm md:text-base">
              <span style={{ color: theme.colors.green }}>{parts[1]}</span>
              <span style={{ color: theme.colors.foreground }}>{parts[2]}</span>
            </div>
          )
        }

        return (
          <div 
            key={index}
            className="font-mono text-sm md:text-base whitespace-pre-wrap break-words"
            style={{ color: theme.colors.foreground }}
          >
            {line}
          </div>
        )
      })}
    </div>
  )
}
