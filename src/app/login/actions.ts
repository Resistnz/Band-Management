"use server"

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const password = formData.get('password') as string
  const expectedPassword = process.env.BAND_PASSWORD || 'bandhq2026'

  if (password === expectedPassword) {
    const cookieStore = await cookies()
    cookieStore.set('bandhq_auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 90, // 90 days
    })
    redirect('/')
  }

  return { error: 'Incorrect password. Please try again.' }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('bandhq_auth')
  redirect('/login')
}
