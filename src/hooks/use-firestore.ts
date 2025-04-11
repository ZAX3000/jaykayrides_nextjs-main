"use client"

import { useState, useEffect } from "react"
import { firestore } from "./firebase"
import { collection, onSnapshot } from "firebase/firestore"

type User = {
  id: string
  name: string
  email: string
  role: "admin" | "driver" | "user"
  joinDate: string
  lastActive?: string
  status?: "active" | "inactive"
  avatar?: string
}

type Driver = User & {
  vehicle: {
    make: string
    model: string
    year: number
    plate: string
  }
  location?: {
    lat: number
    lng: number
  }
  rating?: number
}

type Ride = {
  id: string
  userId: string
  driverId: string
  pickup: {
    address: string
    lat: number
    lng: number
  }
  destination: {
    address: string
    lat: number
    lng: number
  }
  status: "requested" | "accepted" | "in_progress" | "completed" | "cancelled"
  fare: number
  distance: number
  duration: number
  createdAt: string
  completedAt?: string
}

export function useFirestore() {
  const [users, setUsers] = useState<User[]>([])
  const [drivers, setDrivers] = useState<Driver[]>([])
  const [rides, setRides] = useState<Ride[]>([])
  const [loading, setLoading] = useState(true)

  console.log("Fetched rides:", rides)
  
  // Fetch users, drivers, and rides from Firestore
  useEffect(() => {
    const usersRef = collection(firestore, 'jaykay_users')
    const driversRef = collection(firestore, 'drivers')
    const ridesRef = collection(firestore, 'ride_requests') // previously 'rides'

    const unsubscribeUsers = onSnapshot(usersRef, snapshot => {
      const usersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User))
      setUsers(usersData)
      setLoading(false) // Set loading to false after fetching users
    })

    const unsubscribeDrivers = onSnapshot(driversRef, snapshot => {
      const driversData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Driver))
      setDrivers(driversData)
    })

    const unsubscribeRides = onSnapshot(ridesRef, snapshot => {
      const ridesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Ride))
      setRides(ridesData)
    })

    return () => {
      unsubscribeUsers()
      unsubscribeDrivers()
      unsubscribeRides()
    }
  }, [])

  return { users, drivers, rides, loading }
}