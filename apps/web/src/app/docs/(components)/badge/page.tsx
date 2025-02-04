import { Badge } from "doplo/badge";
import ComponentsPage from "../../../../components/docs/components-page";

const BadgePage = () => {
    return ( 
        <div className="w-full">
            <ComponentsPage 
                title="Badge" 
                description="Display an badge"
                
                component={<Badge> Badge Text </Badge>}

                elementImport='import {Badge} from "doplo/badge"'
                elementBody="<Badge> Badge Text </Badge>"
                structureImgSrc="../../../../docs/badge-structure.svg"
                structureImgAspectRatio="aspect-[4/1.5]"
                structureList={
                    <ul className="list-disc list-inside space-y-1 mt-2 text-neutral-500">
                        <li><span className="text-neutral-200">Badge </span>: Tag for Badge.</li>
                        <li><span className="text-neutral-200">Children </span>: Content inside badge tag.</li>
                    </ul>
                }
                exampleComponents={
                    <div className="bg-neutral-950 border border-neutral-900 p-4 rounded-lg">
                        Working on it
                    </div>
                }
                />
        </div>
     );
}
 
export default BadgePage;