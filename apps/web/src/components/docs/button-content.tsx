import Button from "doplo/button";
import Image from "next/image";

const ButtonContent = () => {
    return ( 
        <>
            <div className="flex w-full flex-col">
            <h1 className="text-3xl font-semibold">Button</h1>
            <p className="text-[#C0C0C0]" >Displays a button.</p>

            <Button className="mt-10">Button</Button>
        
            <div className="my-10 space-y-2 w-full">
                 <h2 className="text-xl font-semibold">Usage</h2>
                 <p className="text-[#C0C0C0]">Import the elements:</p>
                 <div className="bg-neutral-900 p-3 text-neutral-100 rounded-md w-full">
                        <p> import &#123; Button &#125; from &quot;doplo/button&quot;; </p>
                 </div>

                 <p className="text-[#C0C0C0] pt-4">Use in body:</p>

                 <div className="bg-neutral-900 p-3 text-neutral-100 rounded-md w-full">
                    <p>   
                            &lt;Button&gt; Button &lt;/Button&gt;
                    </p>
                 </div>
             </div>
        
            <div className="my-10 space-y-2">
                <h2 className="text-xl font-semibold">Structure</h2>
                <p className="text-[#C0C0C0]">A Button component contain:</p>
                <ul className="list-disc list-inside text-[#C0C0C0]">
                        <li>
                        <span className="text-neutral-50">Button</span> : The styled button.
                        </li>
                    </ul>
                <div className="aspect-[4/1.5] relative">
                    <Image
                        src="/docs/button-structure.svg"
                        alt="Button Structure"
                        fill
                    />
                </div>
            </div>


            </div>
            <div className="h-80">
                <div className="sticky top-1 border-l px-4 ml-4 w-60 h-min border-l-zinc-600">
                    <h4>On this page</h4>
                </div>
                <ul className="p-4 pl-8 text-[#C0C0C0] space-y-2">
                    <li>Usage</li>
                    <li>Structure</li>
                    <li>Examples</li>
                </ul>
            </div>
        </>
     );
}
 
export default ButtonContent;