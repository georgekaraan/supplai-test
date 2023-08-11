"use client";

import {
  BsYoutube,
  BsMicFill,
  BsBell,
  BsCameraVideo,
  BsPersonCircle,
  BsFillPersonFill,
} from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { useState } from "react";

const TopNavigation = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center gap-6 cursor-pointer">
        <HiOutlineMenu size={26} />
        <div className="flex items-center gap-1">
          <Image src="/logo.png" width="200" height="100" alt="logo" />
        </div>
      </div>
      <div className="hidden md:flex gap-2 min-w-[300px] lg:w-[620px]">
        <div className="flex w-full">
          <input
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full px-4 py-2 text-zinc-500 bg-zinc-50 border-[1px] border-zinc-700 focus:bg-gray-200 rounded-full focus:outline-none focus:ring-[1px] focus:ring-sky-500 placeholder:text-zinc-400 font-family-[KronaOne] font-size-[13px] font-weight-[300] letter-spacing-[1.4px] shadow-md"
          />
          <div className="flex items-center  px-5 py-3 rounded-tr-full rounded-br-full">
            <BiSearch size={22} />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center p-3 rounded-full hover:bg-zinc-700 hover:text-white cursor-pointer shadow-md bg-[#00B3E2]">
          <BsBell size={22} />
        </div>
        <div className="flex items-center p-3 rounded-full hover:bg-zinc-700 hover:text-white  cursor-pointer shadow-md bg-[#00B3E2]">
          <BsFillPersonFill size={22} />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
