'use client'

import { Layout } from "@/components/layout"

export default function Results() {
  return (
    <Layout>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-purple-600">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </div>
        
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold">Results</h2>
          <p className="text-purple-800">
            You are blah blah blah and you do blah blah, you wish you could blah blah.
          </p>
          <p className="text-purple-800">
            Do blah blah and everything will be amazing and beautiful and perfect and pay me $12031231 for doing this service for you, and I'll give you 3 more predictions.
          </p>
        </div>

        <button 
          onClick={() => window.location.href = '/'}
          className="w-full bg-[#00FF7F] hover:bg-[#00FF7F]/90 text-black py-3 rounded-md text-sm font-medium"
        >
          OKAY
        </button>
      </div>
    </Layout>
  )
}

