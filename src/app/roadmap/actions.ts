"use server"

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function addRoadmapItem(formData: FormData) {
  const title = formData.get('title') as string
  const status = formData.get('status') as string

  if (!title || !status) return

  await prisma.roadmapItem.create({
    data: {
      title,
      status,
    }
  })

  revalidatePath('/roadmap')
}

export async function updateRoadmapStatus(id: string, status: string) {
  await prisma.roadmapItem.update({
    where: { id },
    data: { status }
  })
  revalidatePath('/roadmap')
}

export async function deleteRoadmapItem(id: string) {
  await prisma.roadmapItem.delete({ where: { id } })
  revalidatePath('/roadmap')
}
