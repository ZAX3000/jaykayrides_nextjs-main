"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function AppSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Theme</Label>
        <Select defaultValue="system">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center justify-between space-y-2">
        <Label htmlFor="analytics">Enable Analytics</Label>
        <Switch id="analytics" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between space-y-2">
        <Label htmlFor="error-reports">Send Error Reports</Label>
        <Switch id="error-reports" defaultChecked />
      </div>
      
      <div className="flex items-center justify-between space-y-2">
        <Label htmlFor="performance">Performance Mode</Label>
        <Switch id="performance" />
      </div>
      
      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline">Reset Defaults</Button>
        <Button>Save Preferences</Button>
      </div>
    </div>
  )
}