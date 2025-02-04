import { Textarea } from "doplo/textarea";
import ComponentsPage from "../../../../components/docs/components-page";

const TextareaPage = () => {
    return ( 
        <div className="w-full">
        <ComponentsPage 
            title="Textarea" 
            description="Display an Textarea"
            
            component={<Textarea placeholder="Start Writing"/>}

            elementImport='import { Textarea } from "doplo/textarea";'
            elementBody='<Textarea placeholder="_" />'
            structureImgSrc="../../../../docs/textarea-structure.svg"
            structureImgAspectRatio="aspect-[4/1.5]"
            structureList={
                <ul className="list-disc list-inside space-y-1 mt-2 text-neutral-500">
                    <li><span className="text-neutral-200">Textarea </span>: Tag for Textarea.</li>
                </ul>
            }
            exampleComponents={
                <div className="bg-neutral-950 border border-neutral-900 p-4 rounded-lg">
                    Example Component
                </div>
            }
            props={[ 
                {
                    name: "placeholder?",
                    type: "string",
                    description: "Sample value or instructions for the user",
                    default: "-"
                },
                {
                    name: "props?",
                    type: "-",
                    description: "All props of HTML textarea element",
                    default: "-"
                },
                {
                    name: "ref?",
                    type: "-",
                    description: "ref of the textarea element",
                    default: "-"
                }
            ]}
            />
    </div>     );
}
 
export default TextareaPage;