'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog'

export function CompanyManagement() {
  const [companies, setCompanies] = useState([])

  const addCompany = (company) => {
    setCompanies([...companies, company])
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Company Management</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Company</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Company</DialogTitle>
            <DialogDescription>Enter the details for the new company.</DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Company Name</Label>
              <Input id="name" placeholder="Enter company name" />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Enter company location" />
            </div>
            <div>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input id="linkedin" placeholder="Enter LinkedIn profile URL" />
            </div>
            <div>
              <Label htmlFor="emails">Emails</Label>
              <Input id="emails" placeholder="Enter email addresses (comma-separated)" />
            </div>
            <div>
              <Label htmlFor="phones">Phone Numbers</Label>
              <Input id="phones" placeholder="Enter phone numbers (comma-separated)" />
            </div>
            <div>
              <Label htmlFor="comments">Comments</Label>
              <Textarea id="comments" placeholder="Enter additional comments" />
            </div>
            <div>
              <Label htmlFor="periodicity">Communication Periodicity (in days)</Label>
              <Input id="periodicity" type="number" placeholder="Enter number of days" />
            </div>
            <Button type="submit">Add Company</Button>
          </form>
        </DialogContent>
      </Dialog>
      {/* Company list will be added here */}
    </div>
  )
}

