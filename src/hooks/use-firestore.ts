"use client"

import { useState, useEffect } from "react"
import { firestore } from "./firebase";

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

const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString()
}

const getRandom = (array: any[]) => array[Math.floor(Math.random() * array.length)]

export function useFirestore() {
  const [users, setUsers] = useState<User[]>([])
  const [drivers, setDrivers] = useState<Driver[]>([])
  const [rides, setRides] = useState<Ride[]>([])
  const [loading, setLoading] = useState(true)

  /*
  useEffect(() => {
    const loadMockData = async () => {
      setLoading(true)

      try {
        const names = ["Alice", "Bob", "Carol", "David", "Eve", "Frank", "Grace", "Hank", "Ivy", "Jack"]
        const cars = [
          { make: "Toyota", model: "Camry" },
          { make: "Honda", model: "Civic" },
          { make: "Ford", model: "Fusion" },
          { make: "Nissan", model: "Altima" },
          { make: "Chevrolet", model: "Malibu" },
        ]

        const mockUsers: User[] = names.map((name, i) => ({
          id: (i + 1).toString(),
          name,
          email: `${name.toLowerCase()}@example.com`,
          role: i === 0 ? "admin" : "user",
          joinDate: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
          lastActive: randomDate(new Date(2024, 0, 1), new Date()),
          status: "active",
          avatar: `/avatars/user${i + 1}.png`,
        }))

        const mockDrivers: Driver[] = Array.from({ length: 5 }, (_, i) => {
          const car = getRandom(cars)
          return {
            id: (100 + i).toString(),
            name: `Driver${i + 1}`,
            email: `driver${i + 1}@jaykayrides.com`,
            role: "driver",
            joinDate: randomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)),
            lastActive: randomDate(new Date(2024, 0, 1), new Date()),
            status: "active",
            avatar: `/avatars/driver${i + 1}.png`,
            vehicle: {
              make: car.make,
              model: car.model,
              year: 2018 + Math.floor(Math.random() * 6),
              plate: `PLT${100 + i}`,
            },
            location: {
              lat: 40.7128 + (Math.random() * 0.02 - 0.01),
              lng: -74.0060 + (Math.random() * 0.02 - 0.01),
            },
            rating: +(4 + Math.random()).toFixed(1),
          }
        })

        const mockRides: Ride[] = Array.from({ length: 10 }, (_, i) => {
          const user = getRandom(mockUsers.filter(u => u.role === "user"))
          const driver = getRandom(mockDrivers)
          const statuses = ["completed", "cancelled", "in_progress", "requested", "accepted"] as Ride["status"][]

          const createdAt = randomDate(new Date(2023, 0, 1), new Date())
          const duration = 5 + Math.floor(Math.random() * 20)
          const distance = +(1 + Math.random() * 10).toFixed(1)
          const fare = +(distance * 4 + Math.random() * 5).toFixed(2)
          const status = getRandom(statuses)

          return {
            id: (200 + i).toString(),
            userId: user.id,
            driverId: driver.id,
            pickup: {
              address: `Pickup ${i + 1}, NY`,
              lat: 40.71 + Math.random() * 0.01,
              lng: -74.00 + Math.random() * 0.01,
            },
            destination: {
              address: `Destination ${i + 1}, NY`,
              lat: 40.72 + Math.random() * 0.01,
              lng: -74.01 + Math.random() * 0.01,
            },
            status,
            fare,
            distance,
            duration,
            createdAt,
            completedAt: status === "completed" ? new Date(new Date(createdAt).getTime() + duration * 60000).toISOString() : undefined,
          }
        })

        setUsers([...mockUsers, ...mockDrivers])
        setDrivers(mockDrivers)
        setRides(mockRides)
      } catch (error) {
        console.error("Error loading mock data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadMockData()
  }, [])
  */

  useEffect(() => {
    const unsubscribeUsers = firestore.collection('jaykay_users').onSnapshot(snapshot => {
      const usersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User))
      setUsers(usersData)
    })
  
    const unsubscribeDrivers = firestore.collection('drivers').onSnapshot(snapshot => {
      const driversData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Driver))
      setDrivers(driversData)
    })
  
    const unsubscribeRides = firestore.collection('rides').onSnapshot(snapshot => {
      const ridesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Ride))
      setRides(ridesData)
    })
  
    return () => {
      unsubscribeUsers()
      unsubscribeDrivers()
      unsubscribeRides()
    }
  }, [])

  console.log(users)
  return { users, drivers, rides, loading }
}

// REAL FIRESTORE IMPLEMENTATION WOULD LOOK LIKE THIS:
  /*
  useEffect(() => {
    const unsubscribeUsers = firestore.collection('users').onSnapshot(snapshot => {
      const usersData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User))
      setUsers(usersData)
    })
  
    const unsubscribeDrivers = firestore.collection('drivers').onSnapshot(snapshot => {
      const driversData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Driver))
      setDrivers(driversData)
    })
  
    const unsubscribeRides = firestore.collection('rides').onSnapshot(snapshot => {
      const ridesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Ride))
      setRides(ridesData)
    })
  
    return () => {
      unsubscribeUsers()
      unsubscribeDrivers()
      unsubscribeRides()
    }
  }, [])
  */