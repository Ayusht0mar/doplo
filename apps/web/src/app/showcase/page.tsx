const ShowCasePage = () => {
    return ( 
        <div className="flex flex-col w-[94vw] max-w-7xl mx-auto min-h-svh gap-8 bg-[#0C0C0C] rounded-3xl border border-[#171717] ">
               
        <div className="pt-12 lg:pt-24 px-4 lg:px-12 space-y-4">
            <h1 className="text-4xl font-bold">Building something great with Doplo?</h1>
            <p className="text-[#C0C0C0] text-balance">I&apos;d love to feature it! Send me a DM on <a href="https://x.com/justayushtomar">X</a> or email me at <a href="mailto:hi@ayushtomar.in">hi@ayushtomar.in</a></p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
                <div className="border border-[#202020] aspect-square rounded-md bg-gradient-to-b from-zinc-900 to-transparent">

                </div>
                <div className="border border-[#202020] aspect-square rounded-md bg-gradient-to-b from-zinc-900 to-transparent">

                </div>
                <div className="border border-[#202020] aspect-square rounded-md bg-gradient-to-b from-zinc-900 to-transparent">

                </div>
                <div className="border border-[#202020] aspect-square rounded-md bg-gradient-to-b from-zinc-900 to-transparent">

                </div>

            </div>
        </div>
        
    </div> 
     );
}
 
export default ShowCasePage;