import { Navigation } from '@/components/navigation'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Communication Tracker</h1>
        <p className="text-xl">
          Manage your company communications efficiently and effectively.
        </p>
      </main>
    </div>
  )
}

