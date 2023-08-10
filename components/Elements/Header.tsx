'use client'
'use client'
import React from "react";
import { useRouter } from "next/navigation";
import SidenavUsable from "../SideNav/SidenavUsable";
import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";
import { DialogDemo } from "./Dialog";
import { DropdownMenuRadioGroupDemo } from "./Dropdown";
import { DateSelector } from "./DateSelector";
import { Input } from "../ui/input";
import Link from "next/link";
import InsideEventDetails from "./InsideEventDetails";

const Header = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between text-xs min-[425px]:text-sm items-center px-2 min-[425px]:px-4 md:px-16 py-4">
      <div>
        <span className="text-gray-400 px-1">דאשבורד / </span>
        <span className="text-black px-1">כללי</span>
      </div>
      <div className="flex gap-x-3 min-[425px]:gap-x-8 items-center">
        <Button className="flex items-center gap-2 px-2 min-[425px]:px-4 py-2 text-white rounded-lg bg-[#ED3C95] hover:bg-[#ED3C95]" onClick={() => {
          router.push('/home/Steps/1');
        }}>
          אירוע חדש
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_201_6522)">
              <path
                d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_201_6522">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </Button>
        {/* <DialogDemo>
          <InsideEventDetails/>
        </DialogDemo> */}
        <div className="flex gap-x-2 min-[425px]:gap-x-4">
          <Button className="relative h-8 border border-gray rounded-lg flex items-center justify-center hover:bg-white bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="z-10"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="absolute -top-2 -right-2 rounded-full w-4 h-4 flex justify-center items-center bg-pink-500">
              <span className="flex-shrink-0 not-italic text-sm text-white">
                2
              </span>
            </div>
          </Button>
          <SidenavUsable />
        </div>
      </div>
    </nav>
  );
};

export default Header;
