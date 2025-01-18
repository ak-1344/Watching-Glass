'use client'

import { Layout } from "@/components/layout"
import { ProgressDots } from "@/components/progress-dots"
import { useQuiz } from "@/context/quiz-context"
import { useRouter } from "next/navigation"
import { Check } from 'lucide-react'

export default function WeatherQuestion() {
  const router = useRouter()
  const { answers, setAnswer } = useQuiz()

  return (
    <Layout>
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-xl font-medium text-center">Fortune Quiz</h1>
        <h2 className="text-lg text-center text-purple-800 font-medium">
          Do you prefer warm or cool weather?
        </h2>
        
        <div className="space-y-3">
          {[
            { id: 'A', label: 'Warm' },
            { id: 'B', label: 'Cool' }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setAnswer('weather', option.label.toLowerCase())}
              className={`w-full p-4 px-6 text-left bg-white rounded-lg flex items-center gap-4 hover:bg-gray-50 transition-colors ${
                answers.weather === option.label.toLowerCase() ? 'ring-2 ring-[#00FF7F]' : ''
              }`}
            >
              <span className="text-gray-500">{option.id}</span>
              <span>{option.label}</span>
              {answers.weather === option.label.toLowerCase() && (
                <Check className="w-5 h-5 text-[#00FF7F] ml-auto" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={() => router.push('/quiz/zodiac')}
          disabled={!answers.weather}
          className={`w-full py-3 px-6 rounded-md text-sm transition-colors ${
            answers.weather 
              ? 'bg-gray-300 hover:bg-gray-400 text-gray-800' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          CONTINUE
        </button>

        <ProgressDots current={3} total={4} />
      </div>
    </Layout>
  )
}

