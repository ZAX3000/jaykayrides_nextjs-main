"use client"

import { useFirestore } from "@/hooks/use-firestore"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function RidesPage() {
  const { rides, users, drivers, loading } = useFirestore()

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-sm text-muted-foreground">Loading rides...</p>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">All Rides</h1>

      <div className="border rounded-lg overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Pickup</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rides.map((ride) => {
              const user = users.find(u => u.id === ride.userId)
              const driver = drivers.find(d => d.id === ride.driverId)

              const pickup = ride.startLocation || "Unknown"
              const destination = ride.destination || "Unknown"
              const charge = ride.charge || "Unknown"

              return (
                <TableRow key={ride.id}>
                  <TableCell>#{ride.id}</TableCell>
                  <TableCell>{user  ? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim() || user.email  : "Unknown"}</TableCell>
                  <TableCell>{driver?.driverName || "Unassigned"}</TableCell>
                  <TableCell>{pickup.split(",")[0]}</TableCell>
                  <TableCell>{destination.split(",")[0]}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant(ride.status)}>
                      {ride.status?.replace("_", " ") || "unknown"}
                    </Badge>
                  </TableCell>
                  <TableCell>{charge || "—"}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function statusVariant(status: string = "") {
  switch (status) {
    case "completed":
      return "default"
    case "in_progress":
      return "secondary"
    case "cancelled":
      return "destructive"
    default:
      return "outline"
  }
}
