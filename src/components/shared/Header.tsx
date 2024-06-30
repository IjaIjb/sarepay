import React, { useRef, useState } from "react";
import bell from "../../assets/dashboard/sidebar/bell.svg";
import { Link, useNavigate } from "react-router-dom";
import LogOutModal from "./LogOutModal";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import avatar from "../../assets/Ellipse 1294.png"
import { FaRegBell } from "react-icons/fa";


const Header = () => {
  const divRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  const [values, setValues] = useState({
    showLogOut: false,
  });

  const handleCancel = (e: any) => {
    e.preventDefault();
    setDisplay(false);
    setValues({
      showLogOut: false,
    });
  };

  const handleLogoutModal = (e: any) => {
    e.preventDefault();
    // setItemData(itemData);
    setDisplay(true);
    setValues({
      ...values,
      showLogOut: true,
    });
  };

  const showDefaultConnectors = () => {
    return <>{values.showLogOut && <LogOutModal />}</>;
  };
  // const userEmail = sessionStorage.getItem("userEmail");
  const regionManager = sessionStorage.getItem("regionManager");
  // console.log(regionManager)
  // Check if emailAddress is not null before extracting the name part

  // Output the name part
  // console.log(namePart);


  // Function to handle logout
  const handleLogout = async () => {
    try {
     // Sign out the current user
      // Perform any additional cleanup or redirection
      sessionStorage.removeItem("userEmail"); // Remove user email from session storage
      navigate("/login"); // Redirect to the login page or any other desired destination
    } catch (error) {
      console.error("An unexpected error occurred during logout:", error);
      // Handle error if needed
    }
  };
  // Function to extract the name part
  function getEmailName(email: any) {
    var atIndex = email.indexOf("@");
    return atIndex !== -1 ? email.slice(0, atIndex) : email;
  }
  return (
    <div className=" flex justify-center">
      <div className="flex justify-end items-center  gap-7">
        {/* <Search /> */}

        {/* <button
        className="rounded-[15px]  px-4 h-[50px] py-[2px] bg-primary text-white text-sm  flex gap-2.5 items-center mr-2"
        type="button"
        ref={divRef}
        onClick={(e: any) => {
          e.preventDefault();
          setShowMoveMoney(!showMoveMoney);
        }}
      >
        <img src={header} alt="" className="w-[50px] h-[40px]" />
      </button> */}
        {/* <img src={bell} alt="" className="" /> */}

        <div className="flex items-center gap-2">
          <div className=" relative rounded-full bg-primary p-2 flex items-center justify-center">
          <FaRegBell className="text-white "/>
          </div>
          <img src={avatar} alt="Logo" className="px-3" />

          <div className="rounded-full flex w-full gap-2 items-center">
            {/* <img src={profile} alt="" className="rounded-full" /> */}
            <h5 className="text-[#000000] text-[16px] font-[400] ">
            Tlag Entertainment 
            </h5>
            <div className="relative">
            {!open ? (
               <button
              type="button">
              <IoIosArrowDown
                className={`
                     relative  `}
                     onClick={() => {
                      setOpen((prev) => !prev);
                    }}
              />
              </button>
            ) : (
               <button
              type="button">
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
                // onClick={handleLogout}
              >
                <button>Profile</button>
                <button onClick={handleLogout}>Log out</button>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          display && "w-full h-full bg-[#747380D1] opacity-[82%] z-[1000]"
        } fixed top-0 left-0`}
        onClick={(e) => handleCancel(e)}
      ></div>

      {display && (
        <div className="fixed top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-white  z-[200] rounded-[10px] overflow-hidden h-fit">
          {showDefaultConnectors()}
        </div>
      )}
    </div>
  );
};

export default Header;
