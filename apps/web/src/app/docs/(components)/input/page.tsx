import { Input } from "doplo/input";
import ComponentsPage from "../../../../components/docs/components-page";

const InputPage = () => {
    return ( 
        <div className="w-full">
        <ComponentsPage 
            title="Input" 
            description="Display an input bar"
            
            component={<Input placeholder="Start Writing"/>}

            elementImport='import { Input } from "doplo/input"'
            elementBody='<Input placeholder="_" />'
            structureImgSrc="../../../../docs/input-structure.svg"
            structureImgAspectRatio="aspect-[4/1.5]"
            structureList={
                <ul className="list-disc list-inside space-y-1 mt-2 text-neutral-500">
                    <li><span className="text-neutral-200">Input </span>: Tag for Input.</li>
                </ul>
            }
            exampleComponents={
                <div className="bg-neutral-950 border border-neutral-900 p-4 rounded-lg">
                    Example Component
                </div>
            }
         
            props={[ 
                {
                    name: "type?",
                    type: "-",
                    description: "Specifies the type of input",
                    default: "-"
                },
                {
                    name: "placeholder?",
                    type: "string",
                    description: "Sample value or instructions for the user",
                    default: "-"
                },
                {
                    name: "props?",
                    type: "-",
                    description: "All props of HTML input element",
                    default: "-"
                },
                {
                    name: "ref?",
                    type: "-",
                    description: "ref of the input element",
                    default: "-"
                }
            ]}
            />
    </div>     );
}
 
export default InputPage;