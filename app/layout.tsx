import { QuizProvider } from "@/context/quiz-context"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QuizProvider>
          {children}
        </QuizProvider>
      </body>
    </html>
  )
}

