"use client"

import { useState } from "react"
import { submitEmail } from "../../app/actions/submit-email"
import { Input } from "doplo/input"
import { Button } from "doplo/button"


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
                  onChange={(e) => {setEmail(e.target.value)}}
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                />
                <Button 
                  disabled={isSubmitting}
                  type="submit"  
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
            </form>
  )
}

