import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
    return (  
        <header className="px-6">
            <nav className="flex justify-end items-center space-x-2 sm:space-x-4 h-[4rem]">
                <Link href="https://mail.google.com/" className="hover:underline">Gmail</Link>
                <Link href="https://image.google.com/" className="hover:underline">Images</Link>
                <button type="button" className="text-xl rounded-full p-2 hover:bg-gray-200 transition"><TbGridDots /></button>
                <button type="button" className="btn btn-m btn-prim sign-in-btn">Sign in</button>
            </nav>
        </header>
    );
}
 
export default HomeHeader;