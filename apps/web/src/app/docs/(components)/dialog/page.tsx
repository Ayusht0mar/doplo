import { Dialog, DialogCloser, DialogContent, DialogDescription, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from "doplo/dialog";
import ComponentsPage from "../../../../components/docs/components-page";
import { X } from "lucide-react";
import { Button } from "doplo/button";
import { Input } from "doplo/input";
import { Textarea } from "doplo/textarea";

const TextareaPage = () => {
    return (
        <div className="w-full">
        <ComponentsPage 
            title="Dialog" 
            description="Display an Dialog"
            
            component={
                <div>
                    <Dialog>
                        <DialogTrigger> <Button>Click to open Dialog</Button></DialogTrigger>
                        <DialogOverlay>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Title</DialogTitle>
                                    <DialogDescription>Description for the dialog</DialogDescription>
                                </DialogHeader>
                                    <div className="flex flex-col gap-2">
                                        <Input placeholder="Type here..."/>
                                        <Textarea placeholder="Type here..."/>
                                    </div>
                                    <Button className="w-full">Submit</Button>
                                
                                <DialogCloser>
                                    <X className="text-neutral-600"/>
                                </DialogCloser>
                            </DialogContent>
                        </DialogOverlay>
                    </Dialog>
                </div>
            }

            elementImport='import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "doplo/dialog"'
            elementBody={`
                        <Dialog>
                            <DialogTrigger> <Button>Click to open Dialog</Button></DialogTrigger>
                            <DialogOverlay>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Title</DialogTitle>
                                        <DialogDescription>Description for the dialog</DialogDescription>
                                    </DialogHeader>
                                        <div className="flex flex-col gap-2">
                                            <Input placeholder="Type here..."/>
                                            <Textarea placeholder="Type here..."/>
                                        </div>
                                        <Button className="w-full">Submit</Button>
                                    
                                    <DialogCloser>
                                        <X className="text-neutral-600"/>
                                    </DialogCloser>
                                </DialogContent>
                            </DialogOverlay>
                        </Dialog>
                `}
            structureImgSrc="../../../../docs/dialog-structure.svg"
            structureImgAspectRatio="aspect-[4/3]"
            structureList={
                <ul className="list-disc list-inside space-y-1 mt-2 text-neutral-500">
                    <li><span className="text-neutral-200">Dialog </span>: Tag for Dialog.</li>
                    <li><span className="text-neutral-200">Dialog Trigger </span>: Tag for Dialog Trigger, for opening the Dialog.</li>
                    <li><span className="text-neutral-200">Dialog  Overlay</span>: Tag for Dialog Overlay, which includes the Dialog background.</li>
                    <li><span className="text-neutral-200">Dialog Content</span>: Tag for Dialog Content, which is the main content of the Dialog.</li>
                    <li><span className="text-neutral-200">Dialog Header</span>: Tag for Dialog Header, which includes the Dialog Title and Description.</li>
                    <li><span className="text-neutral-200">Dialog Title</span>: Tag for Dialog Title.</li>
                    <li><span className="text-neutral-200">Dialog Description</span>: Tag for Dialog Description.</li>
                    <li><span className="text-neutral-200">Dialog Closer</span>: Tag for Dialog Closer, for  closing the Dialog.</li>
                    <li><span className="text-neutral-200">Children</span>: Content inside the tags.</li>
                </ul>
            }
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
 
export default TextareaPage;