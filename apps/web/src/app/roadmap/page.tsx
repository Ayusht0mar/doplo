const RoadmapPage = () => {
    return ( 
        <div className="flex flex-col w-[94vw] max-w-7xl mx-auto min-h-svh gap-8 bg-[#0C0C0C] rounded-3xl border border-[#171717] ">
               
        <div className="pt-12 lg:pt-24 px-4 lg:px-12 space-y-4">
            <h1 className="text-4xl font-bold">Roadmap</h1>
            <p className="text-[#C0C0C0] text-balance">You can use all the components with one command or you can just copy and paste components into your app. This hybrid approach allows you to build faster and on your own terms.</p>
            <div className="flex items-center gap-4 bg-zinc-900 w-fit py-1.5 px-3 text-zinc-100 rounded-md">
                <p>Write feedback or request a component</p>
            </div>
        </div>
    </div> 
     );
}
 
export default RoadmapPage;