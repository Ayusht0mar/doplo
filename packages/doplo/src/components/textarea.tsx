import * as React from "react"
import { cn } from "../lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(({className , ...props}, ref ) => {
    return ( 
       <textarea className={cn(" rounded py-1.5 px-3 focus:outline-none focus:ring-0 text-black", className)} ref={ref} {...props} />
     );
});
Textarea.displayName = "Textarea"; // for debugging