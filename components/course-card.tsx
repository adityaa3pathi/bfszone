import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "../lib/format";

interface CourseCardProps {
    id: string;
    title: string;
    imageUrl: string;
    chaptersLength: number;
    price: number;
    progress: number | null;
    category: string;
}

export const CourseCard = ({
    id,
    title,
    imageUrl,
    chaptersLength,
    price,
    progress,
    category,
}: CourseCardProps) => {
  return ( 
    <div>


       <Link href={`/courses/${id}`}>
       <div className=" group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full bg-slate-400 ">
         <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image 
            fill
           className="object-cover"
           alt={title}
          src={imageUrl}/>

       </div>
               <div className="flex flex-col pt-2">
               <div className="text-lg md:text-base font-medium text-gray-800 group-hover:text-gray-800 transition line-clamp-2">     
                       {title}
                   </div>
                       <p className="text-xs 
                       text-gray-800 ">
                       {category}
                       </p>
                              <div className="my-3 flex items-center gap-x-2 tet-sm md: text-xs">
                            <div className="flex items-center gap-x-1 text-gray-800 ">

                    <span>
                        {chaptersLength} {chaptersLength === 1 ? "Module" : "Modules"}
                    </span>
                   </div>

                 </div>
                    {progress !== null ? (
                        <div>
                            todo: Progress component
                        </div>
                    ): (
                        <p className="text-md md:text-sm font-medium text-gray-800 ">
                                {formatPrice(price)}
                        </p>
                    )}

            </div>
       </div>
       </Link>
    </div>
  )

}