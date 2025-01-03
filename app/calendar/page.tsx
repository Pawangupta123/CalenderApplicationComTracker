import { Navigation } from '@/components/navigation'
import { CalendarView } from '@/components/calendar/calendar-view'

export default function CalendarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Calendar</h1>
        <CalendarView />
      </main>
    </div>
  )
}

