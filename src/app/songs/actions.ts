"use server"

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function addSong(formData: FormData) {
  const title = formData.get('title') as string
  const notes = formData.get('notes') as string

  if (!title) return

  await prisma.song.create({
    data: {
      title,
      notes,
    }
  })

  revalidatePath('/songs')
}

export async function deleteSong(id: string) {
  await prisma.song.delete({ where: { id } })
  revalidatePath('/songs')
}
