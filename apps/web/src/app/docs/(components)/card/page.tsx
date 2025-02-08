import { Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle } from "doplo/card";
import ComponentsPage from "../../../../components/docs/components-page";
import { Input } from "doplo/input";
import { Textarea } from "doplo/textarea";
import { Button } from "doplo/button";

const CardPage = () => {
    return ( 
        <div className="w-full">
        <ComponentsPage 
            title="Card" 
            description="Display an Card"
            
            component={
                <Card>
                    <CardHeader>
                        <CardTitle> Title </CardTitle>
                        <CardDescription > Description </CardDescription>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-2">
                            <Input type="email" placeholder="Email" className="w-full"/>
                            <Textarea placeholder="Textarea" className="w-full"/>
                    </CardBody>
                    <CardFooter>
                        <Button className="w-full"> Submit </Button>
                    </CardFooter>
                </Card>
            }

            elementImport='import { Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle } from "doplo/card"'
            elementBody={`<Card>
                            <CardHeader>
                                <CardTitle> Title </CardTitle>
                                <CardDescription> Description </CardDescription>
                            </CardHeader>
                            <CardBody className="flex flex-col gap-2">
                                <Input type="email" placeholder="Input" className="w-full"/>
                                <Textarea placeholder="Textarea" className="w-full"/>
                            </CardBody>
                            <CardFooter>
                                <Button className="w-full"> Submit </Button>
                            </CardFooter>
                            </Card>`
                        }
            structureList={
                <ul className="list-disc list-inside space-y-1 mt-2 text-neutral-500">
                    <li><span className="text-neutral-200">Card</span>: Tag for Card.</li>
                    <li><span className="text-neutral-200">Card Header</span>: Tag for Card Header.</li>
                    <li><span className="text-neutral-200">Card Title</span>: Tag for Card Title.</li>
                    <li><span className="text-neutral-200">Card Description</span>: Tag for Card Description.</li>
                    <li><span className="text-neutral-200">Card Body</span>: Tag for Card Body.</li>
                    <li><span className="text-neutral-200">Card Footer</span>: Tag for Card Footer.</li>
                    <li><span className="text-neutral-200">Children</span>: Content in all the tags.</li>
                </ul>
            }
            structureImgSrc="../../../../docs/card-structure.svg"
            structureImgAspectRatio="aspect-[4/3]"
            exampleComponents={
                <div className="bg-neutral-950 border border-neutral-900 p-4 rounded-lg">
                    Working on it.
                </div>
            }

            props={[ 
                {
                    name: "props?",
                    type: "-",
                    description: "All props of HTML div element",
                    default: "-"
                },
                {
                    name: "ref?",
                    type: "-",
                    description: "ref of the div element",
                    default: "-"
                }
            ]}
            />
    </div>     );
}
 
export default CardPage;