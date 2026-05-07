import { useState, useEffect, useCallback } from 'react'

interface UseTypewriterOptions {
  speed?: number
  skipOnInteraction?: boolean
}

export function useTypewriter(
  text: string,
  options: UseTypewriterOptions = {}
) {
  const { speed = 30, skipOnInteraction = true } = options
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [isSkipped, setIsSkipped] = useState(false)

  const skip = useCallback(() => {
    if (skipOnInteraction && !isComplete) {
      setDisplayedText(text)
      setIsComplete(true)
      setIsSkipped(true)
    }
  }, [text, skipOnInteraction, isComplete])

  useEffect(() => {
    if (isSkipped) return

    if (text.length === 0) {
      setDisplayedText('')
      setIsComplete(true)
      return
    }

    setDisplayedText('')
    setIsComplete(false)
    setIsSkipped(false)

    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text.charAt(index))
        index++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed, isSkipped])

  return {
    displayedText,
    isComplete,
    isSkipped,
    skip
  }
}
