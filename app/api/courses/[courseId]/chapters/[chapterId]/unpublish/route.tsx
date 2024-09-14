import { auth } from "@clerk/nextjs/server";
import exp from "constants";
import { NextResponse } from "next/server";
import prismadb from "../../../../../../../lib/db";




export async function PATCH(
    req: Request,
    {params}: {params: {courseId: string; chapterId: string}} 
) {

    try{
        const {userId } = auth();
            if(!userId ) {
                return new NextResponse("Unauthorized", {status: 401});
            }

                const ownCourse = await prismadb.course.findUnique({
                    where: {
                        id: params.courseId,
                        userId
                    }
                });


                if(!ownCourse ) {
                    return new NextResponse("Unauthorized", {status: 401});
                }

                const chapter = await prismadb.chapter.findUnique({
                    where: {
                        id: params.chapterId,
                        courseId: params.courseId
                    }
                });

            const muxData = await prismadb.muxData.findUnique({
                where: {
                    chapterId: params.chapterId
                }
            });


            if(!chapter || !muxData || !chapter.title || !chapter.description || !chapter.videoUrl) {
                return new NextResponse("Missing required fields", {status: 400})
            }


            const unpublishedChapter = await prismadb.chapter.update({
                where: {
                    id: params.chapterId,
                    courseId: params.courseId,
                },
                data: {
                    isPublished: false,
                }
            });

            const publishedChaptersInCourse = await prismadb.chapter.findMany({
                where: {
                    courseId: params.courseId,
                    isPublished: true
                }
            })

                if (!publishedChaptersInCourse.length) {
                    await prismadb.course.update({
                        where: {
                            id: params.courseId,
                        },
                        data: {
                            isPublished: false,
                        }
                    })
                }


            return  NextResponse.json(unpublishedChapter)
}

catch (error){
            console.log("[CHAPTER_UNPUBLISH]", error);
            return new NextResponse("Internal Error", {status: 500});
    }
}