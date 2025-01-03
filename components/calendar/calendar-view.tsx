'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function CalendarView() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Mock data for demonstration
  const events = [
    { date: new Date(2023, 4, 1), type: 'Email', company: 'Acme Inc' },
    { date: new Date(2023, 4, 5), type: 'LinkedIn Post', company: 'TechCorp' },
    { date: new Date(2023, 4, 10), type: 'Phone Call', company: 'Innovate LLC' },
  ]

  const selectedDateEvents = events.filter(
    (event) => event.date.toDateString() === date?.toDateString()
  )

  return (
    <div className="flex space-x-4">
      <div className="w-1/2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
      <div className="w-1/2">
        <Card>
          <CardHeader>
            <CardTitle>Events for {date?.toDateString()}</CardTitle>
            <CardDescription>
              View and manage your communications for the selected date.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <ul className="space-y-2">
                {selectedDateEvents.map((event, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{event.company}</span>
                    <span>{event.type}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No events scheduled for this date.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

