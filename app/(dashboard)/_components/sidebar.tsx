import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-routes"
import { SidebarItem } from "./sidebarItem"

export const SideBar = () => {

    return (
      <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm"> 
       <Logo/>
            <SidebarRoutes/>
        </div> 
    )
}