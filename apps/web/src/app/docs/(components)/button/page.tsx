import { Button } from "doplo/button";
import ComponentsPage from "../../../../components/docs/components-page";

const ButtonPage = () => {
    return ( 
        <div className="w-full">
        <ComponentsPage
            title="Button" 
            description="Display an button"
            
            component={<Button>Click me!</Button>}

            elementImport='import {Button} from "doplo/button"'
            elementBody="<Button> Click me! </Button>"
            structureList={
                <ul className="list-disc list-inside space-y-1 mt-2 text-neutral-500">
                    <li><span className="text-neutral-200">Button </span>: Tag for Button.</li>
                    <li><span className="text-neutral-200">Children </span>: Content inside Button tag.</li>
                </ul>
            }
            structureImgSrc="../../../../docs/button-structure.svg"
            structureImgAspectRatio="aspect-[4/1.5]"
            exampleComponents={
                <div className="bg-neutral-950 border border-neutral-900 p-4 rounded-lg">
                    Working on it.
                </div>
            }
            props={[ 
                {
                    name: "props?",
                    type: "-",
                    description: "All props of HTML button element",
                    default: "-"
                },
                {
                    name: "ref?",
                    type: "-",
                    description: "ref of the button element",
                    default: "-"
                },
                {
                    name: "type?",
                    type: "-",
                    description: "Defines button behavior.",
                    default: "button"
                },
            ]}
            />
    </div>     );
}
 
export default ButtonPage;