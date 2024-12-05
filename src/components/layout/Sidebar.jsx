import React, { useContext, useState } from "react";
import SidebarLink from "./SidebarLink";
import { sidebar } from "../../constants/sidebarData";
import {
  MdOutlineContactSupport,
  MdOutlineDashboard,
  MdOutlineTableChart,
} from "react-icons/md";
import {
  TbAmbulance,
  TbCaretDown,
  TbCaretDownFilled,
  TbCreditCard,
  TbCreditCardPay,
} from "react-icons/tb";
import { AppContext } from "../../context/AppContext";
import { CiViewTable } from "react-icons/ci";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LuUserCog } from "react-icons/lu";

import { IoSettingsOutline } from "react-icons/io5";
import { BsPatchCheck } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";

const Sidebar = () => {
  const {
    navigate,
    activeLink,
    setActiveLink,
    tab,
    setTab,
    requestOpen,
    setRequestOpen,
  } = useContext(AppContext);

  return (
    <div className="w-[70%] h-full md:w-[40%] fixed top-0 left-0 -translate-x-full lg:translate-x-0 lg:static border-r bg-gray-50  lg:w-[20%] xl:w-[20%] flex flex-col justify-start items-start  gap-1 overflow-y-auto">
      <img
        src="https://fareshare.vercel.app/assets/fareshare_logo-15fzbzBE.svg"
        alt=""
        className="w-[60%] mt-2 mb-4 ml-4"
      />
      <div className="w-full flex flex-col pb-4 justify-start items-start gap-2">
        <SidebarLink
          data={{ title: "Home", url: "/home", icon: <MdOutlineDashboard /> }}
          key={"home"}
        />
        <div className="w-full flex flex-col justify-start items-start gap-2 relative">
          <div
            onClick={() => {
              setActiveLink("Request a ride");
              setRequestOpen((prev) => !prev);
            }}
            className="w-full flex items-center justify-start gap-2 h-12  "
          >
            <span
              className={`transform  w-[10px] h-[18px] ${
                activeLink === "Request a ride"
                  ? "bg text-[#fff]"
                  : "bg-gray-100 text-[#191919]"
              } rounded-r-full`}
            ></span>
            <button
              className={`w-[90%] rounded-full h-12 transition-all duration-300 flex justify-between items-center gap-2 px-4 pr-6 ${
                activeLink === "Request a ride"
                  ? "bg text-[#fff]"
                  : "bg-gray-100 text-black/40"
              }  font-medium text-xl`}
            >
              <div className="w-auto flex gap-2 justify-start items-center">
                <span
                  className={`${
                    activeLink == "Request a ride"
                      ? "text-white"
                      : "text-[#c00000]"
                  }`}
                >
                  <TbAmbulance />
                </span>
                <span className="capitalize text-[13px]  leading-none font-bold ">
                  {"Request a ride"}
                </span>
              </div>
              <TbCaretDownFilled className="text-xs" />
            </button>
          </div>
          <div
            className={`w-full bg-transparent ${
              requestOpen
                ? "flex flex-col items-start ml-9 gap-4 py-2"
                : "hidden"
            } h-auto rounded-xl transition-all duration-300 `}
          >
            <button
              onClick={() => {
                setTab("corporate");
                navigate("Request a ride", "/ride/new-request/info");
              }}
              className={`w-[85%]  rounded-full transition-all duration-300 flex justify-between items-center gap-2 px-6 pr-6 ${
                tab === "corporate" ? " text-[#c00000]" : " text-black/40"
              }  font-medium text-xl`}
            >
              <div className="w-auto flex gap-2 justify-center items-center">
                <span className="capitalize text-[13px]  leading-none font-bold ">
                  {"Corporate Ride"}
                </span>
              </div>
            </button>
            <button
              onClick={() => {
                setTab("medical");
                navigate("Request a ride", "/ride/new-request/info");
              }}
              className={`w-[85%]  rounded-full transition-all duration-300 flex justify-between items-center gap-2 px-6 pr-6 ${
                tab === "medical" ? " text-[#c00000]" : " text-black/40"
              }  font-medium text-xl`}
            >
              <div className="w-auto flex gap-2 justify-center items-center">
                <span className="capitalize text-[13px]  leading-none font-bold ">
                  {"Medical Ride"}
                </span>
              </div>
            </button>
          </div>
          <SidebarLink
            data={{
              title: "Bookings",
              url: "/bookings",
              icon: <MdOutlineTableChart />,
            }}
            key={"home"}
          />
          <SidebarLink
            data={{
              title: "Chats",
              url: "/chats",
              icon: <IoChatboxEllipsesOutline />,
            }}
            key={"home"}
          />
          {/* <SidebarLink
            data={{
              title: "Profile",
              url: "/profile",
              icon: <LuUserCog />,
            }}
            key={"profile"}
          /> */}
          <SidebarLink
            data={{
              title: "Payments & Invoices",
              url: "/payments-and-invoices",
              icon: <TbCreditCardPay />,
            }}
            key={"payments"}
          />
          <SidebarLink
            data={{
              title: "Contact Us",
              url: "/contact-us",
              icon: <MdOutlineContactSupport />,
            }}
            key={"contact"}
          />

          <SidebarLink
            data={{
              title: "Settings",
              url: "/settings/profile",
              icon: <IoSettingsOutline />,
            }}
            key={"settings"}
          />
          {/* <SidebarLink
            data={{
              title: "Terms & Conditions",
              url: "/terms-and-conditions",
              icon: <BsPatchCheck />,
            }}
            key={"terms"}
          />
          <SidebarLink
            data={{
              title: "Privacy Policy",
              url: "/privacy-policy",
              icon: <MdOutlinePrivacyTip />,
            }}
            key={"privacy"}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
