import prisma from '@/lib/prisma'
import { addSong, deleteSong, updateSong } from './actions'
import { Music, Plus, Trash2 } from 'lucide-react'
import { MostPlayedChart, CoversByYearChart } from '@/components/SongCharts'
import EditableSongRow from './EditableSongRow'
import AddSongForm from './AddSongForm'

export default async function SongsPage() {
  const songs = await prisma.song.findMany({
    include: {
      setlists: true
    },
    orderBy: { createdAt: 'desc' }
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

  // Group covers into 5-year buckets for a compact line chart
  const coverSongs = songs.filter(s => s.isCover && s.releaseYear)

  let coversChartData: { period: string, count: number }[] = []
  if (coverSongs.length > 0) {
    const years = coverSongs.map(s => s.releaseYear!)
    const minYear = Math.min(...years)
    const maxYear = new Date().getFullYear()

    // Round down to nearest 5-year boundary
    const bucketStart = Math.floor(minYear / 5) * 5
    const bucketEnd = Math.ceil((maxYear + 1) / 5) * 5

    const buckets: Record<string, number> = {}
    for (let y = bucketStart; y < bucketEnd; y += 5) {
      buckets[`${y}-${y + 4}`] = 0
    }

    coverSongs.forEach(song => {
      const yr = song.releaseYear!
      const bStart = Math.floor(yr / 5) * 5
      const key = `${bStart}-${bStart + 4}`
      buckets[key] = (buckets[key] || 0) + 1
    })

    coversChartData = Object.entries(buckets)
      .map(([period, count]) => ({ period, count }))
      .sort((a, b) => parseInt(a.period) - parseInt(b.period))
  }

  return (
    <div>
      <header className="flex-between mb-6">
        <div>
          <h1>Songs & Setlists</h1>
          <p>Manage your repertoire and track play history.</p>
        </div>
      </header>

      <div className="grid grid-cols-2 mb-6">
        <div className="glass-panel">
          <h2 className="mb-4" style={{ fontSize: '1.125rem' }}>Most Played Songs</h2>
          <MostPlayedChart data={chartData} />
        </div>
        <div className="glass-panel">
          <h2 className="mb-4" style={{ fontSize: '1.125rem' }}>Covers By Year</h2>
          <CoversByYearChart data={coversChartData} />
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="glass-panel" style={{ gridColumn: 'span 2' }}>
          <div className="flex-between mb-6">
            <h2>Repertoire ({songs.length})</h2>
          </div>
          
          <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Times Played</th>
                  <th>Notes</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {songs.length === 0 ? (
                  <tr><td colSpan={4} className="text-center">No songs added yet.</td></tr>
                ) : songs.map((song) => (
                  <EditableSongRow 
                    key={song.id} 
                    song={{
                      id: song.id,
                      title: song.title,
                      notes: song.notes,
                      setlistsCount: song.setlists.length,
                      isCover: song.isCover,
                      originalArtist: song.originalArtist,
                      releaseYear: song.releaseYear
                    }} 
                    onDelete={deleteSong} 
                    onUpdate={updateSong} 
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <AddSongForm action={addSong} />
      </div>
    </div>
  )
}
