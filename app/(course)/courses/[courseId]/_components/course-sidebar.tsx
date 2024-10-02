import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { Chapter, Course, UserProgress } from "prisma/prisma-client"
import prismadb from "@/../lib/db";

import { CourseSidebarItem } from "./course-sidebar-item";
import CourseProgress from "../../../../../components/course-progress";


  
    interface CourseSidebarProps {
        course: Course & {
            chapters: (Chapter & {
                userProgress: UserProgress[] | null;
            })[]
        };
        progressCount: number;
    }

export const   CourseSidebar = async({
    course,
    progressCount,
}: CourseSidebarProps ) => {
    const {userId} =auth()

    if(!userId) {
        return redirect("/");
    }

    const purchase = await prismadb.purchase.findUnique({
        where: {
            userId_courseId: {
                        userId,
                        courseId: course.id,
            }
        }
    });    

    return (
        <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
            <div className="p-8 flex flex-col border-b">
                <h1 className="font-semibold text-gray-700">
                    {course.title}
                </h1>
                {/* check purchase ad add progress */}
                    {<div className="mt-10">
                        <CourseProgress
                        variant="success"
                        value={progressCount}
                        />
                        </div>}
            </div>
            <div className="flex flex-col w-full">
                {course.chapters.map((chapter) => (
                    <CourseSidebarItem
                    key={chapter.id}
                    id={chapter.id}
                    label={chapter.title}
                    isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
                    courseId={course.id}
                    isLocked={!chapter.IsFree && !purchase}

                    />
                ))}

            </div>
        </div>
    )
}