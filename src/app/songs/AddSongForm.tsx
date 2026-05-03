"use client"

import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function AddSongForm({ action }: { action: (formData: FormData) => void }) {
  const [isCover, setIsCover] = useState(false)

  return (
    <div className="glass-panel" style={{ height: 'fit-content' }}>
      <h2 className="flex-center gap-2" style={{ justifyContent: 'flex-start' }}>
        <Plus size={20} className="text-accent" />
        Add New Song
      </h2>
      <form action={action} className="mt-4">
        <div className="input-group">
          <label className="input-label" htmlFor="title">Song Title</label>
          <input type="text" id="title" name="title" className="input-field" required placeholder="e.g. Free Bird" />
        </div>
        <div className="input-group">
          <label className="input-label" htmlFor="notes">Notes / Tuning (Optional)</label>
          <input type="text" id="notes" name="notes" className="input-field" placeholder="e.g. Drop D, Capo 2" />
        </div>
        
        <div className="input-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input 
            type="checkbox" 
            id="isCover" 
            name="isCover" 
            checked={isCover}
            onChange={(e) => setIsCover(e.target.checked)}
            style={{ width: '1rem', height: '1rem' }}
          />
          <label className="input-label" htmlFor="isCover" style={{ marginBottom: 0 }}>This is a cover song</label>
        </div>

        {isCover && (
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="input-group" style={{ flex: 2 }}>
              <label className="input-label" htmlFor="originalArtist">Original Artist</label>
              <input type="text" id="originalArtist" name="originalArtist" className="input-field" placeholder="e.g. Lynyrd Skynyrd" required={isCover} />
            </div>
            <div className="input-group" style={{ flex: 1 }}>
              <label className="input-label" htmlFor="releaseYear">Release Year</label>
              <input type="number" id="releaseYear" name="releaseYear" className="input-field" placeholder="e.g. 1973" required={isCover} min="1900" max={new Date().getFullYear()} />
            </div>
          </div>
        )}

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Add Song</button>
      </form>
    </div>
  )
}
