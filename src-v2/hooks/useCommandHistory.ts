import { useState, useCallback } from 'react'

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const addToHistory = useCallback((command: string) => {
    if (!command.trim()) return
    setHistory(prev => [...prev, command.trim()])
    setHistoryIndex(-1)
  }, [])

  const navigateHistory = useCallback((direction: 'up' | 'down'): string | null => {
    if (history.length === 0) return null

    if (direction === 'up') {
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        return history[history.length - 1 - newIndex]
      }
      return historyIndex === -1 ? null : history[0]
    } else {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        return history[history.length - 1 - newIndex]
      }
      setHistoryIndex(-1)
      return null
    }
  }, [history, historyIndex])

  const clearHistory = useCallback(() => {
    setHistory([])
    setHistoryIndex(-1)
  }, [])

  return {
    history,
    historyIndex,
    addToHistory,
    navigateHistory,
    clearHistory
  }
}
