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

export function OverviewChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  }

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]

  const data = {
    labels,
    datasets: [
      {
        label: "Completed Rides",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(59, 130, 246, 0.8)",
      },
      {
        label: "Cancelled Rides",
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: "rgba(239, 68, 68, 0.8)",
      },
    ],
  }

  return (
    <div className="h-[350px]">
      <Bar options={options} data={data} />
    </div>
  )
}