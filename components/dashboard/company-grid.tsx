'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { CommunicationModal } from '@/components/dashboard/communication-modal'

export function CompanyGrid() {
  const [selectedCompanies, setSelectedCompanies] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Mock data for demonstration
  const companies = [
    {
      id: '1',
      name: 'Acme Inc',
      lastCommunications: [
        { type: 'Email', date: '2023-05-01' },
        { type: 'LinkedIn Post', date: '2023-04-15' },
        { type: 'Phone Call', date: '2023-03-30' },
      ],
      nextCommunication: { type: 'Email', date: '2023-05-15' },
      status: 'normal',
    },
    {
      id: '2',
      name: 'TechCorp',
      lastCommunications: [
        { type: 'LinkedIn Message', date: '2023-05-05' },
        { type: 'Email', date: '2023-04-20' },
      ],
      nextCommunication: { type: 'Phone Call', date: '2023-05-10' },
      status: 'due',
    },
    // Add more mock companies as needed
  ]

  const toggleCompanySelection = (companyId) => {
    setSelectedCompanies((prev) =>
      prev.includes(companyId)
        ? prev.filter((id) => id !== companyId)
        : [...prev, companyId]
    )
  }

  const openCommunicationModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
      <div className="mb-4">
        <Button onClick={openCommunicationModal} disabled={selectedCompanies.length === 0}>
          Communication Performed
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Select</TableHead>
            <TableHead>Company Name</TableHead>
            <TableHead>Last Five Communications</TableHead>
            <TableHead>Next Scheduled Communication</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow
              key={company.id}
              className={
                company.status === 'overdue'
                  ? 'bg-red-100'
                  : company.status === 'due'
                  ? 'bg-yellow-100'
                  : ''
              }
            >
              <TableCell>
                <input
                  type="checkbox"
                  checked={selectedCompanies.includes(company.id)}
                  onChange={() => toggleCompanySelection(company.id)}
                />
              </TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>
                {company.lastCommunications.map((comm, index) => (
                  <div key={index} className="text-sm">
                    {comm.type} - {comm.date}
                  </div>
                ))}
              </TableCell>
              <TableCell>
                {company.nextCommunication.type} - {company.nextCommunication.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CommunicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedCompanies={selectedCompanies}
      />
    </div>
  )
}

