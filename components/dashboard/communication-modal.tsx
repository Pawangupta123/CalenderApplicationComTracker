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
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function CommunicationModal({ isOpen, onClose, selectedCompanies }) {
  const [communicationType, setCommunicationType] = useState('')
  const [communicationDate, setCommunicationDate] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle the communication submission
    console.log('Communication submitted:', {
      type: communicationType,
      date: communicationDate,
      notes,
      companies: selectedCompanies,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Log Communication</DialogTitle>
          <DialogDescription>Enter the details of the communication performed.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="communicationType">Communication Type</Label>
            <Select
              value={communicationType}
              onValueChange={setCommunicationType}
            >
              <SelectTrigger id="communicationType">
                <SelectValue placeholder="Select communication type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="linkedin-post">LinkedIn Post</SelectItem>
                <SelectItem value="linkedin-message">LinkedIn Message</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone-call">Phone Call</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="communicationDate">Communication Date</Label>
            <Input
              id="communicationDate"
              type="date"
              value={communicationDate}
              onChange={(e) => setCommunicationDate(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter any additional notes"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

