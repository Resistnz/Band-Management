"use client"

import { Trash2 } from 'lucide-react'
import { useState, useRef } from 'react'

type SetlistSongRowProps = {
  gigId: string
  item: {
    id: string
    rating: number | null
    feedback: string | null
    song: { title: string }
  }
  index: number
  onRemove: (gigId: string, itemId: string) => Promise<void>
  onSave: (gigId: string, itemId: string, rating: number | null, feedback: string) => Promise<void>
}

export default function SetlistSongRow({ gigId, item, index, onRemove, onSave }: SetlistSongRowProps) {
  const [rating, setRating] = useState(item.rating?.toString() || '')
  const [feedback, setFeedback] = useState(item.feedback || '')
  const [saving, setSaving] = useState(false)

  const handleBlur = async () => {
    setSaving(true)
    const ratingVal = rating ? parseInt(rating) : null
    await onSave(gigId, item.id, ratingVal, feedback)
    setSaving(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      (e.currentTarget as HTMLElement).blur();
    }
  }

  return (
    <div className="glass-panel" style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', position: 'relative' }}>
      {saving && <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', fontSize: '0.75rem', color: 'var(--accent-color)' }}>Saving...</div>}

      <div className="flex-between mb-4">
        <h3 className="flex items-center gap-2 m-0" style={{ margin: 0, fontSize: '1.125rem' }}>
          <span style={{ color: 'var(--text-secondary)' }}>{index + 1}.</span> {item.song.title}
        </h3>
        <button
          onClick={() => onRemove(gigId, item.id)}
          className="btn btn-secondary"
          style={{ padding: '0.4rem', color: 'var(--danger)', border: 'none' }}
          title="Remove from setlist"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="flex gap-4 items-end">
        <div className="input-group m-0" style={{ margin: 0, flex: 1 }}>
          <label className="input-label" style={{ fontSize: '0.75rem' }}>Rating (1-5)</label>
          <input
            type="number"
            min="1" max="5"
            className="input-field"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder="Rate 1-5"
          />
        </div>

        <div className="input-group m-0" style={{ margin: 0, flex: 3 }}>
          <label className="input-label" style={{ fontSize: '0.75rem' }}>Feedback / Notes</label>
          <input
            type="text"
            className="input-field"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder="Guitar too loud? Messed up the bridge?"
          />
        </div>
      </div>
    </div>
  )
}
