import prisma from '@/lib/prisma'
import { addRoadmapItem, updateRoadmapStatus, deleteRoadmapItem } from './actions'
import { Plus, ChevronRight, ChevronLeft, Trash2 } from 'lucide-react'

export default async function RoadmapPage() {
  const items = await prisma.roadmapItem.findMany({
    orderBy: { createdAt: 'desc' }
  })

  const columns = [
    { id: 'TODO', title: 'To Do', color: 'var(--text-primary)' },
    { id: 'IN_PROGRESS', title: 'In Progress', color: 'var(--warning)' },
    { id: 'DONE', title: 'Done', color: 'var(--success)' },
  ]

  return (
    <div>
      <header className="flex-between mb-6">
        <div>
          <h1>Roadmap</h1>
          <p>Plan your band's goals, recordings, and tours.</p>
        </div>
      </header>

      <div className="glass-panel mb-6">
        <form action={addRoadmapItem} className="flex-between gap-4">
          <input type="text" name="title" className="input-field" required placeholder="New goal (e.g., Record Demo, Book Summer Tour)..." />
          <input type="hidden" name="status" value="TODO" />
          <button type="submit" className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
            <Plus size={18} /> Add Goal
          </button>
        </form>
      </div>

      <div className="grid grid-cols-3">
        {columns.map((col, index) => {
          const colItems = items.filter(item => item.status === col.id)
          return (
            <div key={col.id} className="glass-panel" style={{ background: 'rgba(20, 20, 25, 0.4)', borderTop: `3px solid ${col.color}` }}>
              <h3 className="mb-4 flex-between" style={{ color: col.color }}>
                {col.title} <span className="badge" style={{ background: 'rgba(255,255,255,0.1)' }}>{colItems.length}</span>
              </h3>
              
              <div className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {colItems.length === 0 ? (
                  <p className="text-center" style={{ fontSize: '0.875rem' }}>No items.</p>
                ) : colItems.map(item => (
                  <div key={item.id} className="glass-panel" style={{ padding: '1rem', background: 'var(--panel-bg)' }}>
                    <div className="mb-4" style={{ fontWeight: 500 }}>{item.title}</div>
                    
                    <div className="flex-between">
                      <div className="flex gap-2" style={{ display: 'flex', gap: '0.25rem' }}>
                        {index > 0 && (
                          <form action={async () => {
                            "use server"
                            await updateRoadmapStatus(item.id, columns[index - 1].id)
                          }}>
                            <button type="submit" className="btn btn-secondary" style={{ padding: '0.25rem' }} title="Move left">
                              <ChevronLeft size={16} />
                            </button>
                          </form>
                        )}
                        {index < columns.length - 1 && (
                          <form action={async () => {
                            "use server"
                            await updateRoadmapStatus(item.id, columns[index + 1].id)
                          }}>
                            <button type="submit" className="btn btn-secondary" style={{ padding: '0.25rem' }} title="Move right">
                              <ChevronRight size={16} />
                            </button>
                          </form>
                        )}
                      </div>
                      
                      <form action={async () => {
                        "use server"
                        await deleteRoadmapItem(item.id)
                      }}>
                        <button type="submit" className="btn btn-secondary" style={{ padding: '0.25rem', color: 'var(--danger)', border: 'none' }} title="Delete">
                          <Trash2 size={16} />
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
