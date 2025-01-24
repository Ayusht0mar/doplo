"use server"

import { db } from "../../lib/db"



export async function submitFeedback(formData: FormData) {
  const message = formData.get("message") as string

  if (typeof message !== "string" || message.trim() === "") {
    return { error: "Email is required and must be a valid string" };
  }

  if (!message) {
    return { error: "Email and message are required" }
  }

  try {
    await db.feedback.create({
      data: { message },
    })
    return { success: "Feedback submitted successfully" }
  } catch (error) {
    return { error: "Failed to submit feedback" }
  }
}

