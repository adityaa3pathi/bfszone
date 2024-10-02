import { Chapter, Course, UserProgress } from "prisma/prisma-client"
import NavBarContainer from "./CourseNavBarContainer";
import { auth } from "@clerk/nextjs/server";

interface  CourseNavbarProps {
     course: Course & {
        chapters: (Chapter & {
            userProgress: UserProgress[] | null; 
        })[];
     };
     progressCount: number;
}

export const CourseNavbar = ({
    course,
    progressCount,
}: CourseNavbarProps) => {

    const {userId } = auth();
    return (
       <div>
        <NavBarContainer 
        userId={userId}  course={course}
        progressCount={progressCount} />
        </div>
    )


}