"use client"
import Link from "next/link";
import { usePathname} from "next/navigation";
import clsx from "clsx";

const links = [
    {name: "Introduction", section: "Get Started", href: "/docs"},
    {name: "Installation", section: "Get Started", href: "/docs/installation"},
    {name: "Theming", section: "Get Started", href: "/docs/theming"},
    {name: "Badge", section: "Components", href: "/docs/badge"},
    {name: "Button", section: "Components", href: "/docs/button"},
    {name: "Card", section: "Components", href: "/docs/card"},
    {name: "Dialog", section: "Components", href: "/docs/dialog"},
    {name: "Input", section: "Components", href: "/docs/input"},
    {name: "Textarea", section: "Components", href: "/docs/textarea"},   
]

const DocsSidebar = () => {

    const pathname = usePathname();

    return (

        <div className=" hidden md:block w-60 p-4 border-r border-neutral-900">
            <h1 className="text-neutral-100 font-medium">Get Started</h1>

            <ul className="flex flex-col pt-1">

                {links.filter(link => link.section === "Get Started").map(({name, href}) => (
                    <Link className={clsx("py-1", pathname === href ? "text-neutral-50 pl-2" : "text-neutral-500 hover:text-neutral-300")} key={href} href={href}>{name}</Link>
                ))}                
            </ul>
            <p className="text-neutral-100 font-medium mt-2">All components</p>
            <ul className="text-neutral-500 flex flex-col pt-1">

                {links.filter(link => link.section === "Components").map(({name, href}) => (
                    <Link className={`py-1 ${pathname === href ? "text-neutral-50 pl-2" : "text-neutral-500 hover:text-neutral-300"}`} key={href} href={href}>{name}</Link>
                ))}                
            </ul>

        </div>
    );
}
 
export default DocsSidebar;