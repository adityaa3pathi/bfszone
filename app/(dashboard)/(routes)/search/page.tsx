import { auth } from "@clerk/nextjs/server";
import { getCourses } from "../../../../actions/get-courses";
import prismadb from "../../../../lib/db";
import { Categories } from "./_components/categories";
import { redirect } from "next/navigation";
import { CoursesList } from "../../../../components/courses-List";



interface SearchPageProps {
    title: string;
    categoryId: string;
}

const SearchPage = async(
searchParams: SearchPageProps
) => {

    const {userId} = auth();  
    
    if(!userId) {
        redirect("/");
    }
    const categories = await prismadb.category.findMany({
        orderBy: {
            name: "asc"
        }
    });


  const courses = await getCourses({
    userId,
    ...searchParams,
  })
    return ( 
        <div className="p-6 space-y-4">
                   <CoursesList items={courses} />
        </div>
     );
}
 
export default SearchPage;