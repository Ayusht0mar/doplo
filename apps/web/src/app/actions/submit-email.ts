"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function submitEmail(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return { error: "Email is required" }
  }

  try {
    await prisma.email.create({
      data: { email },
    })
    return { success: "Email submitted successfully" }
  } catch (error) {
    console.error("Error submitting email:", error)
    return { error: "Failed to submit email" }
  }
}

