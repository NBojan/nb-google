import Link from "next/link";
import Image from "next/image";
import { BottomHeaderPart, SearchForm } from "../index";
import { TbSettings, TbGridDots } from "react-icons/tb";

const SearchHeader = () => {
    return (  
        <header className="px-6 border-b border-b-gray-200">
            <nav className="flex justify-between items-center h-[108px] xs:h-[4.5rem] mb-4 xs:mb-6">
                <div className="flex-1 flex items-center flex-col xs:flex-row xs:space-x-6 sm:mr-6 ">
                    <Link href={"/"}>
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png" width={120} height={40} alt="Google" />
                    </Link>
                    <SearchForm />
                </div>

                <div className="hidden sm:flex items-center">
                    <div className="flex space-x-1">
                        <button type="button" className="flex rounded-full text-xl p-2 hover:bg-gray-200"><TbSettings /></button>
                        <button type="button" className="flex rounded-full text-xl p-2 hover:bg-gray-200"><TbGridDots /></button>
                    </div>
                    <button type="button" className="btn btn-m btn-prim sign-in-btn ml-2">Sign in</button>
                </div>
            </nav>

            <BottomHeaderPart />
        </header>
    );
}
 
export default SearchHeader;