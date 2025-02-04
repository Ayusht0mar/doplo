import EmailCollector from "../../components/changelog/emailcollector";

const ChangelogPage = () => {
    return ( 
        <div className="flex flex-col w-[94vw] max-w-7xl mx-auto min-h-svh gap-8 bg-[#0C0C0C] rounded-3xl border border-[#171717] ">
               
        <div className="pt-12 lg:pt-24 px-4 lg:px-12 space-y-4">
            <h1 className="text-4xl font-bold">Changelog</h1>
            <p className="text-[#C0C0C0] text-balance">Get our latest updates and improvements by joining our newsletter.</p>
            <EmailCollector/>
            <div className="py-10 flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex gap-6 items-center">
                    <h3 className="text-zinc-900 bg-zinc-100 py-1.5 px-3 rounded-md font-semibold text-sm h-fit text-nowrap">Version 1.0.0</h3>
                    <h4 className="text-[#C0C0C0] text-sm text-nowrap">5 February 2025</h4>
                </div>
                <div>
                    <h3 className="text-2xl">Initial Release</h3>
                    <div className="text-[#C0C0C0] mt-2">

                        Introduced
                        <br/>
                        <ul className="list-disc list-inside space-y-1 mt-2 text-neutral-200">
                            <li>Components:</li>
                                <ul className="pl-6 space-y-1 mt-2 text-neutral-400">
                                    <li>Badge</li>
                                    <li>Button</li>
                                    <li>Card</li>
                                    <li>Dialog</li>
                                    <li>Input</li>
                                    <li>Textarea</li>
                                </ul>
                            <li>Theming Support</li>
                            <p className="pl-6 text-neutral-400">
                                Built-in light and dark themes.
                            </p>
                            <li>Styling</li>
                            <p className="pl-6 text-neutral-400">Tailwind CSS support for styling.</p>
                            <p className="pl-6 text-neutral-400">Support for custom styles.</p>
                            <li>Installation</li>
                            <p className="pl-6 text-neutral-400">Available on npm.</p>
                            <li>Documentation</li>
                            <p className="pl-6 text-neutral-400">Clear and concise documentation.</p>
                            <li>Roadmap</li>
                            <p className="pl-6 text-neutral-400">A roadmap to our future plans.</p>
                            <li>Changelog</li>
                            <p className="pl-6 text-neutral-400">A changelog to keep track of our updates.</p>
                            <li>Showcase</li>
                            <p className="pl-6 text-neutral-400">A showcase of websites built using Doplo.</p>
                        </ul>                        
                    </div>
                </div>
            </div>
        </div>
        
    </div> 
     );
}
 
export default ChangelogPage;