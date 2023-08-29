"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


const Pagination = ({searchTerm, start}:{searchTerm:string, start:string | undefined}) => {
    const pathname = usePathname();
    const startIndex = Number(start) || 1;
    
    return (  
        <div className="flex space-x-6">
            {startIndex >= 11 && <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`} className="flex flex-col items-center group text-blue-800">
                <span><BsChevronLeft /></span>
                <span className="group-hover:underline">Previous</span>
            </Link>
            }

            {startIndex <= 91 && <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`} className="flex flex-col items-center group text-blue-800">
                <span><BsChevronRight /></span>
                <span className="group-hover:underline">Next</span>
            </Link>
            }
        </div>
    );
}
 
export default Pagination;