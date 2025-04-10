"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export function UserActivityChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  const data = {
    labels,
    datasets: [
      {
        label: "New Users",
        data: [45, 32, 28, 41, 36, 52, 48],
        backgroundColor: "rgb(59, 130, 246)",
      },
      {
        label: "Active Users",
        data: [120, 135, 130, 142, 128, 145, 160],
        backgroundColor: "rgb(16, 185, 129)",
      },
      {
        label: "Rides Completed",
        data: [85, 92, 78, 95, 88, 105, 115],
        backgroundColor: "rgb(245, 158, 11)",
      },
    ],
  }

  return (
    <div className="h-[350px]">
      <Bar options={options} data={data} />
    </div>
  )
}