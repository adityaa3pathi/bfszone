// CourseSidebarClient.tsx


import { CourseSidebarItem } from "./course-sidebar-item";
import CourseProgress from "../../../../../components/course-progress";

interface CourseSidebarClientProps {
  course: {
    courseId: string,
    title: string;
    chapters: {
      id: string;
      title: string;
      isCompleted: boolean;
      isLocked: boolean;
    }[];
  };
  progressCount: number;
}

export const CourseSidebarClient = ({ course, progressCount }: CourseSidebarClientProps) => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <h1 className="font-semibold text-gray-700">{course.title}</h1>

        {/* Display course progress */}
        <div className="mt-10">
          <CourseProgress variant="success" value={progressCount} />
        </div>
      </div>

      <div className="flex flex-col w-full">
        {course.chapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={chapter.isCompleted}
            courseId={course.courseId}
            isLocked={chapter.isLocked}
          />
        ))}
      </div>
    </div>
  );
};
