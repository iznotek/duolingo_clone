import { Sidebar } from "@/components/sidebar";
import { MobileHeader } from "@/components/mobile-header";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Learn with Duolingo 🐥", 
  description: "Enhance your language skills with fun and interactive lessons on Duolingo!",
};

const MainLayout = ({ children, }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex"/>
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] pt-6 mx-auto h-full ">
        {children}
        </div>
      </main>
    </>
  );
};

export default MainLayout