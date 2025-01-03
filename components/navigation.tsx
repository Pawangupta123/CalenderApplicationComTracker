import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navigation() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <Link href="/" className="text-2xl font-bold">
        Communication Tracker
      </Link>
      <div className="space-x-4">
        <Button asChild variant="ghost">
          <Link href="/admin">Admin</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/calendar">Calendar</Link>
        </Button>
      </div>
    </nav>
  )
}

