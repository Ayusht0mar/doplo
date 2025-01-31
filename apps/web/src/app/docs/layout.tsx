import DocsSidebar from "../../components/docs/docs-sidebar";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }): JSX.Element {
    return (
        <div className="w-[94vw] mx-auto flex flex-row overflow-hidden bg-[#0C0C0C] border border-[#171717] rounded-xl max-w-7xl min-h-screen">
            <DocsSidebar/>
            <div className="p-6 w-full">
                {children}
            </div>
          </div>
    );
  }