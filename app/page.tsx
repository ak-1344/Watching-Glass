import { Layout } from "@/components/layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 border-2 border-black rounded-full relative">
              <div className="absolute -right-1 top-1/2 w-3 h-3 bg-black rounded-full" />
              <div className="absolute -right-3 top-1/2 w-2 h-2 bg-black rounded-full" />
            </div>
            <h1 className="text-3xl font-bold">The</h1>
          </div>
          <h1 className="text-3xl font-bold">Watching Glass</h1>
        </div>
        <p className="text-sm text-gray-600">Your Path, Clearly Seen</p>
        <Link 
          href="/quiz/birthday"
          className="inline-flex items-center justify-center rounded-md bg-[#00FF7F] px-12 py-3 text-sm font-medium text-black hover:bg-[#00FF7F]/90 transition-colors w-full max-w-[200px]"
        >
          READ MY FUTURE!
        </Link>
      </div>
    </Layout>
  )
}

