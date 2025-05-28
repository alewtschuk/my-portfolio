import './globals.css'

export const metadata = {
  title: 'Alex Lewtschuk',
  description: 'Hi, Im Alex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-[#191A1A] overflow-hidden">
      <body className="min-h-screen bg-[#191A1A] text-white overflow-hidden">
        {children}
      </body>
    </html>
  )
}