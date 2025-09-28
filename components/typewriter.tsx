"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypewriterProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  loop?: boolean
}

export function Typewriter({ 
  texts, 
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  loop = true
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    // Add slight randomness to make it feel more natural
    const randomDelay = Math.random() * 20 + 10 // 10-30ms random delay
    const actualSpeed = isDeleting ? deletingSpeed : typingSpeed
    const finalSpeed = actualSpeed + randomDelay

    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex]
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(fullText.substring(0, currentText.length - 1))
        
        if (currentText.length === 0) {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setIsPaused(true)
          setTimeout(() => setIsPaused(false), pauseDuration)
        }
      } else {
        // Typing text
        setCurrentText(fullText.substring(0, currentText.length + 1))
        
        if (currentText === fullText) {
          setIsDeleting(true)
          setIsPaused(true)
          setTimeout(() => setIsPaused(false), pauseDuration)
        }
      }
    }, finalSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={cn("inline-block", className)}>
      {currentText.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          {index < currentText.split('\n').length - 1 && <br />}
        </span>
      ))}
      <span className="typewriter-cursor"></span>
    </span>
  )
}
