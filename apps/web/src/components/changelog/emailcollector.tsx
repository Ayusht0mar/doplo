"use client"

import { useState } from "react"
import { submitEmail } from "../../app/actions/submit-email"
import Input from "doplo/input"
import Button from "doplo/button"

export default function EmailCollector() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("email", email)

    const result = await submitEmail(formData)


    setIsSubmitting(false)
  }

  return (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row  md:items-center gap-2">
                <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="gap-4 bg-zinc-900 w-fit py-1.5 px-3 text-zinc-100 rounded-md  min-w-full md:min-w-60"
                />
                <Button type="submit" className="text-zinc-900 bg-zinc-100 py-1.5 px-3 rounded-md font-semibold" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
            </form>
  )
}

