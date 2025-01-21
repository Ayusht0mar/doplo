"use server"

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function submitFeedback(formData: FormData) {
  const message = formData.get("message") as string

  if (!message) {
    return { error: "Email and message are required" }
  }

  try {
    await prisma.feedback.create({
      data: { message },
    })
    return { success: "Feedback submitted successfully" }
  } catch (error) {
    console.error("Error submitting feedback:", error)
    return { error: "Failed to submit feedback" }
  }
}

