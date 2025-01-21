"use client"

import Button from "doplo/button";
import { useState } from "react"
import { submitFeedback } from "../app/actions/submit-feedback";
import Textarea from "doplo/textarea";

const FeedbackModal = () => {
    const [open, setIsOpen] = useState(false);
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
    
        const formData = new FormData()
        formData.append("message", message)
    
        const result = await submitFeedback(formData)
    
        // if (result.error) {
        //   toast({
        //     title: "Error",
        //     description: result.error,
        //     variant: "destructive",
        //   })
        // } else if (result.success) {
        //   toast({
        //     title: "Success",
        //     description: result.success,
        //   })
        //   setEmail("")
        //   setMessage("")
        // }
    
        setIsSubmitting(false)
      }

    const closeModal = () => {
        setIsOpen(false);
    }

    return ( 
        <div>
            <Button className="flex items-center gap-4 bg-zinc-900 w-fit py-1.5 px-3 text-zinc-100 rounded-md" onClick={() => setIsOpen(true)}>Write feedback or request a component</Button>
            {open && (
                <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-zinc-950 flex flex-col gap-4 p-4 w-[92vw] max-w-lg rounded-md border border-[#232323]">
                        <div className="space-y-1.5">
                            <h1 className="text-xl font-semibold text-neutral-300">
                              Leave feedback
                            </h1>
                            <p className="text-neutral-400">I'd like to know which component I should add next or where I can improve the experience.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <Textarea
                                placeholder="Your feedback"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows={4}
                                className="p-2 bg-zinc-900"
                            />
                            <div className="flex gap-4 justify-end">
                              <Button onClick={closeModal} className="bg-zinc-950 border border-zinc-800 text-zinc-500"  disabled={isSubmitting}>
                                Cancel
                              </Button>
                              <Button type="submit"  disabled={isSubmitting}>
                                {isSubmitting ? "Submitting..." : "Submit"}
                              </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
     );
}
 
export default FeedbackModal;