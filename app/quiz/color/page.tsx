'use client'

import { Layout } from "@/components/layout"
import { ProgressBar } from "@/components/progress-bar"
import { useQuiz } from "@/context/quiz-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function ColorQuestion() {
  const router = useRouter()
  const { answers, setAnswer } = useQuiz()

  return (
    <Layout>
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center">Fortune Quiz</h1>
        <h2 className="text-lg text-center text-purple-800">What's your favorite color?</h2>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <input
            type="color"
            value={answers.color}
            onChange={(e) => setAnswer('color', e.target.value)}
            className="w-full h-40 cursor-pointer"
          />
        </div>

        <Button
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
          onClick={() => router.push('/quiz/weather')}
        >
          Continue
        </Button>

        <ProgressBar current={2} total={4} />
      </div>
    </Layout>
  )
}

