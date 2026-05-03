import prisma from '@/lib/prisma'
import { addSong, deleteSong } from './actions'
import { Music, Plus, Trash2 } from 'lucide-react'
import { MostPlayedChart, TopRatedChart } from '@/components/SongCharts'

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
          <h2 className="mb-4" style={{ fontSize: '1.125rem' }}>Top Rated Songs</h2>
          <TopRatedChart data={chartData} />
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
                <tr key={song.id}>
                  <td style={{ fontWeight: 500 }}>{song.title}</td>
                  <td>
                    <span className="badge badge-accent">{song.setlists.length} times</span>
                  </td>
                  <td style={{ color: 'var(--text-secondary)' }}>{song.notes || '-'}</td>
                  <td className="text-right">
                    <form action={async () => {
                      "use server"
                      await deleteSong(song.id)
                    }}>
                      <button type="submit" className="btn btn-secondary" style={{ padding: '0.4rem', color: 'var(--danger)' }}>
                        <Trash2 size={16} />
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="glass-panel" style={{ height: 'fit-content' }}>
          <h2 className="flex-center gap-2" style={{ justifyContent: 'flex-start' }}>
            <Plus size={20} className="text-accent" />
            Add New Song
          </h2>
          <form action={addSong} className="mt-4">
            <div className="input-group">
              <label className="input-label" htmlFor="title">Song Title</label>
              <input type="text" id="title" name="title" className="input-field" required placeholder="e.g. Free Bird" />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="notes">Notes / Tuning (Optional)</label>
              <input type="text" id="notes" name="notes" className="input-field" placeholder="e.g. Drop D, Capo 2" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Add Song</button>
          </form>
        </div>
      </div>
    </div>
  )
}
