import * as React from "react"
import { cn } from "../lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({className , type , ...props} , ref ) => {
    return ( 
       <input className={cn("rounded text-black placeholder:text-neutral-900 dark:bg-neutral-900 dark:placeholder:text-neutral-300 dark:text-white py-1.5 px-3 focus:outline-none", className)} ref={ref} type={type} {...props} />
     );
});
Input.displayName = "Input"; // for debugging
