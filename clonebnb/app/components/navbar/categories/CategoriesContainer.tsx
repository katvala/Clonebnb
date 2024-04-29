"use client";

import {
  MdOutlineHomeWork,
  MdCabin,
  MdSportsGolf,
  MdOutlineCastle,
  MdOutlineDownhillSkiing,
  MdOutlinePalette,
} from "react-icons/md";
import {
  PiBoat,
  PiCactus,
  PiLighthouse,
  PiSwimmingPool,
  PiTree,
  PiTreePalm,
} from "react-icons/pi";
import { TbBeach, TbChefHat } from "react-icons/tb";
import { BiDish } from "react-icons/bi";
import { TbUfo } from "react-icons/tb";
import { HiOutlineHomeModern, HiOutlineFire } from "react-icons/hi2";
import { IoSnowOutline, IoBedOutline } from "react-icons/io5";
import { SlCup } from "react-icons/sl";

import Category from "./Category";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Rooms",
    icon: IoBedOutline,
    description: "Private rooms, shared rooms, and entire homes",
  },
  {
    label: "Cabins",
    icon: MdCabin,
    description: "Cozy cabins, spacious lodges, and everything in between",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "Sunny beaches, ocean views, and sandy shores",
  },
  // {
  //   label: "Golfing",
  //   icon: MdSportsGolf,
  // },
  {
    label: "OMG!",
    icon: TbUfo,
    description: "Unique stays, one-of-a-kind spaces",
  },
  {
    label: "Luxury",
    icon: BiDish,
    description: "High-end homes, luxury retreats, and more",
  },
  {
    label: "Amazing Pools",
    icon: PiSwimmingPool,
    description: "Private pools, infinity pools, and more",
  },
  {
    label: "Tropical",
    icon: PiTreePalm,
    description: "Palm trees, sandy beaches, and tropical vibes",
  },
  {
    label: "Castles",
    icon: MdOutlineCastle,
    description: "Castles, manors, and royal retreats",
  },
  // {
  //   label: "Breakfasts",
  //   icon: SlCup,
  // },
  {
    label: "Towers",
    icon: PiLighthouse,
    description: "Lighthouses, lookout towers, and more",
  },
  {
    label: "Historical",
    icon: MdOutlineHomeWork,
    description: "Historic homes, monuments, and more",
  },
  {
    label: "Tiny Homes",
    icon: HiOutlineHomeModern,
    description: "Tiny homes, micro homes, and more",
  },
  // {
  //   label: "Desert",
  //   icon: PiCactus,
  // },
  {
    label: "Trending",
    icon: HiOutlineFire,
    description: "Popular homes, unique stays, and more",
  },
  {
    label: "Treehouses",
    icon: PiTree,
    description: "Treehouses, cabins, and more",
  },
  {
    label: "Arctic",
    icon: IoSnowOutline,
    description: "Igloos, ice hotels, and more",
  },
  // {
  //   label: "Skiing",
  //   icon: MdOutlineDownhillSkiing,
  // },
  {
    label: "Creative spaces",
    icon: MdOutlinePalette,
    description: "Artistic homes, creative spaces, and more",
  },
  {
    label: "Boats",
    icon: PiBoat,
    description: "Houseboats, sailboats, and more",
  },
  // {
  //   label: "Kitchen",
  //   icon: TbChefHat,
  // },
];

const CategoriesContainer = () => {
  const pathname = usePathname();
  const params = useSearchParams();
  const category = params?.get("category");

  if (pathname !== "/") return;

  return (
    <div className="phone:px-10 large:px-20 phone:my-5 w-full shadow-md phone:shadow-none shadow-light-gray/10 flex items-center">
      <div className="px-5 phone:px-0 flex items-center gap-5 phone:gap-10 w-full no_scrollbar overflow-x-scroll">
        {categories.map((item) => (
          <Category
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesContainer;
