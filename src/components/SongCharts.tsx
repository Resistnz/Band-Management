"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

type ChartData = {
  name: string
  count: number
  avgRating: number
}

export function MostPlayedChart({ data }: { data: ChartData[] }) {
  if (data.length === 0) return <p>No data yet.</p>

  // Sort by count descending and take top 5
  const chartData = [...data].sort((a, b) => b.count - a.count).slice(0, 5)

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
          <XAxis dataKey="name" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
          <Tooltip 
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            contentStyle={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--panel-border)', borderRadius: '8px' }}
          />
          <Bar dataKey="count" fill="var(--accent-color)" radius={[4, 4, 0, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? 'var(--accent-hover)' : 'var(--accent-color)'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function TopRatedChart({ data }: { data: ChartData[] }) {
  const chartData = data.filter(d => d.avgRating > 0).sort((a, b) => b.avgRating - a.avgRating).slice(0, 5)
  if (chartData.length === 0) return <p>No ratings yet.</p>

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
          <XAxis dataKey="name" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} domain={[0, 5]} />
          <Tooltip 
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            contentStyle={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--panel-border)', borderRadius: '8px' }}
          />
          <Bar dataKey="avgRating" fill="var(--success)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
