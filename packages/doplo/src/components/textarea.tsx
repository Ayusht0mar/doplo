import * as React from "react"
import { cn } from "../lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(({className , ...props}, ref ) => {
    return ( 
       <textarea className={cn("[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:cursor-pointer [&::-webkit-scrollbar-track]:cursor-default [&::-webkit-scrollbar-track]:bg-neutral-200 [&::-webkit-scrollbar-thumb]:bg-neutral-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-800 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700 text-neutral-900 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 shadow invalid:border-red-500 invalid:text-red-600 focus:border-neutral-500 focus:outline focus:outline-neutral-500 focus:invalid:border-red-500 focus:invalid:outline-red-500 disabled:bg-none disabled:shadow-none disabled:border-neutral-200 disabled:placeholder:text-neutral-300 dark:disabled:border-neutral-800 dark:disabled:placeholder:text-neutral-700 dark:bg-neutral-950  dark:placeholder:text-neutral-500 rounded py-1.5 px-2", className)} ref={ref} {...props} />
     );
});
Textarea.displayName = "Textarea"; // for debugging