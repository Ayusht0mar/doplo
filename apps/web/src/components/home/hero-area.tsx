import CopyToClipboard from "../copy-to-clipboard";

const HeroArea = () => {


    return ( 
        <div>
                <div className="flex flex-col w-[94vw] max-w-7xl mx-auto min-h-screen gap-8 bg-[#0C0C0C] rounded-3xl border border-[#171717] ">
               
                    <div className="pt-12 lg:pt-24 pl-4 lg:pl-12 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-balance">The Simplest UI Library</h1>
                        <p className="text-[#C0C0C0] text-balance">You can use all the components with one command or you can just copy and paste components into your app. This hybrid approach allows you to build faster and on your own terms.</p>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex items-center gap-4 bg-zinc-900 w-fit py-1.5 px-3 text-zinc-100 rounded-md">
                                <p>npm install doplo</p>
                                <CopyToClipboard textToCopy="npm install doplo"/>
                            </div>
                            <a className="bg-blue-700 font-semibold tracking-wider py-1.5 px-3 rounded-md w-fit" href="/docs">
                                Quick Start
                            </a>
                        </div> 
                    </div>
                </div>    
            </div>      
    );
}
 
export default HeroArea;