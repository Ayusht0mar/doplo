import Image from "next/image";
import CopyButton from "../../../../components/copy-to-clipboard";

const InstallationPage = () => {
    return ( 
        <div className="text-neutral-400">
                   <h1 className="text-2xl font-semibold text-neutral-200">Installation</h1>
                   <br />
                   <p>Install doplo into your project.</p>
                    <div className="flex justify-between items-center gap-4 bg-zinc-900 py-3 px-6 mt-4 text-zinc-100 rounded-md w-full max-w-96">
                        <p>npm install doplo</p>
                        <CopyButton textToCopy="npm install doplo"/>
                    </div>
                    <br />
                    <p>
                        We use tailwind for styling. So you need to add doplo path in tailwind config file.
                    </p>
                    <br />
                    <div className="flex gap-4 items-center">
                        <p>{"../../node_modules/doplo/**/*.{js,ts,jsx,tsx,mdx}"}</p>
                        <CopyButton textToCopy='"../../node_modules/doplo/**/*.{js,ts,jsx,tsx,mdx}"'/>
                    </div>
                    <Image src="/docs/path-img.svg" alt="Path Image" width={500} height={300}/>
                    <br />
                    And with that you can use the <a href="badge">components</a> in your application.
        </div>
     );
}
 
export default InstallationPage;