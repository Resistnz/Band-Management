"use server"

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function addSong(formData: FormData) {
  const title = formData.get('title') as string
  const notes = formData.get('notes') as string
  const isCover = formData.get('isCover') === 'on'
  const originalArtist = formData.get('originalArtist') as string
  const releaseYearStr = formData.get('releaseYear') as string
  
  const releaseYear = releaseYearStr ? parseInt(releaseYearStr, 10) : null

  if (!title) return

  await prisma.song.create({
    data: {
      title,
      notes,
      isCover,
      originalArtist: isCover && originalArtist ? originalArtist : null,
      releaseYear: isCover && releaseYear ? releaseYear : null,
    }
  })

  revalidatePath('/songs')
}

export async function deleteSong(id: string) {
  await prisma.song.delete({ where: { id } })
  revalidatePath('/songs')
}

export async function updateSongNotes(id: string, notes: string) {
  await prisma.song.update({
    where: { id },
    data: { notes }
  })
  revalidatePath('/songs')
}
