import { Image as ImageIcon, ExternalLink } from 'lucide-react'

export default function PhotosPage() {
  // Replace this URL with the actual URL of the self-hosted Immich instance on the VM
  const immichUrl = process.env.NEXT_PUBLIC_IMMICH_URL || "http://152.67.103.169:2283"

  return (
    <div style={{ height: 'calc(100vh - 5rem)', display: 'flex', flexDirection: 'column' }}>
      <header className="flex-between mb-4">
        <div>
          <h1>Photos & Media</h1>
          <p>Managed securely via Immich. Tag by venue, band member, and more.</p>
        </div>
        <a href={immichUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Open Immich Fullscreen <ExternalLink size={16} />
        </a>
      </header>

      <div className="glass-panel" style={{ flex: 1, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1rem', borderBottom: '1px solid var(--panel-border)', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.2)' }}>
          <ImageIcon size={18} className="text-accent" />
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Connected to: <strong>{immichUrl}</strong></span>
        </div>
        <iframe 
          src={immichUrl}
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Immich Photo Manager"
          sandbox="allow-same-origin allow-scripts allow-forms"
        />
      </div>
    </div>
  )
}
