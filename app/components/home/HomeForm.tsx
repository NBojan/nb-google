"use client"

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BsSearch, BsMicFill } from "react-icons/bs";

const HomeForm = () => {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!search.trim() || loading) return;
        else router.push(`/search/web?searchTerm=${search.trim()}`);
    }

    const handleLucky = async () => {
        setLoading(true);
        const response = await axios(
          "https://random-word-api.herokuapp.com/word"
        ).catch((err) => console.log(err.message));
        
        if(response && response.data) router.push(`/search/web?searchTerm=${response.data[0]}&start=1`);
        
        setLoading(false);
    }

    return ( 
        <form className="w-full max-w-[584px]" onSubmit={handleSubmit}>
            <div className="flex text-sm sm:text-base items-center border border-gray-200 rounded-full py-3 px-4 mb-6 hover:shadow-md focus-within:shadow-md transition-shadow">
                <label htmlFor="search" className="pr-3"><BsSearch /></label>
                <input type="text" className="w-full outline-none tracking-wide" id="search" name="search" value={search} onChange={e => setSearch(e.target.value)} />
                <label htmlFor="search" className="pl-3"><BsMicFill /></label>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-3 sm:space-y-0">
                <button type="submit" className="btn text-sm sm:text-[15px] py-2 px-4 bg-[#f8f9fa] capitalize tracking-wide hover:shadow-md hover:border-gray-200">google search</button>
                <button type="button" className="btn text-sm sm:text-[15px] py-2 px-4 bg-[#f8f9fa] capitalize tracking-wide hover:shadow-md hover:border-gray-200 disabled:text-gray-500"onClick={handleLucky} disabled={loading}>
                    i'm feeling lucky
                </button>
            </div>
        </form>
    );
}
 
export default HomeForm;