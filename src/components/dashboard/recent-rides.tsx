"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useFirestore } from "@/hooks/use-firestore"

export function RecentRides() {
  const { rides } = useFirestore()

  const statusVariant = (status: string) => {
    switch (status) {
      case "completed":
        return "default"
      case "in_progress":
        return "secondary"
      case "cancelled":
        return "destructive"
      default:
        return "outline" // fallback for unknown statuses like "no_answer"
    }
  }

  console.log("Recent rides:", rides)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Pickup</TableHead>
          <TableHead>Destination</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rides.slice(0, 5).map((ride) => {
          const pickupAddress = ride.startLocation || "Unknown"
          const destinationAddress = ride.destination || "Unknown"
          const status = ride.status ?? "unknown"

          return (
            <TableRow key={ride.id}>
              <TableCell className="font-medium">#{ride.id}</TableCell>
              <TableCell>{pickupAddress.split(",")[0]}</TableCell>
              <TableCell>{destinationAddress.split(",")[0]}</TableCell>
              <TableCell>
                <Badge variant={statusVariant(status)}>
                  {status.replace("_", " ")}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                {typeof ride.charge === "number" ? `$${ride.charge.toFixed(2)}` : "—"}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}