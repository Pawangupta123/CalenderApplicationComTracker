'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog'

export function CommunicationMethodManagement() {
  const [methods, setMethods] = useState([])

  const addMethod = (method) => {
    setMethods([...methods, method])
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Communication Method Management</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Communication Method</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Communication Method</DialogTitle>
            <DialogDescription>Enter the details for the new communication method.</DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Method Name</Label>
              <Input id="name" placeholder="Enter method name" />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Enter method description" />
            </div>
            <div>
              <Label htmlFor="sequence">Sequence</Label>
              <Input id="sequence" type="number" placeholder="Enter sequence number" />
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="mandatory" />
              <Label htmlFor="mandatory">Mandatory</Label>
            </div>
            <Button type="submit">Add Method</Button>
          </form>
        </DialogContent>
      </Dialog>
      {/* Method list will be added here */}
    </div>
  )
}

