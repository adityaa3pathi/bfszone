import {Menu} from "lucide-react";
import { Sheet,
    SheetContent,
    SheetTrigger
 } from "../../../../../components/ui/sheet";
import { Chapter, Course, UserProgress } from "prisma/prisma-client";
import { CourseSidebarItem } from "./course-sidebar-item";
import { CourseSidebar } from "./course-sidebar";


interface  CourseMobileSidebarProps {
    course: Course & {
       chapters: (Chapter & {
           userProgress: UserProgress[] | null; 
       })[];
    };
    progressCount: number;
}

export const CourseMobileSidebar = ({
    course,
    progressCount,
}: CourseMobileSidebarProps) => {


    return (
      <Sheet>
        <SheetTrigger className="md:hidden pr-2 hover:opacity-75 transition">
            <Menu />
        </SheetTrigger>
        <SheetContent className="p-0 bg-white w-72" >
            <CourseSidebar
            course={course}
            progressCount={progressCount}
            />
        </SheetContent>
      </Sheet>
    )
}