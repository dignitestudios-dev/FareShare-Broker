import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuUserCog } from "react-icons/lu";
import { BsPatchCheck } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";

const SettingsLayout = ({ page }) => {
  const { activeLink, setActiveLink, navigate } = useContext(AppContext);
  const [currentLink, setCurrentLink] = useState("profile");
  return (
    <div className="w-full lg:h-[calc(100%)] flex flex-col lg:flex-row  border rounded-3xl ">
      <div className="w-full lg:w-[30%] p-4 h-full flex flex-col gap-2 justify-start items-start border-b lg:border-r">
        <button
          onClick={() => {
            navigate("Settings", "/settings/profile");
            setCurrentLink("profile");
          }}
          className={`w-full rounded-full h-12 transition-all duration-300 flex justify-start items-center gap-2 px-4 ${
            currentLink === "profile"
              ? "bg text-[#fff]"
              : "bg-gray-50 text-[#191919]"
          }  font-medium text-xl`}
        >
          <span>
            <LuUserCog />
          </span>
          <span className="text-sm ">Profile</span>
        </button>
        <button
          onClick={() => {
            navigate("Settings", "/settings/bank-info");
            setCurrentLink("bank-info");
          }}
          className={`w-full rounded-full h-12 transition-all duration-300 flex justify-start items-center gap-2 px-4 ${
            currentLink === "bank-info"
              ? "bg text-[#fff]"
              : "bg-gray-50 text-[#191919]"
          }  font-medium text-xl`}
        >
          <span>
            <BsPatchCheck />
          </span>
          <span className="text-sm ">Bank Information</span>
        </button>
        <button
          onClick={() => {
            navigate("Settings", "/settings/notifications");
            setCurrentLink("notifications");
          }}
          className={`w-full rounded-full h-12 transition-all duration-300 flex justify-start items-center gap-2 px-4 ${
            currentLink === "notifications"
              ? "bg text-[#fff]"
              : "bg-gray-50 text-[#191919]"
          }  font-medium text-xl`}
        >
          <span>
            <IoNotificationsOutline />
          </span>
          <span className="text-sm ">Notifications</span>
        </button>
        <button
          onClick={() => {
            navigate("Settings", "/terms-and-conditions");
            setCurrentLink("terms-and-conditions");
          }}
          className={`w-full rounded-full h-12 transition-all duration-300 flex justify-start items-center gap-2 px-4 ${
            currentLink === "terms-and-conditions"
              ? "bg text-[#fff]"
              : "bg-gray-50 text-[#191919]"
          }  font-medium text-xl`}
        >
          <span>
            <BsPatchCheck />
          </span>
          <span className="text-sm ">Terms & Conditions</span>
        </button>
        <button
          onClick={() => {
            navigate("Settings", "/privacy-policy");
            setCurrentLink("privacy-policy");
          }}
          className={`w-full rounded-full h-12 transition-all duration-300 flex justify-start items-center gap-2 px-4 ${
            currentLink === "privacy-policy"
              ? "bg text-[#fff]"
              : "bg-gray-50 text-[#191919]"
          }  font-medium text-xl`}
        >
          <span>
            <MdOutlinePrivacyTip />
          </span>
          <span className="text-sm ">Privacy Policy</span>
        </button>
      </div>
      <div className="w-full lg:w-[70%] h-full p-4">{page}</div>
    </div>
  );
};

export default SettingsLayout;
