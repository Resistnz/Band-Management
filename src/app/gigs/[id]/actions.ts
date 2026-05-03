"use server"

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function addSongToGig(gigId: string, formData: FormData) {
  const songId = formData.get('songId') as string
  if (!songId) return

  const currentSongs = await prisma.setlistSong.findMany({
    where: { setlistId: gigId },
    orderBy: { position: 'desc' },
    take: 1
  })
  
  const position = currentSongs.length > 0 ? currentSongs[0].position + 1 : 1

  await prisma.setlistSong.create({
    data: {
      setlistId: gigId,
      songId,
      position
    }
  })

  revalidatePath(`/gigs/${gigId}`)
}

export async function removeSongFromGig(gigId: string, setlistSongId: string) {
  await prisma.setlistSong.delete({ where: { id: setlistSongId } })
  revalidatePath(`/gigs/${gigId}`)
}

export async function saveSingleRating(gigId: string, setlistSongId: string, rating: number | null, feedback: string) {
  await prisma.setlistSong.update({
    where: { id: setlistSongId },
    data: { rating, feedback }
  })
  revalidatePath(`/gigs/${gigId}`)
}

export async function saveGigNotes(gigId: string, formData: FormData) {
  const goodNotes = formData.get('goodNotes') as string
  const badNotes = formData.get('badNotes') as string
  const interestingNotes = formData.get('interestingNotes') as string

  await prisma.setlist.update({
    where: { id: gigId },
    data: {
      goodNotes,
      badNotes,
      interestingNotes
    }
  })

  revalidatePath(`/gigs/${gigId}`)
}
