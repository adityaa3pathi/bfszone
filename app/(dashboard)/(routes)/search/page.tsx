import { auth } from "@clerk/nextjs/server";
import { getCourses } from "../../../../actions/get-courses";
import prismadb from "../../../../lib/db";
import { redirect } from "next/navigation";
import { SearchPageClient } from "./SearchPageClient";

interface SearchPageProps {
  title: string;
  categoryId: string;
}

const SearchPage = async (searchParams: SearchPageProps) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const categories = await prismadb.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

  return <SearchPageClient courses={courses} userId={userId} />;
};

export default SearchPage;
