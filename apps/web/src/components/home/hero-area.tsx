import { ArrowRight} from "lucide-react";
import Image from "next/image";
import CopyToClipboardComponent from "../copy-to-clipboard";
import Link from "next/link";

function HeroArea () {
    
    return ( 
        <div className="w-[94vw] max-w-7xl mx-auto bg-[#0C0C0C] rounded-2xl border border-[#171717] py-12 lg:py-24 px-4 lg:px-12 ">
            <div className="flex items-end lg:gap-8">
                    <div className="space-y-4">
                        <p className="uppercase text-xs leading-none bg-black border w-fit py-1.5 px-3 rounded-full text-[#C0C0C0] border-zinc-800">React Components</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-balance">The Library for React User Interfaces</h1>
                        <p className="text-[#C0C0C0] text-balance">Install doplo and get the UI components with basic design. Customize the style according to you need. Save time of building components and focus on the core of your app.</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex items-center gap-4 bg-zinc-900 w-fit py-1.5 px-3 text-zinc-100 rounded-md">
                                <p>npm install doplo</p>
                                <CopyToClipboardComponent textToCopy="npm install doplo"/>
                            </div>
                            <Link className="bg-blue-700 font-semibold tracking-wider py-1.5 px-3 rounded-md w-fit" href="/docs">
                                Get Started
                            </Link>
                        </div> 
                    </div>
                    <div className="flex flex-col gap-2 items-end max-w-[360px]">
                        {/* <p className="text-nowrap text-[#C0C0C0]">Used by developers from</p>
                        <div className="border border-[#171717] h-12 rounded  bg-black w-full">

                        </div> */}
                    </div>
                </div>  
                <div className="flex flex-col gap-12 border-t border-t-[#171717] mt-20 pt-20">
                    <h3 className=" text-nowrap text-2xl font-semibold text-center">Never Start from Zero</h3>
                    <div className="flex flex-col md:flex-row items-center w-full">
                        <div className="border border-[#232323] rounded-2xl p-4">
                            <p className="mb-4 text-center text-[#C0C0C0]">Start with our components</p>
                            <div className="relative w-full ">
                                <Image
                                    alt="Start component"
                                    height={500}
                                    src="/hero/start-component.svg"
                                    width={500}
                                />
                            </div>
                        </div>
                        <div className="h-full flex items-center justify-center rotate-90">
                            <ArrowRight className="text-neutral-600" size={48} />
                        </div>
                        <div className=" border border-[#232323] rounded-2xl p-4" >
                            <p className="mb-4 text-center text-[#C0C0C0]">Build whatever you like</p>
                            <div className="relative">
                                <Image
                                    alt="End component"
                                    width={500}
                                    src="/hero/end-component.svg"
                                    height={500}
                                />
                            </div>                        
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-12 border-t border-t-[#171717] mt-20 pt-20">
                    <h3 className=" text-nowrap text-2xl font-semibold">Explore Components</h3>
                    <div className=" w-full border border-[#232323] rounded-md flex flex-wrap gap-3 p-6 text-[#C0C0C0]">
                        <a href="/docs/badge" className="bg-black border border-zinc-800 py-1 px-3 rounded">Badge</a>
                        <a href="/docs/button" className="bg-black border border-zinc-800 py-1 px-3 rounded">Button</a>
                        <a href="/docs/card" className="bg-black border border-zinc-800 py-1 px-3 rounded">Card</a>
                        <a href="/docs/dialog" className="bg-black border border-zinc-800 py-1 px-3 rounded">Dialog</a>
                        <a href="/docs/input" className="bg-black border border-zinc-800 py-1 px-3 rounded">Input</a>
                        <a href="/docs/textarea" className="bg-black border border-zinc-800 py-1 px-3 rounded">Textarea</a>          
                    </div>
                </div>
            </div>      
    );
}
 
export default HeroArea;