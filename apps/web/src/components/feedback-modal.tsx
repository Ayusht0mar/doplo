"use client";

import Button from "doplo/button";
import { useState } from "react";
import Textarea from "doplo/textarea";
import { submitFeedback } from "../app/actions/submit-feedback";

function FeedbackModal(): JSX.Element {
    const [open, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const formData = new FormData();
        formData.append("message", message);
    
        const result = await submitFeedback(formData);
    
        if (result.error) {
            setIsOpen(false);
        } else if (result.success) {
          setMessage("");
        }
        setIsSubmitting(false);
    };


    return ( 
        <div>
            <Button
                className="flex items-center gap-4 bg-zinc-900 w-fit py-1.5 px-3 text-zinc-100 rounded-md"
                onClick={() => {setIsOpen(true)}}
            >
                Write feedback or request a component
            </Button>
            {open && (
                <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-zinc-950 flex flex-col gap-4 p-4 w-[92vw] max-w-lg rounded-md border border-[#232323]">
                        <div className="space-y-1.5">
                            <h1 className="text-xl font-semibold text-neutral-300">Leave feedback</h1>
                            <p className="text-neutral-400">
                                I&apos;d like to know which component I should add next or where I can improve the experience.
                            </p>
                        </div>

                        <form className="flex flex-col gap-4" onSubmit={(e) => { void handleSubmit(e); }} >
                        <Textarea
                                className="p-2 bg-zinc-900 text-zinc-100"
                                onChange={(e) => {setMessage(e.target.value)}}
                                placeholder="Your feedback"
                                required
                                rows={4}
                                value={message}
                            />
                            <div className="flex gap-4 justify-end">
                                <Button
                                    className="bg-zinc-950 border border-zinc-800 text-zinc-500"
                                    disabled={isSubmitting}
                                    onClick={() => { setIsOpen(false); }} 
                                >
                                    Cancel
                                </Button>
                                <Button
                                    disabled={isSubmitting}
                                    type="submit"
                                >
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
