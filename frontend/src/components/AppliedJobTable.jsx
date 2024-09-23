import { Badge } from "./ui/badge"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

function AppliedJobTable() {
    return (
        <div>
  <Table>
    <TableCaption>A list of your applied jobs</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Date</TableHead>
        <TableHead>Job Role</TableHead>
        <TableHead>Company</TableHead>
        <TableHead className="text-right">Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {/* Static Job Data */}
      <TableRow>
        <TableCell>2024-09-22</TableCell>
        <TableCell>Frontend Developer</TableCell>
        <TableCell>ABC Corp</TableCell>
        <TableCell className="text-right">
          <Badge className='bg-green-400'>ACCEPTED</Badge>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>2024-09-15</TableCell>
        <TableCell>Backend Developer</TableCell>
        <TableCell>XYZ Ltd</TableCell>
        <TableCell className="text-right">
          <Badge className='bg-gray-400'>PENDING</Badge>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>2024-08-30</TableCell>
        <TableCell>FullStack Developer</TableCell>
        <TableCell>Tech Solutions</TableCell>
        <TableCell className="text-right">
          <Badge className='bg-red-400'>REJECTED</Badge>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>

    )
}

export default AppliedJobTable
