"use server"

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function addGig(formData: FormData) {
  const dateStr = formData.get('date') as string
  const venue = formData.get('venue') as string
  const notes = formData.get('notes') as string

  if (!dateStr || !venue) return

  const date = new Date(dateStr)

  const gig = await prisma.setlist.create({
    data: {
      date,
      venue,
      notes,
    }
  })

  revalidatePath('/gigs')
  redirect(`/gigs/${gig.id}`)
}

export async function deleteGig(id: string) {
  await prisma.setlist.delete({ where: { id } })
  revalidatePath('/gigs')
}
