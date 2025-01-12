import { Github} from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <div className="flex items-center justify-between w-[94vw] mx-auto max-w-6xl my-4">
                <div className="w-8 h-8 relative">
                        <Image
                            src="/doplosymbollogo.svg"
                            alt="Doplo Symbol log"
                            fill
                        />
                </div>
                <a target="_blank" href="https://github.com/Ayusht0mar/doplo">
                    <Github/>
                </a>
        </div>
     );
}
 
export default Navbar;