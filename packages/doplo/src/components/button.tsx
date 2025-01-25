import * as React from "react"
import { cn } from "../lib/utils";

export const Button = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(({className , type , children, ...props} , ref ) => {
    return ( 
       <button className={cn("bg-neutral-100 text-neutral-900 py-1.5 px-3 rounded font-semibold w-fit", className)} ref={ref} type={type} {...props} >{children}</button>
     );
});
Button.displayName = "Button"; // for debugging