import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import avatar from "../../assets/Ellipse 1294.png";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex justify-center">
      <div className="flex justify-end items-center  gap-7">
        <div className="flex items-center gap-2">
          <div className=" relative rounded-full bg-primary p-2 flex items-center justify-center">
            <FaRegBell className="text-white " />
          </div>
          <img src={avatar} alt="Logo" className="px-3" />

          <div className="rounded-full flex w-full gap-2 items-center">
            <h5 className="text-[#000000] text-[16px] font-[400] ">
              Tlag Entertainment
            </h5>
            <div className="relative">
              {!open ? (
                <button type="button">
                  <IoIosArrowDown
                    className={`
                     relative  `}
                    onClick={() => {
                      setOpen((prev) => !prev);
                    }}
                  />
                </button>
              ) : (
                <button type="button">
                  <IoIosArrowUp
                    className={`
                     relative  `}
                    onClick={() => {
                      setOpen((prev) => !prev);
                    }}
                  />
                </button>
              )}
              <div
                className={`${
                  open
                    ? " max-h-fit py-2.5 px-2.5 right-0 top-[45px]"
                    : " max-h-0 overflow-hidden top-0 "
                } transition-[top] duration-200 ease-in-out absolute  w-[136px] rounded-[10px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex flex-col gap-2.5 bg-white  z-10`}
              >
                <button>Profile</button>
                <button>Log out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
