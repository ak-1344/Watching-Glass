'use client'

import { createContext, useContext, useState } from 'react'

interface QuizContextType {
  answers: {
    birthday: Date | null
    color: string
    weather: 'warm' | 'cool' | null
    zodiac: string | null
  }
  setAnswer: (question: keyof QuizContextType['answers'], value: any) => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswers] = useState({
    birthday: null,
    color: '#000000',
    weather: null,
    zodiac: null,
  })

  const setAnswer = (question: keyof typeof answers, value: any) => {
    setAnswers(prev => ({ ...prev, [question]: value }))
  }

  return (
    <QuizContext.Provider value={{ answers, setAnswer }}>
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () => {
  const context = useContext(QuizContext)
  if (!context) throw new Error('useQuiz must be used within QuizProvider')
  return context
}

