import prisma from '@/lib/prisma'
import { addGig, deleteGig } from './actions'
import { format } from 'date-fns'
import Link from 'next/link'
import { Plus, Trash2, Calendar, MapPin, ChevronRight } from 'lucide-react'

export default async function GigsPage() {
  const gigs = await prisma.setlist.findMany({
    orderBy: { date: 'desc' },
    include: {
      songs: true
    }
  })

  return (
    <div>
      <header className="flex-between mb-6">
        <div>
          <h1>Gigs Timeline</h1>
          <p>Track past performances and plan upcoming setlists.</p>
        </div>
      </header>

      <div className="grid grid-cols-3">
        <div className="glass-panel" style={{ gridColumn: 'span 2' }}>
          <h2 className="mb-6">Timeline</h2>
          
          <div className="flex flex-col gap-4">
            {gigs.length === 0 ? (
              <p className="text-center">No gigs scheduled yet.</p>
            ) : gigs.map((gig) => (
              <div key={gig.id} className="glass-panel flex-between" style={{ padding: '0', background: 'rgba(255,255,255,0.02)', overflow: 'hidden', transition: 'all 0.2s ease' }}>
                <Link href={`/gigs/${gig.id}`} className="flex-between" style={{ flex: 1, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                  <div className="flex items-center gap-4">
                    <div style={{ color: 'var(--accent-color)' }}>
                      <ChevronRight size={24} />
                    </div>
                    <div>
                      <h3 className="mb-2 flex items-center gap-2">
                        {gig.venue}
                      </h3>
                      <div className="flex gap-4" style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        <span className="flex items-center gap-1"><Calendar size={14}/> {format(new Date(gig.date), 'MMMM d, yyyy')}</span>
                        <span className="flex items-center gap-1"><MusicIcon size={14}/> {gig.songs.length} songs</span>
                      </div>
                    </div>
                  </div>
                </Link>
                
                <div className="flex items-center gap-2" style={{ paddingRight: '1rem' }}>
                  <form action={async () => {
                    "use server"
                    await deleteGig(gig.id)
                  }}>
                    <button type="submit" className="btn btn-secondary" style={{ padding: '0.5rem', color: 'var(--danger)', border: 'none' }}>
                      <Trash2 size={18} />
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ height: 'fit-content' }}>
          <h2 className="flex items-center gap-2 mb-4" style={{ display: 'flex', alignItems: 'center' }}>
            <Plus size={20} className="text-accent" />
            Add Gig
          </h2>
          <form action={addGig}>
            <div className="input-group">
              <label className="input-label" htmlFor="date">Date</label>
              <input type="date" id="date" name="date" className="input-field" required defaultValue={new Date().toISOString().split('T')[0]} />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="venue">Venue / Location</label>
              <input type="text" id="venue" name="venue" className="input-field" required placeholder="The Rosemount Hotel" />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="notes">Notes (Optional)</label>
              <input type="text" id="notes" name="notes" className="input-field" placeholder="Supporting act, gear needed..." />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Create Gig</button>
          </form>
        </div>
      </div>
    </div>
  )
}

function MusicIcon({ size }: { size: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
  )
}
