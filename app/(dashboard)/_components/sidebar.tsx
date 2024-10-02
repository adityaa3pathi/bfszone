import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"
import { SidebarItem } from "./sidebarItem"

export const SideBar = () => {

    return (
        <div className="mt-6 fixed h-full w-[250px] border-r flex flex-col bg-white shadow-sm  left-0 top-[64px]    bg-white  overflow-y-auto">
        
        <SidebarRoutes />
      </div>
      
    )
}