"use client"

import { useState, useEffect } from "react"
import { firestore } from "./firebase"
import { collection, onSnapshot, Timestamp } from "firebase/firestore"

type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  role: "admin" | "driver" | "user"
  joinDate: string
  lastActive?: string
  status?: "active" | "inactive"
  avatar?: string
}

// type Driver = User & {}
// driver no longer extends user, as per the new schema

type Driver = {
  id: string
  driverName: string
  phone?: string
  rating?: number
  vehicleInfo?: {
    make: string
    model: string
    year: number
    plate: string
  }
  location?: {
    lat: number
    lng: number
  }
  status?: "active" | "inactive" | "on_trip"
  lastActive?: string
  joinDate?: string
  avatar?: string
}

type Ride = {
  firstName: string
  lastName: string
  phoneNumber: string
  id: string
  userId?: string
  driverId?: string
  startLocation?: string
  destination?: string
  status?: string
  charge?: string
  distance?: number
  duration?: number
  createdAt?: Timestamp
  completedAt?: Date
  // add any other real Firestore fields you want to support
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