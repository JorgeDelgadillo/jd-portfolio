import { TerminalTheme } from '../../themes/types'

interface TerminalInputProps {
  input: string
  setInput: (value: string) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  theme: TerminalTheme
}

export default function TerminalInput({ 
  input, 
  setInput, 
  onKeyDown, 
  theme 
}: TerminalInputProps) {
  return (
    <div 
      className="flex items-center gap-2 px-4 py-3 border-b"
      style={{ 
        borderColor: theme.colors.selection 
      }}
    >
      <span 
        className="font-mono text-sm md:text-base whitespace-nowrap"
        style={{ color: theme.colors.green }}
      >
        jorge@portfolio
      </span>
      <span style={{ color: theme.colors.foreground }}>~</span>
      <span 
        className="font-mono text-sm md:text-base"
        style={{ color: theme.colors.blue }}
      >
        $
      </span>
      <div className="flex-1 relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="w-full bg-transparent border-none outline-none font-mono text-sm md:text-base"
          style={{ color: theme.colors.foreground }}
          autoFocus
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          aria-label="Terminal command input"
        />
        <span 
          className="absolute pointer-events-none cursor-blink"
          style={{ 
            color: theme.colors.cursor,
            left: `${input.length * 0.6}em`,
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          █
        </span>
      </div>
    </div>
  )
}
