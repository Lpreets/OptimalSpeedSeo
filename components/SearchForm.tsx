"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { formUrlQuery } from "@/sanity/utills";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchForm = () => {

  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();


  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";
      
      if(search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: search
        })
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
          value: ""
        })
      }

      router.push(newUrl, {scroll: false})
    }, 300)
 
    return () => { clearTimeout(delayDebounceFn)
    }
  }, [search])


  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <Image
          src="/magnifying-glass.svg"
          className="absolute left-8"
          width={32}
          height={32}
          alt="search icon"
        />
        <Input 
            className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white 800" 
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SearchForm;
