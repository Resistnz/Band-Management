"use client"

import { useState } from 'react'
import { Edit2, Save, X, Trash2 } from 'lucide-react'

type Song = {
  id: string
  title: string
  notes: string | null
  setlistsCount: number
  isCover: boolean
  originalArtist: string | null
  releaseYear: number | null
}

type SongUpdateData = {
  title: string
  notes: string
  isCover: boolean
  originalArtist: string | null
  releaseYear: number | null
}

export default function EditableSongRow({ 
  song, 
  onDelete, 
  onUpdate 
}: { 
  song: Song
  onDelete: (id: string) => Promise<void>
  onUpdate: (id: string, data: SongUpdateData) => Promise<void>
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(song.title)
  const [notes, setNotes] = useState(song.notes || '')
  const [isCover, setIsCover] = useState(song.isCover)
  const [originalArtist, setOriginalArtist] = useState(song.originalArtist || '')
  const [releaseYear, setReleaseYear] = useState(song.releaseYear?.toString() || '')
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    await onUpdate(song.id, {
      title,
      notes,
      isCover,
      originalArtist: isCover && originalArtist ? originalArtist : null,
      releaseYear: isCover && releaseYear ? parseInt(releaseYear, 10) : null,
    })
    setIsSaving(false)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTitle(song.title)
    setNotes(song.notes || '')
    setIsCover(song.isCover)
    setOriginalArtist(song.originalArtist || '')
    setReleaseYear(song.releaseYear?.toString() || '')
    setIsEditing(false)
  }

  // Cover songs get a subtle left border highlight
  const rowStyle = song.isCover 
    ? { borderLeft: '3px solid var(--warning)', background: 'rgba(245, 158, 11, 0.04)' } 
    : { borderLeft: '3px solid var(--accent-color)', background: 'transparent' }

  if (isEditing) {
    return (
      <tr>
        <td colSpan={4} style={{ padding: '1rem' }}>
          <div className="glass-panel" style={{ 
            margin: 0, 
            padding: '1.25rem',
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1rem' }}>Edit Song</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button type="button" onClick={handleSave} disabled={isSaving} className="btn btn-primary" style={{ padding: '0.4rem 0.75rem', fontSize: '0.875rem' }}>
                  <Save size={14} /> {isSaving ? 'Saving...' : 'Save'}
                </button>
                <button type="button" onClick={handleCancel} className="btn btn-secondary" style={{ padding: '0.4rem 0.75rem', fontSize: '0.875rem' }}>
                  <X size={14} /> Cancel
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="input-group" style={{ marginBottom: '0.75rem' }}>
                <label className="input-label">Song Title</label>
                <input className="input-field" value={title} onChange={e => setTitle(e.target.value)} placeholder="Song title" />
              </div>

              <div className="input-group" style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', paddingTop: '1.5rem', cursor: 'pointer' }} onClick={() => setIsCover(!isCover)}>
                <input type="checkbox" checked={isCover} readOnly style={{ width: '1rem', height: '1rem', pointerEvents: 'none' }} id={`cover-${song.id}`} value="on" />
                <label style={{ marginBottom: 0, pointerEvents: 'none' }} className="input-label">This is a cover song</label>
              </div>
            </div>

            {isCover && (
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                <div className="input-group" style={{ marginBottom: '0.75rem' }}>
                  <label className="input-label">Original Artist</label>
                  <input className="input-field" value={originalArtist} onChange={e => setOriginalArtist(e.target.value)} placeholder="e.g. Lynyrd Skynyrd" />
                </div>
                <div className="input-group" style={{ marginBottom: '0.75rem' }}>
                  <label className="input-label">Release Year</label>
                  <input type="number" className="input-field" value={releaseYear} onChange={e => setReleaseYear(e.target.value)} placeholder="e.g. 1973" min="1900" max={new Date().getFullYear()} />
                </div>
              </div>
            )}

            <div className="input-group" style={{ marginBottom: 0 }}>
              <label className="input-label">Notes / Tuning</label>
              <textarea className="input-field" value={notes} onChange={e => setNotes(e.target.value)} style={{ minHeight: '60px', resize: 'vertical' }} placeholder="e.g. Drop D, Capo 2" />
            </div>
          </div>
        </td>
      </tr>
    )
  }

  return (
    <tr style={rowStyle}>
      <td style={{ fontWeight: 500 }}>
        <div>{song.title}</div>
        {song.isCover && (
          <div style={{ fontSize: '0.75rem', color: 'var(--warning)', marginTop: '4px' }}>
            Cover: {song.originalArtist || 'Unknown'} {song.releaseYear ? `(${song.releaseYear})` : ''}
          </div>
        )}
      </td>
      <td>
        <span className="badge badge-accent">{song.setlistsCount} times</span>
      </td>
      <td style={{ maxWidth: '300px' }}>
        <div style={{ 
          color: 'var(--text-secondary)', 
          maxHeight: '100px', 
          overflowY: 'auto', 
          paddingRight: '0.5rem',
          whiteSpace: 'pre-wrap',
        }}>
          {song.notes || '-'}
        </div>
      </td>
      <td className="text-right">
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <button 
            type="button"
            onClick={() => setIsEditing(true)} 
            className="btn btn-secondary" 
            style={{ padding: '0.4rem' }}
            title="Edit song"
          >
            <Edit2 size={16} />
          </button>
          <button 
            type="button"
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
        </div>
      </td>
    </tr>
  )
}
