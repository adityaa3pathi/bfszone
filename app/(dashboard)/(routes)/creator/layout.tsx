// import { auth } from "@clerk/nextjs/server";
// import { Children } from "react";
// import { isTeacher } from "../../../../lib/teacher";
// import { redirect } from "next/navigation";

// const Teacherlayout = ({
//     children
// }: {
//     children: React.ReactNode;
// }) => {

//     const {userId} = auth();

    
//     return( <>
//     {Children}
//     </>)
// }

import { auth } from "@clerk/nextjs/server";
import { ReactNode } from "react";
import { isTeacher } from "../../../../lib/teacher";
import { redirect } from "next/navigation";

const TeacherLayout = async ({
    children
}: {
    children: ReactNode;
}) => {

    const { userId } = await auth();

    const isUserTeacher = await isTeacher(userId);
    
    if (!isUserTeacher) {
        redirect("/");  // Redirect if the user is not a teacher
    }

    return (
        <>
            {children}  {/* Correct way to render children */}
        </>
    );
};

export default TeacherLayout;
