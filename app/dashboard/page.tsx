import { Navigation } from '@/components/navigation'
import { CompanyGrid } from '@/components/dashboard/company-grid'

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <CompanyGrid />
      </main>
    </div>
  )
}

