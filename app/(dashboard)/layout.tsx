import { SideBar } from "./_components/sidebar";
import NavBar from "../componentss/nav-bar";
import Footer from "../componentss/footer";
import "../globals.css";
import "../../styles/tailwind.css";
import "../../styles/index.css";
import "../../styles/font.css";
// import { Sidebar } from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between bg-gray-00 text-gray-200 min-h-screen">
      <div className="h-[80px] fixed w-full z-50">
        <NavBar />
      </div>
      <main className="flex flex-row justify-between gap-4 mt-[80px]"> {/* Ensure space below NavBar */}
        <div className=" hidden md:flex w-[250px] flex-shrink-0"> {/* Define width for SideBar */}
          <SideBar />
        </div>
        <div className="flex-grow m-4 overflow-auto m-4"> {/* Adjust children to avoid overlap */}
          {children}
        </div>
      </main>
      <footer className="w-full bg-blue_gray-800 border-t shadow-sm z-50 ">
        <Footer />
      </footer>
    </div>
  );
};

export default DashboardLayout;
