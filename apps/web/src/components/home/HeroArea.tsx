import Image from "next/image";
import CopyToClipboard from "../CopytoClipboard";
``
const HeroArea = () => {


    return ( 
        <div>
            <div className="absolute top-0 z-[-2] min-h-svh w-screen bg-[#000000] bg-[radial-gradient(#ffffff20_1px,#000_1px)] bg-[size:20px_20px]">   
                <div className="flex flex-col w-[94vw] mx-auto justify-center items-center h-svh gap-8">
                    <div className="w-24 h-24 md:w-40 md:h-40 relative">
                        <Image
                            src="/doplosymbollogo.svg"
                            alt="Doplo Symbol log"
                            fill
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="w-40 h-10 relative mx-auto">
                            <Image
                                src="/doplotextlogo.svg"
                                alt="Doplo Text log"
                                fill
                            />
                        </div>
                        <p className="font-semibold text-2xl text-balance text-center">
                            A Modern UI Library for React.
                        </p>
                        <div className="flex gap-4 items-center justify-center">
                            <div className="flex items-center gap-4 bg-zinc-900 w-fit py-1.5 px-3 text-zinc-400 rounded-md">
                                <p>npm install doplo</p>
                                <CopyToClipboard textToCopy="npm install doplo"/>
                            </div>
                            <a className="bg-blue-700 font-semibold tracking-wider py-1.5 px-3 rounded-md" href="/docs">
                                Quick Start
                            </a>
                        </div> 
                    </div>

                </div>    
            </div>      
            
        </div>
     );
}
 
export default HeroArea;