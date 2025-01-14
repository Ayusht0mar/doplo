import { Github} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="flex sticky top-4 items-center justify-between w-[94vw] mx-auto max-w-7xl my-4 border border-[#171717] py-3 px-4 rounded-md bg-[#0A0A0A]/50 text-[#D4D4D4] backdrop-blur-md">
                <a href="/" className="flex gap-3 items-center">
                        <div className="w-8 h-8 relative">
                                <Image
                                    src="/doplosymbollogo.svg"
                                    alt="Doplo Symbol log"
                                    fill
                                />
                        </div>
                        <h1 className="font-semibold">Doplo</h1>
                </a>
                <div className="flex space-x-4">
                    <Link href="/docs">Documentation</Link>
                    <Link href="/showcase">Showcase</Link>
                    <Link href="/roadmap">Roadmap</Link>
                    <Link href="/changelog">Changelog</Link>                    
                </div>
                <a target="_blank" rel="noreferrer" href="https://github.com/Ayusht0mar/doplo">
                    <Github/>
                </a>
        </div>
     );
}
 
export default Navbar;