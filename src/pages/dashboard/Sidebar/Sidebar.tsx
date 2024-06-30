import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import logo from "../../../assets/Frame 1000004781.png";
import {
  MdBusinessCenter,
  MdDashboard,
  MdOutlineCollections,
} from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { GiExpense } from "react-icons/gi";


type Props = {
  toggle: () => void;
  DrawerOpen: boolean;
  open: () => void;
};

const Sidebar = (props: Props) => {
  const url = useLocation();
  const { pathname } = url;
  const pathnames = pathname.split("/").filter((x) => x);
  const [showUser, setShowUser] = useState(false);

  // Close all section if side drawer is closed
  useEffect(() => {
    if (props.DrawerOpen === false) {
      setShowUser(false);
    }
  }, [props.DrawerOpen]);

  return (
    <aside
      className={`${
        props.DrawerOpen ? "" : ""
      } relative bg-primary w-[260px] z-[100] pl-3  border-r border-[#ECEDEF] hide-scrollbar overflow-y-scroll h-full`}
    >
      <div className="flex  items-center justify-between px-2 md:px-4">
        <div></div>
        <div className="flex justify-center   py-7">
          <Link to="/dashboard/home">
            <img src={logo} alt="Logo" className="" />
          </Link>
        </div>
        <button
          onClick={() => {
            props.toggle();
          }}
          className=""
        >
          {props.DrawerOpen ? (
            <AiOutlineClose className="w-4 h-4 md:w-6 text-white md:h-6 font-bold " />
          ) : (
            <AiOutlineMenu className="w-4 h-4 md:w-6 md:h-6  font-bold hidden " />
          )}
        </button>
        
      </div>

      <div className="mt-14">
        <div className="">
          <div className="mb-6">
            <Link to="/dashboard/home" className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "home"].every((ai) => pathnames.includes(ai))
                    ? "bg-white text-[#164988] mr-4"
                    : " text-[#A4B0C3EF]"
                } gap-x-4 px-3 flex items-center  rounded-[6px] py-[6px] `}
              >
                {["dashboard", "home"].every((ai) => pathnames.includes(ai)) ? (
                  <MdDashboard />
                ) : (
                  <MdDashboard className="text-[#A4B0C3EF]" />
                )}

                <h5 className="text-[20px] font-[500]   ">Dashboard</h5>
              </div>
              {["dashboard", "home"].every((ai) => pathnames.includes(ai)) && (
                <div className="absolute top-0 right-0 h-full rounded-l-[10px]  border-[3px] border-`white"></div>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="">
          <div className="mb-6">
            <Link to="/dashboard/business" className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "business"].every((ai) =>
                    pathnames.includes(ai)
                  )
                    ? "bg-white text-[#164988] mr-4"
                    : " text-[#A4B0C3EF]"
                } gap-x-4 px-3 flex items-center  rounded-[6px] py-[6px] `}
              >
                {["dashboard", "business"].every((ai) =>
                  pathnames.includes(ai)
                ) ? (
                  <MdBusinessCenter />
                ) : (
                  <MdBusinessCenter className="text-[#A4B0C3EF]" />
                )}

                <h5 className="text-[20px] font-[500]   ">Your Business</h5>
              </div>
              {["dashboard", "business"].every((ai) =>
                pathnames.includes(ai)
              ) && (
                <div className="absolute top-0 right-0 h-full rounded-l-[10px]  border-[3px] border-`white"></div>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="">
          <div className="mb-6">
            <Link to="/dashboard/disbursement" className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "disbursement"].every((ai) =>
                    pathnames.includes(ai)
                  )
                    ? "bg-white text-[#164988] mr-4"
                    : " text-[#A4B0C3EF]"
                } gap-x-4 px-3 flex items-center  rounded-[6px] py-[6px] `}
              >
                {["dashboard", "disbursement"].every((ai) =>
                  pathnames.includes(ai)
                ) ? (
                  <BiTransferAlt />
                ) : (
                  <BiTransferAlt className="text-[#A4B0C3EF]" />
                )}

                <h5 className="text-[20px] font-[500]   ">Disbursement</h5>
              </div>
              {["dashboard", "disbursement"].every((ai) =>
                pathnames.includes(ai)
              ) && (
                <div className="absolute top-0 right-0 h-full rounded-l-[10px]  border-[3px] border-`white"></div>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="">
          <div className="mb-6">
            <Link to="/dashboard/collections" className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "collections"].every((ai) =>
                    pathnames.includes(ai)
                  )
                    ? "bg-white text-[#164988] mr-4"
                    : " text-[#A4B0C3EF]"
                } gap-x-4 px-3 flex items-center  rounded-[6px] py-[6px] `}
              >
                {["dashboard", "collections"].every((ai) =>
                  pathnames.includes(ai)
                ) ? (
                  <MdOutlineCollections />
                ) : (
                  <MdOutlineCollections className="text-[#A4B0C3EF]" />
                )}

                <h5 className="text-[20px] font-[500]   ">Collections</h5>
              </div>
              {["dashboard", "collections"].every((ai) =>
                pathnames.includes(ai)
              ) && (
                <div className="absolute top-0 right-0 h-full rounded-l-[10px]  border-[3px] border-`white"></div>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="">
          <div className="mb-6">
            <Link to="/dashboard/commerce" className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "commerce"].every((ai) =>
                    pathnames.includes(ai)
                  )
                    ? "bg-white text-[#164988] mr-4"
                    : " text-[#A4B0C3EF]"
                } gap-x-4 px-3 flex items-center  rounded-[6px] py-[6px] `}
              >
                {["dashboard", "commerce"].every((ai) =>
                  pathnames.includes(ai)
                ) ? (
                  <CiShop />
                ) : (
                  <CiShop className="text-[#A4B0C3EF]" />
                )}

                <h5 className="text-[20px] font-[500]   ">E-commerce</h5>
              </div>
              {["dashboard", "commerce"].every((ai) =>
                pathnames.includes(ai)
              ) && (
                <div className="absolute top-0 right-0 h-full rounded-l-[10px]  border-[3px] border-`white"></div>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="">
          <div className="mb-6">
            <Link to="/dashboard/loan" className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "loan"].every((ai) => pathnames.includes(ai))
                    ? "bg-white text-[#164988] mr-4"
                    : " text-[#A4B0C3EF]"
                } gap-x-4 px-3 flex items-center  rounded-[6px] py-[6px] `}
              >
                {["dashboard", "loan"].every((ai) => pathnames.includes(ai)) ? (
                  <GiExpense />
                ) : (
                  <GiExpense className="text-[#A4B0C3EF]" />
                )}

                <h5 className="text-[20px] font-[500]   ">Loan</h5>
              </div>
              {["dashboard", "loan"].every((ai) => pathnames.includes(ai)) && (
                <div className="absolute top-0 right-0 h-full rounded-l-[10px]  border-[3px] border-`white"></div>
              )}
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="">
          <div className="mb-6">
            <Link to="/dashboard/settings" className="relative gap-1  ">
              <div
                className={`${
                  ["dashboard", "settings"].every((ai) =>
                    pathnames.includes(ai)
                  )
                    ? "bg-white text-[#164988] mr-4"
                    : " text-[#A4B0C3EF]"
                } gap-x-4 px-3 flex items-center  rounded-[6px] py-[6px] `}
              >
                {["dashboard", "settings"].every((ai) =>
                  pathnames.includes(ai)
                ) ? (
                  <IoIosSettings />
                ) : (
                  <IoIosSettings className="text-[#A4B0C3EF]" />
                )}

                <h5 className="text-[20px] font-[500]   ">Settings</h5>
              </div>
              {["dashboard", "settings"].every((ai) =>
                pathnames.includes(ai)
              ) && (
                <div className="absolute top-0 right-0 h-full rounded-l-[10px]  border-[3px] border-`white"></div>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="">
          <div className="mb-6">
            <div className="relative gap-1  ">
              <div
                className={`${" text-[#A4B0C3EF]"} gap-x-4 px-3 flex items-center  rounded-[6px] py-[6px] `}
              >
                <AiOutlineLogout />

                <h5 className="text-[20px] font-[500]   ">Logout</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
