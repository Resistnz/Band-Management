"use server"

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function addTransaction(formData: FormData) {
  const type = formData.get('type') as string
  const amountStr = formData.get('amount') as string
  const category = formData.get('category') as string
  const description = formData.get('description') as string
  const dateStr = formData.get('date') as string
  const attachmentLink = formData.get('attachmentLink') as string

  if (!amountStr || !type || !category || !dateStr) return

  const amount = parseFloat(amountStr)
  const date = new Date(dateStr)

  await prisma.transaction.create({
    data: {
      type,
      amount,
      category,
      description,
      date,
      attachmentLink: attachmentLink || null,
    }
  })

  revalidatePath('/finances')
}

export async function deleteTransaction(id: string) {
  await prisma.transaction.delete({ where: { id } })
  revalidatePath('/finances')
}

export async function updateTransaction(id: string, data: {
  date: string
  amount: number
  type: string
  category: string
  description: string | null
  attachmentLink: string | null
}) {
  await prisma.transaction.update({
    where: { id },
    data: {
      date: new Date(data.date),
      amount: data.amount,
      type: data.type,
      category: data.category,
      description: data.description,
      attachmentLink: data.attachmentLink,
    }
  })
  revalidatePath('/finances')
}
