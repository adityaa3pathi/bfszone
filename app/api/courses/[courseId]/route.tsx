import prismadb from "@/../lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";





 
     
export async function DELETE(
    req: Request,
    {params}: {params: {courseId: string}}
)  {

    try {


        const {userId } = auth(); 

        if(!userId) {
            return new NextResponse("Unauthorized", {status: 401});
        }

        const course  = await prismadb.course.findUnique({
            where: {
                id: params.courseId,
                userId
            },
            include: {
                chapters: {
                            include: {
                                muxData: true,
                            }
                }
            }
        });

        if(!course) {

            return new NextResponse("Not foud", {status: 404})
        }


         


         const deletedsCourse = await prismadb.course.delete({
            where: {
                id: params.courseId,
            }
         })

         return NextResponse.json(deletedsCourse)

    } catch (error)  {
        console.log("[COURSE_ID_DELETE]", error);
        return new NextResponse("Internal Error", {status: 500 });
    }
}


export async function PATCH(
    req: Request,
    {params}: {params: {courseId: string}}
)

{
    try {
        const {userId } = auth();
        const {courseId} = params;
        const values = await req.json();

        if(!userId) {
            return new NextResponse("Unauthorized", {status: 401});
        }

            const course = await prismadb.course.update({
                where: {
                    id: courseId,
                    userId
                },
                data: {
                    ...values,
                }
            });

            return NextResponse.json(course);
    }
    catch (error) {
        console.log("[COURSE_ID]", error);
        return new NextResponse("Internal Error", {status: 500});
    }
}