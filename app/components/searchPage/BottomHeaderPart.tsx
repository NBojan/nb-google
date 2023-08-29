"use client";

import Link from "next/link";
import { links } from "@/utils/searchHeaderLinks";
import { useSearchParams, usePathname } from "next/navigation";

const BottomHeaderPart = () => {
  const pathname = usePathname();
  const searchTerm = useSearchParams().get("searchTerm") as string;

  return (
    <div>
      <div className="flex space-x-4 justify-center md:justify-start md:pl-[9rem]">
        {links.map((link) => (
          <Link
            href={`${link.path}?searchTerm=${searchTerm}&start=1`}
            key={link.id}
            className={`flex items-center text-sm text-gray-700 space-x-1.5 px-2 pb-3 border-b-[3px] border-b-transparent 
            ${link.path === pathname && "active-link"}`}
          >
            <span>{link.icon}</span>
            <span>{link.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomHeaderPart;
