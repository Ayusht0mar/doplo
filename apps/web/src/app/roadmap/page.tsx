const RoadmapPage = () => {
    return ( 
        <div className="flex flex-col w-[94vw] max-w-7xl mx-auto min-h-svh gap-8 bg-[#0C0C0C] rounded-3xl border border-[#171717] ">
               
        <div className="pt-12 lg:pt-24 px-4 lg:px-12 space-y-4">
            <h1 className="text-4xl font-bold">Roadmap</h1>
            <p className="text-[#C0C0C0] text-balance">You can use all the components with one command or you can just copy and paste components into your app. This hybrid approach allows you to build faster and on your own terms.</p>
            {/* To do: Make the write feedback component functionable */}
            <div className="flex items-center gap-4 bg-zinc-900 w-fit py-1.5 px-3 text-zinc-100 rounded-md">
                <p>Write feedback or request a component</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="border border-[#202020] p-4 h-[400px]">
                    <h2 className="text-orange-600 font-semibold bg-orange-600/10 border border-orange-600 py-1 px-2 w-fit rounded text-sm">In Review</h2>
                    <ul className="mt-4 space-y-2">
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Forms
                        </li>
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Tables
                        </li>
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Dialog
                        </li>
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Pagination
                        </li>
                    </ul>
                </div>
                <div className="border border-[#202020] p-4 h-[400px]">
                    <h2 className="text-blue-600 font-semibold bg-blue-600/10 border border-blue-600 py-1 px-2 w-fit rounded text-sm">In Progress</h2>
                    <ul className="mt-4 space-y-2">
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Accordion
                        </li>
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Dropdown Menu
                        </li>
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Select
                        </li>
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Tabs
                        </li>
                    </ul>
                </div>
                <div className="border border-[#202020] p-4 h-[400px]">
                    <h2 className="text-green-600 font-semibold bg-green-600/10 border border-green-600 py-1 px-2 w-fit rounded text-sm">Completed</h2>
                    <ul className="mt-4 space-y-2">
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Textarea
                        </li>
                    </ul>
                </div>
                <div className="border border-[#202020] p-4 h-[400px]">
                    <h2 className="text-purple-600 font-semibold bg-purple-600/10 border border-purple-600 py-1 px-2 w-fit rounded text-sm">Published</h2>
                    <ul className="mt-4 space-y-2">
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Button
                        </li>
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Card
                        </li>
                        <li className="bg-[#1A1A1A] rounded py-2 px-3 font-semibold">
                            Input
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div> 
     );
}
 
export default RoadmapPage;