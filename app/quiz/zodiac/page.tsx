'use client'

import { Layout } from "@/components/layout"
import { ProgressBar } from "@/components/progress-bar"
import { useQuiz } from "@/context/quiz-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
]

export default function ZodiacQuestion() {
  const router = useRouter()
  const { answers, setAnswer } = useQuiz()

  return (
    <Layout>
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center">Fortune Quiz</h1>
        <h2 className="text-lg text-center text-purple-800">What's your zodiac sign, if you know it?</h2>
        
        <div className="grid grid-cols-2 gap-3">
          {ZODIAC_SIGNS.map((sign) => (
            <button
              key={sign}
              onClick={() => setAnswer('zodiac', sign)}
              className={`p-4 text-center bg-white rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-50 transition-colors ${
                answers.zodiac === sign ? 'ring-2 ring-[#00FF7F]' : ''
              }`}
            >
              <span>{sign}</span>
              {answers.zodiac === sign && (
                <Check className="w-5 h-5 text-[#00FF7F]" />
              )}
            </button>
          ))}
        </div>

        <Button
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
          onClick={() => router.push('/results')}
          disabled={!answers.zodiac}
        >
          Continue
        </Button>

        <ProgressBar current={4} total={4} />
      </div>
    </Layout>
  )
}

