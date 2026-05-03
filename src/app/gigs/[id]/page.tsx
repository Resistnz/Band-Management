import prisma from '@/lib/prisma'
import { addSongToGig, removeSongFromGig, saveSingleRating, saveGigNotes } from './actions'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'
import { notFound } from 'next/navigation'
import SetlistSongRow from './SetlistSongRow'

export default async function GigDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const gigId = resolvedParams.id;

  const gig = await prisma.setlist.findUnique({
    where: { id: gigId },
    include: {
      songs: {
        include: { song: true },
        orderBy: { position: 'asc' }
      }
    }
  })

  if (!gig) return notFound()

  const allSongs = await prisma.song.findMany({ orderBy: { title: 'asc' } })
  const availableSongs = allSongs.filter(s => !gig.songs.find(gs => gs.songId === s.id))

  return (
    <div>
      <div className="mb-6">
        <Link href="/gigs" className="btn btn-secondary" style={{ display: 'inline-flex', padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
          <ArrowLeft size={16} /> Back to Gigs
        </Link>
      </div>

      <header className="mb-6">
        <h1>{gig.venue} Setlist</h1>
        <p>{format(new Date(gig.date), 'EEEE, MMMM d, yyyy')} {gig.notes && `• ${gig.notes}`}</p>
      </header>

      <div className="grid grid-cols-3">
        <div className="glass-panel" style={{ gridColumn: 'span 2' }}>
          <h2 className="mb-6 flex-between">
            Setlist & Ratings
          </h2>
          
          <div className="flex flex-col gap-6">
            {gig.songs.length === 0 ? (
              <p className="text-center">No songs added to this setlist yet.</p>
            ) : gig.songs.map((item, index) => (
              <SetlistSongRow 
                key={item.id} 
                gigId={gig.id} 
                item={item} 
                index={index} 
                onRemove={removeSongFromGig} 
                onSave={saveSingleRating} 
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="glass-panel" style={{ height: 'fit-content' }}>
            <h2 className="mb-4">Add Song</h2>
            <form action={addSongToGig.bind(null, gig.id)}>
              <div className="input-group">
                <label className="input-label">Select Song</label>
                <select name="songId" className="input-field" required>
                  <option value="">-- Choose a song --</option>
                  {availableSongs.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={availableSongs.length === 0}>
                {availableSongs.length === 0 ? 'All songs added!' : 'Add to Setlist'}
              </button>
            </form>
          </div>

          <div className="glass-panel" style={{ height: 'fit-content' }}>
            <h2 className="mb-4 flex items-center gap-2">
              <FileText size={20} className="text-accent" /> Gig Notes
            </h2>
            <form action={saveGigNotes.bind(null, gig.id)} className="flex flex-col gap-4">
              <div className="input-group m-0">
                <label className="input-label text-success">Good</label>
                <textarea name="goodNotes" className="input-field" rows={2} defaultValue={gig.goodNotes || ''} placeholder="What went well?" />
              </div>
              <div className="input-group m-0">
                <label className="input-label text-danger">Bad</label>
                <textarea name="badNotes" className="input-field" rows={2} defaultValue={gig.badNotes || ''} placeholder="What went poorly?" />
              </div>
              <div className="input-group m-0">
                <label className="input-label text-warning">Interesting / Funny</label>
                <textarea name="interestingNotes" className="input-field" rows={2} defaultValue={gig.interestingNotes || ''} placeholder="Crowd surfing? Spilled beer?" />
              </div>
              <button type="submit" className="btn btn-secondary" style={{ width: '100%' }}>
                Save Notes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
