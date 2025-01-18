'use client'

import { Layout } from "@/components/layout"
import { ProgressBar } from "@/components/progress-bar"
import { Calendar } from "@/components/ui/calendar"
import { useQuiz } from "@/context/quiz-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function BirthdayQuestion() {
  const router = useRouter()
  const { answers, setAnswer } = useQuiz()

  return (
    <Layout>
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center">Fortune Quiz</h1>
        <h2 className="text-lg text-center text-purple-800">When's your birthday?</h2>
        
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <Calendar
            mode="single"
            selected={answers.birthday || undefined}
            onSelect={(date) => setAnswer('birthday', date)}
            className="rounded-md border"
          />
        </div>

        <Button
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800"
          onClick={() => router.push('/quiz/color')}
          disabled={!answers.birthday}
        >
          Continue
        </Button>

        <ProgressBar current={1} total={4} />
      </div>
    </Layout>
  )
}

