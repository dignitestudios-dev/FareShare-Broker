import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuUserCog } from "react-icons/lu";
import { BsPatchCheck } from "react-icons/bs";
import { MdOutlinePrivacyTip } from "react-icons/md";
import axios from "axios";

const SettingsLayout = ({ page }) => {
  const { activeLink, setActiveLink, navigate, prodUrl, setSuccess, setError } =
    useContext(AppContext);

  const [loading, setLoading] = useState(false);
  const updateBank = async () => {
    setLoading(true);
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await axios.post(
        `${prodUrl}/finance/broker/rideBilling/update`,
        {},
        { headers }
      );
      if (response?.data?.success) {
        setLoading(false);
        setSuccess("Redirecting you to the stripe bank url.");
        window.location.href = response?.data?.data?.url;
      }
    } catch (error) {
      setError(error?.response?.data?.message);
      // console.error("Login failed:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };
  const [currentLink, setCurrentLink] = useState("profile");
  return (
    <div className="w-full lg:h-[calc(100%)] flex flex-col lg:flex-row bg-gray-50  border rounded-3xl ">
      <div className="w-full lg:w-[30%] p-4 h-full flex flex-col gap-2 justify-start items-start border-b lg:border-r">
        <button
          onClick={() => {
            navigate("Settings", "/settings/profile");
            setCurrentLink("profile");
          }}
          className={`w-full rounded-full h-12 transition-all duration-300 flex justify-start items-center gap-2 px-4 ${
            currentLink === "profile"
              ? "bg text-[#fff]"
              : "bg-gray-100 text-[#191919]"
          }  font-medium text-xl`}
        >
          <span>
            <LuUserCog />
          </span>
          <span className="text-sm ">Profile</span>
        </button>
        <button
          onClick={() => {
            setCurrentLink("bank-info");
            updateBank();
          }}
          className={`w-full rounded-full h-12 transition-all duration-300 flex justify-start items-center gap-2 px-4 ${
            currentLink === "bank-info"
              ? "bg text-[#fff]"
              : "bg-gray-100 text-[#191919]"
          }  font-medium text-xl`}
        >
          {loading ? (
            <div
              class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
              role="status"
              aria-label="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <span>
              <BsPatchCheck />
            </span>
          )}
          <span className="text-sm ">Update Bank Info</span>
        </button>
        {/* <button
          onClick={() => {
            navigate("Settings", "/settings/notifications");
            setCurrentLink("notifications");
          }}
          className={`w-full rounded-full h-12 transition-all duration-300 flex justify-start items-center gap-2 px-4 ${
            currentLink === "notifications"
              ? "bg text-[#fff]"
              : "bg-gray-100 text-[#191919]"
          }  font-medium text-xl`}
        >
          <span>
            <IoNotificationsOutline />
          </span>
          <span className="text-sm ">Notifications</span>
        </button> */}
        <button
          onClick={() => {
            navigate("Settings", "/terms-and-conditions");
            setCurrentLink("terms-and-conditions");
          }}
          className={`w-full rounded-full h-12 transition-all duration-300 flex justify-start items-center gap-2 px-4 ${
            currentLink === "terms-and-conditions"
              ? "bg text-[#fff]"
              : "bg-gray-100 text-[#191919]"
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
              : "bg-gray-100 text-[#191919]"
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
