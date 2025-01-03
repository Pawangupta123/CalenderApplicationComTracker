"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Company = {
  id: string
  name: string
  location: string
  linkedinProfile: string
  emails: string[]
  phoneNumbers: string[]
  comments: string
  communicationPeriodicity: number
}

const initialCompanies: Company[] = [
  {
    id: "1",
    name: "TCS",
    location: "New York,India, NY",
    linkedinProfile: "https://www.linkedin.com/company/acme-corp",
    emails: ["contact@tcs.com"],
    phoneNumbers: ["123-456-7890"],
    comments: "Leading technology company",
    communicationPeriodicity: 14,
  },
  // Add more mock companies as needed
]

export default function CompaniesPage() {
  const [companies, setCompanies] = useState<Company[]>(initialCompanies)
  const [newCompany, setNewCompany] = useState<Partial<Company>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewCompany((prev) => ({ ...prev, [name]: value }))
  }

  const handleAddCompany = () => {
    const company: Company = {
      id: Date.now().toString(),
      name: newCompany.name || "",
      location: newCompany.location || "",
      linkedinProfile: newCompany.linkedinProfile || "",
      emails: newCompany.emails?.split(",").map((email) => email.trim()) || [],
      phoneNumbers: newCompany.phoneNumbers?.split(",").map((phone) => phone.trim()) || [],
      comments: newCompany.comments || "",
      communicationPeriodicity: Number(newCompany.communicationPeriodicity) || 14,
    }
    setCompanies((prev) => [...prev, company])
    setNewCompany({})
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Company Management</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Company</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Company</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={newCompany.name || ""}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input
                id="location"
                name="location"
                value={newCompany.location || ""}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="linkedinProfile" className="text-right">
                LinkedIn Profile
              </Label>
              <Input
                id="linkedinProfile"
                name="linkedinProfile"
                value={newCompany.linkedinProfile || ""}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="emails" className="text-right">
                Emails
              </Label>
              <Input
                id="emails"
                name="emails"
                value={newCompany.emails?.join(", ") || ""}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Separate multiple emails with commas"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phoneNumbers" className="text-right">
                Phone Numbers
              </Label>
              <Input
                id="phoneNumbers"
                name="phoneNumbers"
                value={newCompany.phoneNumbers?.join(", ") || ""}
                onChange={handleInputChange}
                className="col-span-3"
                placeholder="Separate multiple numbers with commas"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="comments" className="text-right">
                Comments
              </Label>
              <Textarea
                id="comments"
                name="comments"
                value={newCompany.comments || ""}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="communicationPeriodicity" className="text-right">
                Communication Periodicity (days)
              </Label>
              <Input
                id="communicationPeriodicity"
                name="communicationPeriodicity"
                type="number"
                value={newCompany.communicationPeriodicity || ""}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
          </div>
          <Button onClick={handleAddCompany}>Add Company</Button>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>LinkedIn Profile</TableHead>
            <TableHead>Emails</TableHead>
            <TableHead>Phone Numbers</TableHead>
            <TableHead>Communication Periodicity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.location}</TableCell>
              <TableCell>{company.linkedinProfile}</TableCell>
              <TableCell>{company.emails.join(", ")}</TableCell>
              <TableCell>{company.phoneNumbers.join(", ")}</TableCell>
              <TableCell>{company.communicationPeriodicity} days</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

