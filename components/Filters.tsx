"use client";

import {useState} from "react";
import {useSearchParams, useRouter} from "next/navigation";

import {formUrlQuery} from "@/sanity/utils";

interface FiltersProp {
  category: {
    image: any;
    name: string;
    slug: any;
    _id: string;
  }[];
}

const Filters = ({category}: FiltersProp) => {
  const [active, setActive] = useState("");
  const searchParms = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    let newUrl = "";
    if (active === link) {
      setActive("");
      newUrl = formUrlQuery({
        params: searchParms.toString(),
        keysToRemove: ["category"],
      });
    } else {
      setActive(link);
      newUrl = formUrlQuery({
        params: searchParms.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }
    router.push(newUrl, {scroll: false});
  };

  return (
    <ul className="no-scrollbar mt-5 flex w-full max-w-full gap-2 overflow-auto text-[16px] font-normal leading-[20px] text-black sm:max-w-2xl">
      {category.map(({_id, name, slug}) => (
        <button
          key={_id}
          onClick={() => handleFilter(slug.current)}
          className={`${
            active === slug.current
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {name}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
