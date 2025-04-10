"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function NotificationsSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="font-medium">Email Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="new-rides">New ride requests</Label>
            <Switch id="new-rides" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="completed-rides">Completed rides</Label>
            <Switch id="completed-rides" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="promotions">Promotions</Label>
            <Switch id="promotions" />
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-medium">Push Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="push-new-rides">New ride requests</Label>
            <Switch id="push-new-rides" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-driver-updates">Driver updates</Label>
            <Switch id="push-driver-updates" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-system">System messages</Label>
            <Switch id="push-system" />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-2 pt-4">
        <Button variant="outline">Reset Defaults</Button>
        <Button>Save Preferences</Button>
      </div>
    </div>
  )
}