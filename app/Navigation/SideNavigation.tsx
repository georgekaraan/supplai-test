"use client";

import { usePathname, useRouter } from "next/navigation";
import { IconType } from "react-icons";
import { FaTruckMoving } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { RiRestaurantLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiSteeringWheelFill } from "react-icons/pi";
import { HiOutlineDocument } from "react-icons/hi";
import { FaRoute } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

interface MenuItem {
  icon: IconType;
  text: string;
  pathname: string;
}

const MenuItems: Array<MenuItem> = [
  {
    icon: LuLayoutDashboard,
    text: "Dashboard",
    pathname: "/",
  },
  {
    icon: FaRoute,
    text: "Routes",
    pathname: "/routes",
  },
  {
    icon: RiRestaurantLine,
    text: "Clients",
    pathname: "/clients",
  },
  {
    icon: PiSteeringWheelFill,
    text: "Drivers",
    pathname: "/drivers",
  },
  {
    icon: FaTruckMoving,
    text: "Vehicles",
    pathname: "/vehicles",
  },
  {
    icon: HiOutlineDocument,
    text: "SoA",
    pathname: "/soa",
  },
];

const SideNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log("HERE IS PATHNAME", pathname);

  const handleItemClick = (item: MenuItem) => {
    router.push(item.pathname);
  };

  return (
    <div className="flex flex-col justify-between bg-zinc-100  border-r-4 border-r-gray-200 ">
      <div className="p-[4px] lg:px-2 lg:w-[260px]">
        {MenuItems.map((item, id) => (
          <div
            key={id}
            className={`flex flex-col lg:flex-row gap-1 lg:gap-6 p-4 lg:py-2 my-1 items-center hover:bg-zinc-700 hover:text-white ${
              item.pathname === pathname &&
              "bg-[#00B3E2] text-white  hover:bg-[#00B3E2] cursor-default"
            } rounded-lg cursor-pointer`}
            onClick={() => handleItemClick(item)}
          >
            <item.icon size={28} />
            <span className="text-xs lg:text-base">{item.text}</span>
          </div>
        ))}
      </div>
      <div>
        <div className="p-[4px] lg:px-2 lg:w-[260px]">
          <div
            className={`flex flex-col lg:flex-row gap-1 lg:gap-6 p-4 lg:py-2 items-center hover:bg-zinc-700 hover:text-white rounded-lg cursor-pointer`}
          >
            <BiSupport size={28} />
            <span className="text-xs lg:text-base">Support</span>
          </div>
        </div>
        <div className="p-[4px] lg:px-2 lg:w-[260px]">
          <div
            className={`flex flex-col lg:flex-row gap-1 lg:gap-6 p-4 lg:py-2 items-center hover:bg-zinc-700 hover:text-white rounded-lg cursor-pointer`}
          >
            <RxExit size={28} />
            <span className="text-xs lg:text-base">Exit Application</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigation;
