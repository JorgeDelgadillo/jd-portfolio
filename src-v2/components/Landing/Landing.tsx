import { useState, useEffect } from 'react'
import { TerminalTheme } from '../../themes/types'

interface LandingProps {
  onCommand: (command: string) => void
  theme: TerminalTheme
}

export default function Landing({ onCommand, theme }: LandingProps) {
  const [displayedText, setDisplayedText] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)

  const asciiArt = [
    ' ██████╗ ██╗   ██╗██████╗ ███████╗██████╗ ',
    '██╔════╝ ██║   ██║██╔══██╗██╔════╝██╔══██╗',
    '██║  ███╗██║   ██║██████╔╝█████╗  ██████╔╝',
    '██║   ██║██║   ██║██╔══██╗██╔══╝  ██╔══██╗',
    '╚██████╔╝╚██████╔╝██║  ██║███████╗██║  ██║',
    ' ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝'
  ]

  const landingLines = [
    '',
    '',
    '👋 Hi, I\'m Jorge — React, Python, AWS specialist',
    '📍 Querétaro, Mexico | 5+ years experience',
    '',
    '⚡ Quick Stats: 20+ projects | 15+ technologies | 3 countries',
    '',
    '─────────────────────────────────────────────────────────',
    'Type \'help\' to see available commands',
    'Try: about  |  experience  |  projects  |  skills  |  contact',
    '─────────────────────────────────────────────────────────',
    ''
  ]

  useEffect(() => {
    const allLines = [...asciiArt, ...landingLines]
    
    if (currentLine < allLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 50)
      
      return () => clearTimeout(timer)
    }
  }, [currentLine])

  useEffect(() => {
    const allLines = [...asciiArt, ...landingLines]
    setDisplayedText(allLines.slice(0, currentLine))
  }, [currentLine])

  const getSuggestedCommand = (text: string) => {
    const commands = ['about', 'experience', 'projects', 'skills', 'contact']
    if (commands.includes(text.trim())) {
      return text
    }
    return null
  }

  return (
    <div className="py-4">
      {displayedText.map((line, index) => {
        const isAscii = index < asciiArt.length
        const isSuggestion = line.includes('|')
        
        return (
          <div
            key={index}
            className="font-mono text-sm md:text-base"
            style={{
              color: isAscii ? theme.colors.blue : theme.colors.foreground,
              fontWeight: isAscii ? 'bold' : 'normal'
            }}
          >
            {isSuggestion ? (
              <span>
                {line.split('|').map((part, i, arr) => (
                  <span key={i}>
                    {part.trim()}
                    {i < arr.length - 1 && (
                      <button
                        onClick={() => {
                          const cmd = part.trim().replace(':', '')
                          if (cmd) onCommand(cmd)
                        }}
                        className="mx-1 hover:underline cursor-pointer"
                        style={{ color: theme.colors.green }}
                        type="button"
                      >
                        {part.trim()}
                      </button>
                    )}
                  </span>
                ))}
              </span>
            ) : (
              line
            )}
          </div>
        )
      })}
    </div>
  )
}
