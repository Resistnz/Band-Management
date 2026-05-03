import prisma from '@/lib/prisma'
import { addSong, deleteSong, updateSongNotes } from './actions'
import { Music, Plus, Trash2 } from 'lucide-react'
import { MostPlayedChart, TopRatedChart, CoversByYearChart } from '@/components/SongCharts'
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

  // Group covers by year
  const coversByYear = songs
    .filter(s => s.isCover && s.releaseYear)
    .reduce((acc, song) => {
      const year = song.releaseYear!.toString()
      acc[year] = (acc[year] || 0) + 1
      return acc
    }, {} as Record<string, number>)

  const coversChartData = Object.entries(coversByYear)
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => parseInt(a.year) - parseInt(b.year))

  return (
    <div>
      <header className="flex-between mb-6">
        <div>
          <h1>Songs & Setlists</h1>
          <p>Manage your repertoire and track play history.</p>
        </div>
      </header>

      <div className="grid grid-cols-3 mb-6">
        <div className="glass-panel">
          <h2 className="mb-4" style={{ fontSize: '1.125rem' }}>Most Played Songs</h2>
          <MostPlayedChart data={chartData} />
        </div>
        <div className="glass-panel">
          <h2 className="mb-4" style={{ fontSize: '1.125rem' }}>Top Rated Songs</h2>
          <TopRatedChart data={chartData} />
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
                  onUpdateNotes={updateSongNotes} 
                />
              ))}
            </tbody>
          </table>
        </div>

        <AddSongForm action={addSong} />
      </div>
    </div>
  )
}
