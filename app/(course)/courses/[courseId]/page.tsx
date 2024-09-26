import prismadb from "@/../lib/db";
import { redirect } from "next/navigation";

const CourseIdPage = async ({
  params,
}: {
  params: { courseId: string };
}) => {
  const course = await prismadb.course.findUnique({
    where: { id: params.courseId },
    include: {
      chapters: {
        where: { isPublished: true },
        orderBy: { position: "asc" },
      },
    },
  });

  if (!course || course.chapters.length === 0) {
    redirect("/");
  }

  redirect(`/courses/${course.id}/chapters/${course.chapters[0].id}`);

  // Returning null or empty fragment as this component doesn't need to render anything
  return <></>;
};

export default CourseIdPage;
