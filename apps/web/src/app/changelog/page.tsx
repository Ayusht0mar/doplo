
const ChangelogPage = () => {
    return ( 
        <div className="flex flex-col w-[94vw] max-w-7xl mx-auto min-h-svh gap-8 bg-[#0C0C0C] rounded-3xl border border-[#171717] ">
               
        <div className="pt-24 pl-12 space-y-4">
            <h1 className="text-4xl font-bold">Changelog</h1>
            <p className="text-[#C0C0C0] text-balance">Get our latest updates and improvements by joining our newsletter.</p>
            <div className="flex items-center gap-2">
                <p className="gap-4 bg-zinc-900 w-fit py-1.5 px-3 text-zinc-100 rounded-md min-w-60">Enter your email</p>
                <button className="text-zinc-900 bg-zinc-100 py-1.5 px-3 rounded-md font-semibold">Subsribe</button>
            </div>
            <div className="py-10 flex gap-12 items-start">
                <div className="flex gap-6 items-center">
                    <h3 className="text-zinc-900 bg-zinc-100 py-1.5 px-3 rounded-md font-semibold text-sm h-fit">Version 1.0.0</h3>
                    <h4 className="text-[#C0C0C0] text-sm">04 Feb 2025</h4>
                </div>
                <div>
                    <h3 className="text-2xl">Initial Release</h3>
                    <p className="text-[#C0C0C0] mt-2">Release Description</p>
                </div>
            </div>
        </div>
        
    </div> 
     );
}
 
export default ChangelogPage;