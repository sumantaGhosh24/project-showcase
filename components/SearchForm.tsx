"use client";

import {useState, useEffect} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {Search, X} from "lucide-react";

import {Input} from "@/components/ui/input";
import {formUrlQuery} from "@/sanity/utils";

const SearchForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";
      if (search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: search,
        });
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }
      router.push(newUrl, {scroll: false});
    }, 300);
    return () => clearTimeout(delayDebounceFn);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <form className="mx-auto mt-10 flex w-full items-center justify-center sm:-mt-10 sm:px-5">
      <label className="relative flex w-full max-w-3xl items-center justify-center">
        <Search className="absolute left-8 text-black" />
        <Input
          className="h-fit border-0 bg-white py-6 pl-20 pr-8 text-[24px] font-normal leading-[30px] text-black !ring-0 !ring-offset-0 placeholder:text-black"
          type="text"
          placeholder="Search project..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <X
            className="absolute right-8 cursor-pointer text-black"
            onClick={() => setSearch("")}
          />
        )}
      </label>
    </form>
  );
};

export default SearchForm;
