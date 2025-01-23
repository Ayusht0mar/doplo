import CopyToClipboardComponent from "../copy-to-clipboard";

const QuickStartContent = () => {
    return ( 
        <div className=" flex justify-between">
            <div className=" md:px-4">
            <h1 className="text-3xl font-semibold">Quick start</h1>
            <p className="text-[#C0C0C0]" >Doplo is a simple react component library with an hybrid approach. Open Source</p>

            <div className="mt-10">
            <p className="text-[#C0C0C0]">I believe to use the components the way I want and this library is being build on that exact approach.</p>
            
            <p className="text-lg my-4">But, what is the hybrid approach?</p>
            <p className="text-[#C0C0C0] leading-loose">Use can install doplo as an dependency and style the components the way you want. <br />  Don&apos;t want to download the dependecy? No Problem. <br /> Just copy paste the comonent from our documentation and use it the way you want.</p>      
            </div>

                <div className="my-10 space-y-2">
                    <h2 className="text-xl font-semibold">Installation</h2>
                    <div className="flex justify-between items-center gap-4 bg-zinc-900 py-3 px-6 text-zinc-100 rounded-md w-full">
                        <p>npm install doplo</p>
                        <CopyToClipboardComponent textToCopy="npm install doplo"/>
                    </div>
                </div>
            </div>
            <div className=" hidden md:block h-80">
                <div className="sticky top-1 border-l px-4 ml-4 w-60 h-min border-l-zinc-600">
                    <h4>On this page</h4>
                </div>
                <ul className="p-4 pl-8 text-[#C0C0C0] space-y-2">
                    <li>Installation</li>
                </ul>
            </div>
        </div>
     );
}

export default QuickStartContent;