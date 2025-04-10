"use client"

import { useEffect, useRef } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useFirestore } from "@/hooks/use-firestore"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix for default marker icons in Next.js
const defaultIcon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconRetinaUrl: "/images/marker-icon-2x.png",
  shadowUrl: "/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const carIcon = L.icon({
  iconUrl: "/images/car-icon.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
})

export default function MapPage() {
  const { drivers } = useFirestore()
  const mapRef = useRef<L.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && mapContainerRef.current && !mapRef.current) {
      // Initialize map
      const map = L.map(mapContainerRef.current).setView([40.7128, -74.0060], 13)
      mapRef.current = map

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Add markers for each driver
      drivers.forEach(driver => {
        if (driver.location) {
          L.marker([driver.location.lat, driver.location.lng], {
            icon: carIcon,
          })
            .bindPopup(`<b>${driver.name}</b><br>${driver.vehicle.make} ${driver.vehicle.model}`)
            .addTo(map)
        }
      })

      // Add central marker for the company
      L.marker([40.7128, -74.0060], {
        icon: defaultIcon,
      })
        .bindPopup("<b>Jaykay Rides HQ</b>")
        .addTo(map)

      return () => {
        map.remove()
        mapRef.current = null
      }
    }
  }, [drivers])

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Live Driver Locations</h2>
      <Card>
        <CardHeader>
          <CardTitle>Real-time Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            ref={mapContainerRef} 
            className="h-[600px] w-full rounded-md"
            style={{ minHeight: "400px" }}
          />
        </CardContent>
      </Card>
    </div>
  )
}