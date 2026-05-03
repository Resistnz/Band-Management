import prisma from '@/lib/prisma'
import { Music, Calendar, DollarSign, Target } from 'lucide-react'
import { MostPlayedChart, TopRatedChart } from '@/components/SongCharts'
import Link from 'next/link'

export default async function Dashboard() {
  // Fetch some summary stats
  const songCount = await prisma.song.count()
  const setlistCount = await prisma.setlist.count()
  const roadmapCount = await prisma.roadmapItem.count({ where: { status: { not: 'DONE' } } })
  
  // Calculate balance
  const transactions = await prisma.transaction.findMany()
  const balance = transactions.reduce((acc, t) => {
    return t.type === 'INCOME' ? acc + t.amount : acc - t.amount
  }, 0)

  // Chart Data
  const songs = await prisma.song.findMany({
    include: {
      setlists: true
    }
  })

  const chartData = songs.map(song => {
    const ratings = song.setlists.map(s => s.rating).filter((r): r is number => r !== null)
    const avgRating = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length : 0
    return {
      name: song.title,
      count: song.setlists.length,
      avgRating
    }
  })

  return (
    <div>
      <header className="flex-between mb-6">
        <div>
          <h1>Welcome to BandHQ</h1>
          <p>Here's an overview of how the band is doing.</p>
        </div>
      </header>

      <div className="grid grid-cols-4 mb-6">
        <Link href="/songs" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="glass-panel stat-card" style={{ cursor: 'pointer' }}>
            <div className="flex-between">
              <span className="stat-title">Total Songs</span>
              <div className="stat-icon"><Music size={18} className="text-accent" /></div>
            </div>
            <span className="stat-value">{songCount}</span>
          </div>
        </Link>
        
        <Link href="/gigs" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="glass-panel stat-card" style={{ cursor: 'pointer' }}>
            <div className="flex-between">
              <span className="stat-title">Gigs Played</span>
              <div className="stat-icon"><Calendar size={18} className="text-success" /></div>
            </div>
            <span className="stat-value">{setlistCount}</span>
          </div>
        </Link>

        <Link href="/finances" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="glass-panel stat-card" style={{ cursor: 'pointer' }}>
            <div className="flex-between">
              <span className="stat-title">Band Funds</span>
              <div className="stat-icon"><DollarSign size={18} className="text-warning" /></div>
            </div>
            <span className="stat-value">${balance.toFixed(2)}</span>
          </div>
        </Link>

        <Link href="/roadmap" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="glass-panel stat-card" style={{ cursor: 'pointer' }}>
            <div className="flex-between">
              <span className="stat-title">Active Goals</span>
              <div className="stat-icon"><Target size={18} className="text-danger" /></div>
            </div>
            <span className="stat-value">{roadmapCount}</span>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2">
        <div className="glass-panel">
          <h2 className="mb-4" style={{ fontSize: '1.25rem' }}>Most Played Songs</h2>
          <MostPlayedChart data={chartData} />
        </div>
        <div className="glass-panel">
          <h2 className="mb-4" style={{ fontSize: '1.25rem' }}>Top Rated Performances</h2>
          <TopRatedChart data={chartData} />
        </div>
      </div>
    </div>
  )
}
