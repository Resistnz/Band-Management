'use client'

import { useState } from 'react'
import { login } from './actions'
import { Music, Lock } from 'lucide-react'

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const result = await login(formData)

    if (result?.error) {
      setError(result.error)
      setIsSubmitting(false)
    }
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      backgroundColor: 'var(--background-dark, #0d0f17)',
      color: '#fff',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'var(--card-bg, #161a29)',
        border: '1px solid var(--border-color, #2a2f45)',
        borderRadius: '12px',
        padding: '40px 32px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'rgba(99, 102, 241, 0.15)',
          marginBottom: '16px'
        }}>
          <Music size={32} color="#6366f1" />
        </div>

        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>BandHQ</h1>
        <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '28px' }}>
          Enter the band password to access stats & dashboard
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ position: 'relative' }}>
            <Lock size={18} color="#64748b" style={{ position: 'absolute', left: '14px', top: '14px' }} />
            <input
              type="password"
              name="password"
              placeholder="Band Password"
              required
              style={{
                width: '100%',
                padding: '12px 14px 12px 42px',
                borderRadius: '8px',
                border: '1px solid var(--border-color, #2a2f45)',
                backgroundColor: '#0f121d',
                color: '#fff',
                fontSize: '15px',
                outline: 'none'
              }}
            />
          </div>

          {error && (
            <div style={{
              color: '#f87171',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              padding: '10px',
              borderRadius: '6px',
              fontSize: '13px'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              backgroundColor: '#6366f1',
              color: '#fff',
              fontWeight: '600',
              fontSize: '15px',
              border: 'none',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              transition: 'background-color 0.2s'
            }}
          >
            {isSubmitting ? 'Verifying...' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  )
}
