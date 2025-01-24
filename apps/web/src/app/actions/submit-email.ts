"use server"

import { db } from "../../lib/db"

export async function submitEmail(formData: FormData) {
  const email = formData.get("email");

  if (typeof email !== "string" || email.trim() === "") {
    return { error: "Email is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Invalid email format" };
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
