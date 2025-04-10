"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function BillingSettings() {
  const invoices = [
    {
      id: "INV001",
      date: "Jan 15, 2023",
      amount: "$250.00",
      status: "paid",
    },
    {
      id: "INV002",
      date: "Feb 15, 2023",
      amount: "$250.00",
      status: "paid",
    },
    {
      id: "INV003",
      date: "Mar 15, 2023",
      amount: "$250.00",
      status: "paid",
    },
    {
      id: "INV004",
      date: "Apr 15, 2023",
      amount: "$250.00",
      status: "pending",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Billing Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Current Plan</h4>
              <p className="text-lg">Premium</p>
              <p className="text-sm text-muted-foreground">
                $250/month - Unlimited rides, premium support
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Next Billing Date</h4>
              <p className="text-lg">May 15, 2023</p>
              <p className="text-sm text-muted-foreground">
                Your subscription will automatically renew
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <Button variant="outline" className="mr-2">
              Change Plan
            </Button>
            <Button variant="destructive">Cancel Subscription</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell className="text-right">
                    <span className={`px-2 py-1 rounded text-xs ${
                      invoice.status === "paid" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {invoice.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button>
          Download All Invoices
        </Button>
      </div>
    </div>
  )
}