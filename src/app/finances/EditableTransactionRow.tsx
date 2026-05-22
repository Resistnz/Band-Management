"use client"

import { useState } from 'react'
import { Edit2, Save, X, Trash2, ExternalLink } from 'lucide-react'
import { format } from 'date-fns'

type Transaction = {
  id: string
  date: string
  amount: number
  type: string
  category: string
  description: string | null
  attachmentLink: string | null
}

type TransactionUpdateData = {
  date: string
  amount: number
  type: string
  category: string
  description: string | null
  attachmentLink: string | null
}

export default function EditableTransactionRow({
  transaction,
  onDelete,
  onUpdate,
}: {
  transaction: Transaction
  onDelete: (id: string) => Promise<void>
  onUpdate: (id: string, data: TransactionUpdateData) => Promise<void>
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [date, setDate] = useState(transaction.date)
  const [amount, setAmount] = useState(transaction.amount.toString())
  const [type, setType] = useState(transaction.type)
  const [category, setCategory] = useState(transaction.category)
  const [description, setDescription] = useState(transaction.description || '')
  const [attachmentLink, setAttachmentLink] = useState(transaction.attachmentLink || '')
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    await onUpdate(transaction.id, {
      date,
      amount: parseFloat(amount),
      type,
      category,
      description: description || null,
      attachmentLink: attachmentLink || null,
    })
    setIsSaving(false)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setDate(transaction.date)
    setAmount(transaction.amount.toString())
    setType(transaction.type)
    setCategory(transaction.category)
    setDescription(transaction.description || '')
    setAttachmentLink(transaction.attachmentLink || '')
    setIsEditing(false)
  }

  // Income rows get a subtle green tint
  const rowStyle = transaction.type === 'INCOME'
    ? { borderLeft: '3px solid var(--success)', background: 'rgba(16, 185, 129, 0.04)' }
    : { borderLeft: '3px solid var(--danger)', background: 'transparent' }

  if (isEditing) {
    return (
      <tr>
        <td colSpan={6} style={{ padding: '1rem' }}>
          <div className="glass-panel" style={{
            margin: 0,
            padding: '1.25rem',
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1rem' }}>Edit Transaction</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={handleSave} disabled={isSaving} className="btn btn-primary" style={{ padding: '0.4rem 0.75rem', fontSize: '0.875rem' }}>
                  <Save size={14} /> {isSaving ? 'Saving...' : 'Save'}
                </button>
                <button onClick={handleCancel} className="btn btn-secondary" style={{ padding: '0.4rem 0.75rem', fontSize: '0.875rem' }}>
                  <X size={14} /> Cancel
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div className="input-group" style={{ marginBottom: '0.75rem' }}>
                <label className="input-label">Type</label>
                <select className="input-field" value={type} onChange={e => setType(e.target.value)}>
                  <option value="INCOME">Income</option>
                  <option value="EXPENSE">Expense</option>
                </select>
              </div>
              <div className="input-group" style={{ marginBottom: '0.75rem' }}>
                <label className="input-label">Amount ($)</label>
                <input type="number" className="input-field" value={amount} onChange={e => setAmount(e.target.value)} step="0.01" min="0" />
              </div>
              <div className="input-group" style={{ marginBottom: '0.75rem' }}>
                <label className="input-label">Date</label>
                <input type="date" className="input-field" value={date} onChange={e => setDate(e.target.value)} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="input-group" style={{ marginBottom: '0.75rem' }}>
                <label className="input-label">Category</label>
                <input className="input-field" value={category} onChange={e => setCategory(e.target.value)} placeholder="Gig Pay, Rehearsal, Merch..." />
              </div>
              <div className="input-group" style={{ marginBottom: '0.75rem' }}>
                <label className="input-label">Description</label>
                <input className="input-field" value={description} onChange={e => setDescription(e.target.value)} placeholder="Notes about this..." />
              </div>
            </div>

            <div className="input-group" style={{ marginBottom: 0 }}>
              <label className="input-label">Attachment Link (e.g. Google Drive invoice URL)</label>
              <input className="input-field" value={attachmentLink} onChange={e => setAttachmentLink(e.target.value)} placeholder="https://drive.google.com/..." />
            </div>
          </div>
        </td>
      </tr>
    )
  }

  return (
    <tr style={rowStyle}>
      <td>{format(new Date(date), 'MMM dd, yyyy')}</td>
      <td><span className={`badge ${type === 'INCOME' ? 'badge-success' : 'badge-danger'}`}>{category}</span></td>
      <td style={{ color: 'var(--text-secondary)' }}>
        <div>{description || '-'}</div>
        {attachmentLink && (
          <a href={attachmentLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', color: 'var(--accent-color)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '4px' }}>
            <ExternalLink size={12} /> Invoice
          </a>
        )}
      </td>
      <td className="text-right" style={{ color: type === 'INCOME' ? 'var(--success)' : 'var(--danger)', fontWeight: 600 }}>
        {type === 'INCOME' ? '+' : '-'}${transaction.amount.toFixed(2)}
      </td>
      <td className="text-right">
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-secondary"
            style={{ padding: '0.4rem' }}
            title="Edit transaction"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={async () => {
              if (confirm('Are you sure you want to delete this transaction?')) {
                await onDelete(transaction.id)
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
