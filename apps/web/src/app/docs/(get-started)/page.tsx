"use client"
import CopyButton from "../../../components/copy-to-clipboard";

const IntroductionPage = () => {

    return (
        <div className="text-neutral-400">
            <h1 className="text-2xl font-semibold text-neutral-200">Introduction</h1>
            <p>Doplo is a library for react interfaces. Light Weight. Open Source.</p>
            <br />
            <p className="text-balance">The library is build to save your time from building same reusable components again and again. Style the components according to your needs simply using className as you would do in a react app.</p>
            <br />
            <p>With one command you are set to go.</p>

            <div className="my-5 space-y-2">
                <div className="flex justify-between items-start gap-4 bg-zinc-900 py-3 px-6 text-zinc-100 rounded-md w-full max-w-96">
                    <p>npm install doplo</p>
                    <CopyButton textToCopy="npm install doplo"/>
                </div>
            </div>
        </div>

    );
}

export default IntroductionPage;