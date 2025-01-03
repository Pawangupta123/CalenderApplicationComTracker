import { Navigation } from '@/components/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CompanyManagement } from '@/components/admin/company-management'
import { CommunicationMethodManagement } from '@/components/admin/communication-method-management'

export default function AdminPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Module</h1>
        <Tabs defaultValue="companies">
          <TabsList>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="communication-methods">Communication Methods</TabsTrigger>
          </TabsList>
          <TabsContent value="companies">
            <CompanyManagement />
          </TabsContent>
          <TabsContent value="communication-methods">
            <CommunicationMethodManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

