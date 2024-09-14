import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "../../../../../lib/db";



const CoursesPage = async () => {

  const {userId} = auth();

  if(!userId) redirect("/")

    const courses = await prismadb.course.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: "desc",
        }
    });

    return ( 

<div>
<DataTable columns={columns} data={courses} />
</div>




     );
}


 
export default CoursesPage;