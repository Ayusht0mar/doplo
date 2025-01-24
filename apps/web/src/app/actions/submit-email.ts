"use server"

import { db } from "../../lib/db"


export async function submitEmail(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return { error: "Email is required" }
  }

  try {
    await db.email.create({
      data: { email },
    })
    return { success: "Email submitted successfully" }
  } catch (error) {
    return { error: "Failed to submit email" }
  }
}

