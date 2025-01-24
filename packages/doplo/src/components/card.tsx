import * as React from "react"
import { cn } from "../lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({className  , children, ...props} , ref ) => {
  return ( 
         <div className={cn("bg-neutral-100 shadow-sm rounded p-3", className)} ref={ref} {...props} >{children}</div>
   );
})
Card.displayName = "Card"


const CardHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({className  , children, ...props} , ref ) => {
  return ( 
         <div className={cn("space-y-1", className)} ref={ref} {...props} >{children}</div>
   );
})
CardHeader.displayName = "Card Header"

const CardTitle = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({className  , children, ...props} , ref ) => {
  return ( 
         <div className={cn(" text-neutral-950 text-3xl", className)} ref={ref} {...props} >{children}</div>
   );
})
CardTitle.displayName = "Card Title"

const CardDescription = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({className  , children, ...props} , ref ) => {
  return ( 
         <div className={cn("text-neutral-400", className)} ref={ref} {...props} >{children}</div>
   );
})
CardDescription.displayName = "Card Description"

const CardBody = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({className  , children, ...props} , ref ) => {
  return ( 
         <div className={cn(" text-neutral-900 my-4", className)} ref={ref} {...props} >{children}</div>
   );
})
CardBody.displayName = "Card Body"

const CardFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(({className  , children, ...props} , ref ) => {
  return ( 
         <div className={cn(" text-neutral-900 p-1.5", className)} ref={ref} {...props} >{children}</div>
   );
})
CardFooter.displayName = "Card Footer"


 
export {Card, CardHeader, CardTitle , CardDescription, CardBody, CardFooter};