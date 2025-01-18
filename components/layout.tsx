interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#EDE8E3] flex flex-col items-center justify-center p-4">
      {children}
    </div>
  )
}

