import Image from "next/image";
import CopyButton from "../copy-to-clipboard";
import { ReactElement } from "react";
import Link from "next/link";

interface Prop {
    name: string;
    type: string;
    description: string;
    default: string | number | "-";
  }

interface ComponentsPageProps {
    title : string;
    description?: string;
    component: ReactElement;
    elementImport : string;
    elementBody: string;
    structureImgSrc: string;
    structureList: ReactElement;
    structureImgAspectRatio: string;
    exampleComponents?: ReactElement;
    props?: Prop[];
}

const ComponentsPage = ({title, description, component, elementImport, elementBody, structureImgSrc, structureList, structureImgAspectRatio, exampleComponents, props} : ComponentsPageProps) => {
    return ( 
        <div className="flex w-full gap-4" >
            <div className="w-full flex flex-col gap-16">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-semibold text-neutral-100">{title}</h1>
                    <p className="text-neutral-400">{description}</p>
                </div>
                <div className="bg-neutral-950 border border-neutral-900 flex justify-center items-center min-h-40 py-5 rounded-lg ">
                    {component}
                </div>
                
                <div className="flex flex-col gap-2" id="usage">
                    <h4 className="text-xl font-semibold text-neutral-100">Usage</h4>
                    <p className="text-neutral-500">Import the elements:</p>
                    <div className=" flex justify-between items-start bg-neutral-900 rounded-lg p-3 text-neutral-200">
                        {elementImport}
                        <CopyButton textToCopy={elementImport}/>
                    </div>
                    <p className="text-neutral-500 mt-4">Use in body:</p>
                    <div className=" flex justify-between items-start bg-neutral-900 rounded-lg p-3 text-neutral-200 " style={{ whiteSpace: "pre-line" }}>
                        {elementBody}     
                        <CopyButton textToCopy={elementBody}/>
                    </div>

                </div>

                <div id="structure">
                    <h4 className="text-xl font-semibold text-neutral-100">Structure</h4>
                    <p className="text-neutral-500 mt-1"> A {title} component contains: </p>
                    {structureList}
                    <div className={`relative w-full flex justify-between items-center ${structureImgAspectRatio}`}>
                        <Image
                            src={structureImgSrc}
                            alt=""
                            fill
                        />
                    </div>
                </div>

                {props &&
                    <div>
                        <h4 className="text-xl font-semibold text-neutral-100">Props</h4>
                        <p className="text-neutral-500 mt-1"> Props that can be used in a {title} component: </p>
                        <div className="border border-neutral-800 rounded-lg mt-4">
                            <div className="grid grid-cols-5 bg-neutral-950 text-neutral-300 py-2 px-4 font-medium ">
                                <span>Name</span>
                                <span>Type</span>
                                <span className="col-span-2">Description</span>
                                <span>Default</span>
                            </div>
                                {props.map((prop, index) => (
                                    <div
                                        key={index}
                                        className="grid grid-cols-5 py-2 px-4 border-t border-neutral-800 text-neutral-400"
                                    >
                                        <span className="text-neutral-200">{prop.name}</span>
                                        <span>{prop.type}</span>
                                        <span className="col-span-2">{prop.description}</span>
                                        <span>{prop.default}</span>
                                    </div>
                                    ))
                                }
                        </div>
                        <p className="text-neutral-500 mt-2 pl-2"> ? indicates that the prop is optional</p>
                    </div>
}

                <div id="example">
                    <h4 className="text-xl font-semibold text-neutral-100">Example</h4>
                    <p className="text-neutral-500 mt-1">Some uses for {title} component:</p>

                    <div className="mt-8">
                        {exampleComponents}
                    </div>
                </div>

            </div>
            <div className="w-60 hidden md:block">
                <h4 className="text-nowrap border-l-4 pl-4 border-neutral-700 text-neutral-200">On this page</h4>
                <div className="pl-5 flex flex-col mt-4 space-y-2 text-neutral-400">
                    <Link href="#usage">Usage</Link>
                    <Link href="#structure">Structure</Link>
                    <Link href="#example">Example</Link>
                </div>
            </div>
        </div>
     );
}
 
export default ComponentsPage;