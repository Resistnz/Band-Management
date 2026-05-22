"use client"

import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

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
      <ResponsiveContainer width="100%" height={300} minWidth={0}>
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

export function GigsByLocationChart({ data }: { data: { venue: string, count: number }[] }) {
  if (data.length === 0) return <p>No gigs recorded yet.</p>

  const chartData = [...data].sort((a, b) => b.count - a.count).slice(0, 8)

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height={300} minWidth={0}>
        <BarChart data={chartData} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
          <XAxis type="number" stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
          <YAxis type="category" dataKey="venue" stroke="var(--text-secondary)" fontSize={11} tickLine={false} axisLine={false} width={120} />
          <Tooltip 
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            contentStyle={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--panel-border)', borderRadius: '8px' }}
          />
          <Bar dataKey="count" fill="var(--success)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function CoversByYearChart({ data }: { data: { period: string, count: number }[] }) {
  if (data.length === 0) return <p>No cover songs with years recorded.</p>

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height={300} minWidth={0}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
          <XAxis dataKey="period" stroke="var(--text-secondary)" fontSize={11} tickLine={false} axisLine={false} />
          <YAxis stroke="var(--text-secondary)" fontSize={12} tickLine={false} axisLine={false} allowDecimals={false} />
          <Tooltip 
            cursor={{ stroke: 'rgba(255,255,255,0.2)' }}
            contentStyle={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--panel-border)', borderRadius: '8px' }}
          />
          <Line type="monotone" dataKey="count" stroke="var(--warning)" strokeWidth={2} dot={{ fill: 'var(--warning)', r: 4 }} activeDot={{ r: 6, fill: 'var(--warning)' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

