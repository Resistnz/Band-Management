"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Music, DollarSign, Target, Image as ImageIcon, Settings, Calendar } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Gigs', path: '/gigs', icon: Calendar },
    { name: 'Songs & Setlists', path: '/songs', icon: Music },
    { name: 'Finances', path: '/finances', icon: DollarSign },
    { name: 'Roadmap', path: '/roadmap', icon: Target },
    { name: 'Photos (Immich)', path: '/photos', icon: ImageIcon },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Link href="/" className="sidebar-logo">
          <Music size={28} color="var(--accent-color)" />
          <span>BandHQ</span>
        </Link>
      </div>
      
      <nav className="nav-links">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
          return (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="sidebar-footer">
        <Link href="/settings" className="nav-link">
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  )
}
