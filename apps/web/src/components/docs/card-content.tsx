import Button from "doplo/button";
import {Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle} from "doplo/card";
import Input from "doplo/input";
import Image from "next/image";

const CardContent = () => {
    return ( 
        <>
            <div className="flex w-full flex-col">
            <h1 className="text-3xl font-semibold">Card</h1>
            <p className="text-[#C0C0C0]" >Displays a card with header, body, and footer.</p>

            <Card className="my-10 bg-neutral-100 p-3 max-w-96">
            <CardHeader>
                <CardTitle className="text-neutral-950">Sign In</CardTitle>
                <CardDescription>Welcome to doplo</CardDescription>
                </CardHeader>
                <CardBody className="flex flex-col gap-2">
                <Input className="text-neutral-900" placeholder="Enter your email"/>
                <Input className="text-neutral-900" placeholder="Enter Password"/>
            </CardBody>
            <CardFooter className="flex justify-end">
                    <Button className="bg-neutral-900 text-neutral-100">Sign In</Button>
            </CardFooter>
            </Card>
        
            <div className="my-10 space-y-2 w-full">
                 <h2 className="text-xl font-semibold">Usage</h2>
                 <p className="text-[#C0C0C0]">Import the elements:</p>
                 <div className="bg-neutral-900 p-3 text-neutral-100 rounded-md w-full">
                        <p> import &#123; Card, <br /> CardBody, <br /> CardDescription, <br /> CardFooter, <br /> CardHeader, <br /> CardTitle &#125; <br /> from &quot;doplo/card&quot;; </p>
                 </div>

                 <p className="text-[#C0C0C0] pt-4">Use in body:</p>

                 <div className="bg-neutral-900 p-3 text-neutral-100 rounded-md w-full">
                    <p>   
                            &lt;Card&gt;
                                <br />
                                    &lt;CardHeader&gt;
                                        <br />
                                            &lt;CardTitle&gt;Card Title&lt;/CardTitle&gt;
                                            <br />
                                            &lt;CardDescription&gt;Card Description&lt;/CardDescription&gt;
                                        <br />
                                    &lt;/CardHeader&gt;
                                    <br />
                                    &lt;CardBody&gt;
                                    <br />
                                    Card Body
                                        <br />
                                        &lt;/CardBody&gt;
                                        <br />
                                    &lt;CardFooter&gt;
                                        <br />
                                        Card Footer
                                        <br />
                                    &lt;/CardFooter&gt;
                                <br />
                            &lt;/Card&gt;
                    </p>
                 </div>
             </div>
        
            <div className="my-10 space-y-2">
                <h2 className="text-xl font-semibold">Structure</h2>
                <p className="text-[#C0C0C0]">A Card component contain:</p>
                <ul className="list-disc list-inside text-[#C0C0C0]">
                        <li>
                        <span className="text-neutral-50">Card Header</span> : The header for the card.
                        </li>
                        <li>
                            <span className="text-neutral-50">Card Title</span> : The title for the card.
                        </li>
                        <li>
                            <span className="text-neutral-50">Card Description</span> : The description for the card.
                        </li>
                        <li>
                            <span className="text-neutral-50">Card Body</span> : The body for the card.
                        </li>
                        <li>
                            <span className="text-neutral-50">Card Footer</span> : The footer for the card.
                        </li>
                    </ul>
                <div className="aspect-[4/3] relative">
                    <Image
                        src="/docs/card-structure.svg"
                        alt="Card Structure"
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
 
export default CardContent;