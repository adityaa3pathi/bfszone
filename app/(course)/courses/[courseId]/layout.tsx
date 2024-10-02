

// import { auth } from "@clerk/nextjs/server";
// import prismadb from "../../../../lib/db";
// import { redirect } from "next/navigation";
// import { getProgress } from "../../../../actions/get-progress";
// import { CourseSidebar } from "./_components/course-sidebar";
// import { CourseNavbar } from "./_components/course-navbar";

// const CourseLayout =  async ({
//     children,
//     params
// }: {
//     children: React.ReactNode;
//     params: {courseId: string};
// }) => {
//     const {userId} = auth();

//     if(!userId) {

//         return redirect("/")
//     }

//     const course = await prismadb.course.findUnique({
//         where: {
//             id: params.courseId,
//         },
//         include: {
//             chapters: {
//                 where: {
//                     isPublished: true,
//                 },
//                 include: {
//                     userProgress: {
//                         where: {
//                             userId, 
//                         }
//                     }
//                 },
//                 orderBy: {
//                     position: "asc"
//                 }
//             }
//         }

//     });
//     if(!course) {
//         return redirect("/");
//     }

//     const progressCount = await getProgress(userId, course.id);

//     return (
//         <div className="h-full">
//             <div className="h-[80px md:pl-80 fixed inset-y-0 w-full z-50]">
//                     <CourseNavbar
//                     course={course}
//                     progressCount={progressCount}
//                     />
//             </div>


//             <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
//             <CourseSidebar
//             course={course}
//             progressCount= {progressCount}
//             />
//             </div>
//             <main className="md:pl-80  pt-[80px] h-full">
//                return <>{children}</>;
//             </main>
            
//         </div>
//     )
// }


import { auth } from "@clerk/nextjs/server";
import prismadb from "../../../../lib/db";
import { redirect } from "next/navigation";
import { getProgress } from "../../../../actions/get-progress";
import { CourseSidebar } from "./_components/course-sidebar";
import NavBar from "./_components/course-navbar";
import Footer from "../../../componentss/footer";


const CourseLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  const { userId } = auth();

  // Handle the case where the user is not authenticated
  if (!userId) {
    redirect("/");
    return null; // Important: Return null to prevent further rendering after redirect
  }

  // Fetch course with chapters and progress
  const course = await prismadb.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId,
            },
          },
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  // Redirect to home if the course doesn't exist
  if (!course) {
    redirect("/");
    return null;
  }

  // Fetch the progress count
  const progressCount = await getProgress(userId, course.id);

  return (
    <div className="h-full">
      <div>
    {/* Fixed Navbar */}
    <div className="fixed top-0 left-0 w-full h-[80px] z-50">
      <NavBar course={course} progressCount={progressCount} />
    </div>

    {/* Fixed Sidebar */}
    <div className="hidden flex-shrink-0 md:flex fixed top-[80px] left-0 w-80 h-[calc(100vh-80px)] z-40 flex-col border-r bg-white shadow-sm">
      <CourseSidebar course={course} progressCount={progressCount}  />
    </div>

    {/* Main Content Area */}
    <main className="md:pl-80 pt-[80px] h-full bg-gray-100">
      {children}
    </main>
    </div>
    <Footer/>
  </div>
  );
};

export default CourseLayout;
