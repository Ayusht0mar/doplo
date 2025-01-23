"use client" 
import { motion } from "motion/react";
import { useState } from "react";
import Button from "doplo/button";
import QuickStartContent from "../../components/docs/quick-start";
import InputContent from "../../components/docs/input-content";
import CardContent from "../../components/docs/card-content";
import TextareaContent from "../../components/docs/textarea-content";
import ButtonContent from "../../components/docs/button-content";

const tabs = [
    { id: 1, label: "Quick Start", content: <QuickStartContent/> },
    { id: 3, label: "Button", content: <ButtonContent/>},
    { id: 4, label: "Card", content: <CardContent/> },
    { id: 5, label: "Input", content: <InputContent/> },
    { id: 6, label: "Textarea", content: <TextareaContent/> },
];

const DocsPage = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="w-[94vw] mx-auto flex flex-row overflow-hidden bg-[#0C0C0C] border border-[#171717] rounded-xl max-w-7xl min-h-screen">
            <div className="fixed z-50 bg-black w-screen text-center left-0 bottom-0 py-2">The Documentation is currently underwriting.</div>
            <div className="md:flex flex-col p-2 hidden  min-w-48">
                {tabs.map((tab) => (
                    <Button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); }}
                    className={`relative px-3 py-1.5 text-start text-sm md:text-base font-medium text-white outline-2 outline-sky-400 focus-visible:outline ${activeTab !== tab.id && "hover:opacity-50" }`}
                >
                    {activeTab === tab.id && (
                        <motion.div
                            layoutId="active"
                            className="absolute inset-0 bg-zinc-700 rounded-md hover:opacity-100"
                            transition={{ type: "spring", duration: 0.6 }}
                        />
                    )}
                    <span className="relative text-nowrap">{tab.label}</span>
                </Button>                
                ))}
            </div>
            <div className="border-l border-zinc-800 p-3 md:p-8 w-full">
                {tabs.map((tab) => (
                    <div key={tab.id}>
                        <div className={`${activeTab === tab.id ? "flex justify-between" : "hidden"}`}>
                            {tab.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DocsPage;