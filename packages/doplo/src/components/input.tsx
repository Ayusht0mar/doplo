import * as React from "react"
import { cn } from "../lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({className , type , ...props} , ref ) => {
    return ( 
       <input className={cn("text-neutral-900 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 invalid:border-rose-500 invalid:text-rose-600 focus:border-neutral-500 focus:outline focus:outline-neutral-500 focus:invalid:border-rose-500 focus:invalid:outline-rose-500 disabled:bg-none disabled:shadow-none disabled:border-neutral-200 disabled:placeholder:text-neutral-300 dark:disabled:border-neutral-800 dark:disabled:placeholder:text-neutral-700 dark:bg-neutral-950  dark:placeholder:text-neutral-500 rounded py-1.5 px-2 shadow", className)} ref={ref} type={type} {...props} />
     );
});
Input.displayName = "Input"; // for debugging
