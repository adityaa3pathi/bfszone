import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import { getChapter } from "../../../../../../actions/get-chapter";
import ChapterClientPage from "./chapter-client-page"; // Client Component

const ChapterIdPage = async ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
    return null;
  }

  const {
    chapter,
    course,
    attachments,
    nextChapter,
    userProgress,
    purchase,
  } = await getChapter({
    userId,
    chapterId: params.chapterId,
    courseId: params.courseId,
  });

  if (!chapter || !course) {
    redirect("/");
    return null;
  }

  const isLocked = !chapter.IsFree && !purchase;
  const completedOnEnd = !!purchase && !userProgress?.isCompleted;

  // Pass the fetched data to a client-side component
  return (
    <ChapterClientPage
      chapter={chapter}
      course={course}
      attachments={attachments}
      nextChapter={nextChapter}
      userProgress={userProgress}
      isLocked={isLocked}
      purchase={purchase}
      completedOnEnd={completedOnEnd}
      params={params}
    />
  );
};

export default ChapterIdPage;
