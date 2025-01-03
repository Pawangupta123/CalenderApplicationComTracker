"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
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

type CommunicationMethod = {
  id: string
  name: string
  description: string
  sequence: number
  isMandatory: boolean
}

const initialMethods: CommunicationMethod[] = [
  { id: "1", name: "LinkedIn Post", description: "Post on company's LinkedIn page", sequence: 1, isMandatory: true },
  { id: "2", name: "LinkedIn Message", description: "Direct message on LinkedIn", sequence: 2, isMandatory: true },
  { id: "3", name: "Email", description: "Send an email", sequence: 3, isMandatory: true },
  { id: "4", name: "Phone Call", description: "Make a phone call", sequence: 4, isMandatory: true },
  { id: "5", name: "Other", description: "Other communication methods", sequence: 5, isMandatory: false },
]

export default function CommunicationMethodsPage() {
  const [methods, setMethods] = useState<CommunicationMethod[]>(initialMethods)
  const [newMethod, setNewMethod] = useState<Partial<CommunicationMethod>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setNewMethod((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleAddMethod = () => {
    const method: CommunicationMethod = {
      id: Date.now().toString(),
      name: newMethod.name || "",
      description: newMethod.description || "",
      sequence: methods.length + 1,
      isMandatory: newMethod.isMandatory || false,
    }
    setMethods((prev) => [...prev, method])
    setNewMethod({})
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Communication Methods Management</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add New Method</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Communication Method</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={newMethod.name || ""}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                name="description"
                value={newMethod.description || ""}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="isMandatory" className="text-right">
                Mandatory
              </Label>
              <Checkbox
                id="isMandatory"
                name="isMandatory"
                checked={newMethod.isMandatory || false}
                onCheckedChange={(checked) =>
                  setNewMethod((prev) => ({ ...prev, isMandatory: checked as boolean }))
                }
              />
            </div>
          </div>
          <Button onClick={handleAddMethod}>Add Method</Button>
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Sequence</TableHead>
            <TableHead>Mandatory</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {methods.map((method) => (
            <TableRow key={method.id}>
              <TableCell>{method.name}</TableCell>
              <TableCell>{method.description}</TableCell>
              <TableCell>{method.sequence}</TableCell>
              <TableCell>{method.isMandatory ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

