// CourseSidebar.tsx (server-side component)

import { redirect } from "next/navigation";
import prismadb from "@/../lib/db";
import { CourseSidebarClient } from "./course-sidebar-client"; // Import the client component
import { Chapter, Course, UserProgress } from "prisma/prisma-client";

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseSidebar = async ({ course, progressCount }: CourseSidebarProps) => {
 

  // If user is not authenticated, redirect
  

  // Check if the user has purchased the course
 

  // Prepare the data to pass to the client-side component
  const courseForClient = {
    courseId: course.id,
    title: course.title,
    chapters: course.chapters.map((chapter) => ({
      id: chapter.id,
      title: chapter.title,
      isCompleted: !!chapter.userProgress?.[0]?.isCompleted,
      isLocked: !chapter.IsFree
    })),
  };

  // Pass the prepared data to the client-side component
  return <CourseSidebarClient course={courseForClient} progressCount={progressCount} />;
};
