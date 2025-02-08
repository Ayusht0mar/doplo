import Image from "next/image";

const ThemingPage = () => {
    return ( 
           <div className="text-neutral-400">
                           <h1 className="text-2xl font-semibold text-neutral-200">Theming</h1>
                           <p>Use theme according to your need.</p>

                            <br />
                            <p>You can use the <a href="https://github.com/pacocoursey/next-themes" className="text-blue-500">next-themes</a> package to toggle between themes.</p>
                            {/* <div>
                                <h2>If you are using only one theme</h2>
                                <br />
                                <p>For light theme:</p>

                                <Image src="/docs/theme-config.svg" alt="Theme Config" width={500} height={300}/>

                                <br />
                                <p>For dark theme:</p>

                                <Image src="/docs/theme-config.svg" alt="Theme Config" width={500} height={300}/>
                                <Image src="/docs/dark-theme-layout.svg" alt="Theme Config" width={500} height={300}/>

                                <br />
                                <h2>If you are using both themes</h2>
                                <p>Use next-themes to toggle between themes</p>

                            </div> */}
                </div>
     );
}
 
export default ThemingPage;