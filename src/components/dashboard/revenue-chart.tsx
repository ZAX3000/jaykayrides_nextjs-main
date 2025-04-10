"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function RevenueChart() {
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
        label: "Revenue",
        data: [4000, 5200, 4800, 6100, 7300, 8200, 9100],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
      },
      {
        label: "Profit",
        data: [2800, 3600, 3200, 4100, 5100, 5800, 6500],
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
      },
    ],
  }

  return (
    <div className="h-[350px]">
      <Line options={options} data={data} />
    </div>
  )
}