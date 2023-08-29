"use client";
import { useState } from "react";
import { BsSearch, BsMicFill, BsXLg } from "react-icons/bs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchTerm = useSearchParams()?.get("searchTerm") as string;
  const [search, setSearch] = useState(searchTerm);

  const handleClear = () => setSearch("");
  
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    if(!search.trim()) return;
    else router.push(`${pathname}?searchTerm=${search.trim()}&start=1`);
  }

  return (
    <form className="flex-1 flex items-center shadow-md border border-gray-200 rounded-full py-3 px-5 max-w-[600px]" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none tracking-wide w-full min-w-[60px] text-[15px] sm:text-[16px]"
      />
      <button type="button" onClick={handleClear} className="sm:px-2 text-sm sm:text-base text-gray-500"><BsXLg /></button>
      <div className="flex pl-1 sm:pl-3 ml-1 py-1 border-l border-gray-500 space-x-2 text-sm sm:text-base">
        <button type="button" className="text-blue-500"><BsMicFill /></button>
        <button type="submit" className="text-blue-500"><BsSearch /></button>
      </div>
    </form>
  );
};

export default SearchForm;
