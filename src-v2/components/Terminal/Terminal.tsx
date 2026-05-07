import { useState, useRef, useEffect } from 'react'
import { useTheme } from '../../ThemeContext'
import TerminalInput from './TerminalInput'
import TerminalOutput from './TerminalOutput'
import Landing from '../Landing/Landing'
import { CommandEntry } from '../../types/command'
import { executeCommand } from '../../commands/executor'

export default function Terminal() {
  const { theme, setTheme } = useTheme()
  const [output, setOutput] = useState<CommandEntry[]>([])
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const outputEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [output])

  useEffect(() => {
    const saved = localStorage.getItem('command-history')
    if (saved) {
      setCommandHistory(JSON.parse(saved))
    }
  }, [])

  const handleCommand = async (command: string) => {
    const trimmedCommand = command.trim()
    if (!trimmedCommand) return

    const newEntry: CommandEntry = {
      command: trimmedCommand,
      output: '',
      timestamp: new Date()
    }

    setOutput(prev => [...prev, newEntry])
    setInput('')
    setHistoryIndex(-1)

    const result = await executeCommand(trimmedCommand)
    
    if (result === '__CLEAR_TERMINAL__') {
      setOutput([])
      return
    }

    setOutput(prev => {
      const updated = [...prev]
      const lastIndex = updated.length - 1
      if (updated[lastIndex]) {
        updated[lastIndex] = {
          ...updated[lastIndex],
          output: result
        }
      }
      return updated
    })

    const newHistory = [...commandHistory, trimmedCommand].slice(-100)
    setCommandHistory(newHistory)
    localStorage.setItem('command-history', JSON.stringify(newHistory))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex)
          setInput(commandHistory[commandHistory.length - 1 - newIndex])
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    } else if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
      e.preventDefault()
      setOutput([])
    } else if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
      e.preventDefault()
      setInput('')
    }
  }

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('terminal-theme')
      if (saved) {
        setTheme(saved)
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [setTheme])

  return (
    <div 
      className="w-full h-screen flex flex-col overflow-hidden"
      style={{ 
        backgroundColor: theme.colors.background,
        color: theme.colors.foreground 
      }}
    >
      <TerminalInput
        input={input}
        setInput={setInput}
        onKeyDown={handleKeyDown}
        theme={theme}
      />
      
      <div className="flex-1 overflow-y-auto px-4 py-2 font-mono text-sm md:text-base">
        {output.length === 0 && <Landing onCommand={handleCommand} theme={theme} />}
        
        <TerminalOutput 
          output={output} 
          theme={theme}
        />
        
        <div ref={outputEndRef} />
      </div>
    </div>
  )
}
