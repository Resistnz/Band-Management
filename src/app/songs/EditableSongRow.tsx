"use client"

import { useState } from 'react'
import { Edit2, Save, X, Trash2 } from 'lucide-react'

type Song = {
  id: string
  title: string
  notes: string | null
  setlistsCount: number
  isCover?: boolean
  originalArtist?: string | null
  releaseYear?: number | null
}

export default function EditableSongRow({ 
  song, 
  onDelete, 
  onUpdateNotes 
}: { 
  song: Song
  onDelete: (id: string) => Promise<void>
  onUpdateNotes: (id: string, notes: string) => Promise<void>
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [notes, setNotes] = useState(song.notes || '')
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    await onUpdateNotes(song.id, notes)
    setIsSaving(false)
    setIsEditing(false)
  }

  return (
    <tr>
      <td style={{ fontWeight: 500 }}>
        <div>{song.title}</div>
        {song.isCover && (
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            Cover: {song.originalArtist || 'Unknown'} {song.releaseYear ? `(${song.releaseYear})` : ''}
          </div>
        )}
      </td>
      <td>
        <span className="badge badge-accent">{song.setlistsCount} times</span>
      </td>
      <td style={{ maxWidth: '300px' }}>
        {isEditing ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <textarea 
              className="input-field" 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)}
              style={{ minHeight: '80px', resize: 'vertical' }}
              placeholder="Add notes..."
            />
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button 
                onClick={handleSave} 
                disabled={isSaving}
                className="btn btn-primary" 
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
              >
                <Save size={14} /> Save
              </button>
              <button 
                onClick={() => setIsEditing(false)} 
                className="btn btn-secondary" 
                style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
              >
                <X size={14} /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ 
              color: 'var(--text-secondary)', 
              maxHeight: '100px', 
              overflowY: 'auto', 
              paddingRight: '0.5rem',
              whiteSpace: 'pre-wrap',
              flex: 1
            }}>
              {song.notes || '-'}
            </div>
            <button 
              onClick={() => setIsEditing(true)} 
              className="btn btn-secondary" 
              style={{ padding: '0.4rem' }}
              title="Edit notes"
            >
              <Edit2 size={16} />
            </button>
          </div>
        )}
      </td>
      <td className="text-right">
        <button 
          onClick={async () => {
            if (confirm('Are you sure you want to delete this song?')) {
              await onDelete(song.id)
            }
          }} 
          className="btn btn-secondary" 
          style={{ padding: '0.4rem', color: 'var(--danger)' }}
        >
          <Trash2 size={16} />
        </button>
      </td>
    </tr>
  )
}
