"use client"

import { useState } from "react"
import Input from "doplo/input"
import Button from "doplo/button"
import { submitEmail } from "../../app/actions/submit-email"

export default function EmailCollector() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData()
    formData.append("email", email)

    const result = await submitEmail(formData)


    if (result.error) {
      return
      } else if (result.success) {
        setEmail("")
      }
    setIsSubmitting(false)
  }

  return (
            <form 
              className="flex flex-col md:flex-row  md:items-center gap-2"
              onSubmit={(e) => { void handleSubmit(e); }}  
            >
                <Input
                  className="gap-4 bg-zinc-900 w-fit py-1.5 px-3 text-zinc-100 rounded-md  min-w-full md:min-w-60"
                  onChange={(e) => {setEmail(e.target.value)}}
                  placeholder="Enter your email"
                  required
                  type="email"
                  value={email}
                />
                <Button 
                  className="text-zinc-900 bg-zinc-100 py-1.5 px-3 rounded-md font-semibold" 
                  disabled={isSubmitting}
                  type="submit"  
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
            </form>
  )
}

