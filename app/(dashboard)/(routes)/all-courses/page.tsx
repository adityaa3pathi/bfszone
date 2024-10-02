import { UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getDashboardCourses } from "../../../../actions/get-dashboard-courses";
import { CoursesList } from "../../../../components/courses-List";
import { CheckCircle, Clock } from "lucide-react";
import { InfoCard } from "./_components/info-card";

export default async function Home() {

    const {userId} = auth();

    if (!userId) {
         redirect("/")
          return null;
        }
  
        const {
            completedCourses,
            coursesInProgress
        } = await getDashboardCourses(userId);

    return(

        <div className="p-6 space-y-4">
        {/* Set grid to 2 columns by default */}
        <div className="grid grid-cols-2 gap-4">
          <InfoCard
            icon={Clock}
            numberOfItems={coursesInProgress.length}
            label="In Progress"
          />
          <InfoCard
            icon={CheckCircle}
            variant="success"
            numberOfItems={completedCourses.length} 
            label="Completed"
          />
        </div>
        <CoursesList items={[...coursesInProgress, ...completedCourses]} />
      </div>
    )
}