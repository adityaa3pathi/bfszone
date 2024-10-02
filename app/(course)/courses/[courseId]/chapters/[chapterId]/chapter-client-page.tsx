"use client";

import React from "react";
import { Banner } from "../../../../../../components/banner";
import { VideoPlayer } from "./_components/video-player";
import { Purchase } from "@prisma/client";
import { CourseEnrollButton } from "./_components/course-enroll-button";
import { Separator } from "../../../../../../components/ui/separator";
import { Preview } from "../../../../../../components/preview";
import { CourseProgressButton } from "./_components/course-progress-button";

interface ChapterClientPageProps {
  chapter: any;
  course: any;
  purchase: any;
  attachments: any;
  nextChapter: any;
  userProgress: any;
  isLocked: boolean;
  completedOnEnd: boolean;
  params: { courseId: string; chapterId: string };
}

const ChapterClientPage = ({
  chapter,
  nextChapter,
  userProgress,
  isLocked,
  purchase,
  completedOnEnd,
  params,
  course
}: ChapterClientPageProps) => {
  return (
    <div>
      {userProgress?.isCompleted && (
        <Banner variant="suceess" label="You already completed this chapter." />
      )}

      {isLocked && (
        <Banner
          variant="warning"
          label="You need to purchase this course to watch this chapter"
        />
      )}

      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            chapterId={params.chapterId}
            title={chapter.title}
            courseId={params.courseId}
            nextChapterId={nextChapter?.id}
            videoUrl={chapter.videoUrl}
            isLocked={isLocked}
            completedOnEnd={completedOnEnd}
          />
        </div>
        <div>
            <div className="p-4 flex- flex-col md:flex-row items-center justify-between">
                <h2 className="text-2xl font-semibold mb-2">
                    {chapter.title}
                </h2>
               
                {purchase ? ( <CourseProgressButton
                chapterId={params.chapterId}
                courseId={params.courseId}
                nextChapterId={nextChapter?.id}
                isCompleted={!!userProgress?.
                  isCompleted}/> ): (
                    <CourseEnrollButton 
                    courseId={params.courseId}
                    price={course.price!}
                    />
                )}

            </div>
            <Separator/>
            <div>
              <Preview  value={chapter.description}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChapterClientPage;
