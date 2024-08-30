import React, { useContext, useState } from "react";
import { useEffect } from "react";
import authentication from "../../api/authenticationInterceptor";
import api from "../../api/apiInterceptor";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(true);

  const { setError } = useContext(AppContext);
  const [update, setUpdate] = useState(false);

  const [broker, setBroker] = useState(
    JSON.parse(localStorage.getItem("broker"))
  );

  const getBroker = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(`${prodUrl}/broker`, { headers })
      .then((response) => {
        localStorage.setItem("broker", JSON.stringify(response?.data?.data));
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
      });
  };

  useEffect(() => {
    getBroker();
  }, [update]);

  const [companyName, setCompanyName] = useState("");
  const [accountHandlerName, setAccountHandlerName] = useState("");
  const [email, setEmail] = useState("");
  const [companyTaxIdentification, setCompanyTaxIdentification] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (broker) {
      setAccountHandlerName(broker?.accountHandlerName);
      setCompanyTaxIdentification(broker?.companyTaxIdenfication);
      setEmail(broker?.email);
      setCompanyName(broker?.companyName);
    }
  }, []);

  const sendDataToBackend = async (e) => {
    e.preventDefault();
    setLoading(true);

    // API call to login using Axios interceptor
    api
      .put("/broker", {
        companyName: companyName,
        accountHandlerName: accountHandlerName,
        companyTaxIdenfication: companyTaxIdentification,
      })
      .then((response) => {
        // Handle the response (e.g., save token, redirect)
        if (response?.data?.success) {
          setLoading(false);
          setUpdate((prev) => !prev);
        }
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setLoading(false);
      });
  };

  return (
    <div class="flex flex-col overflow-y-auto lg:px-4 justify-start items-start w-full lg:h-full">
      <div class="w-full flex flex-col gap-6 lg:px-5 pb-5 md:px-0">
        <div class="w-full flex flex-col  gap-8 justify-between items-start">
          <div class="w-full flex justify-between items-start">
            <div class="flex flex-col gap-2">
              <h1 class="text-[24px] font-bold leading-[32.4px]">
                User Information
              </h1>
              <p class="text-[12px] leading-[16.2px] text-gray-800/50">
                View your information below. Please contact the owner for any
                changes or updates.
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => sendDataToBackend(e)}
            class="w-full flex flex-col justify-start items-start gap-4"
          >
            {/* <div class="w-[120px] h-[120px] rounded-full bg-gray-50 flex justify-center items-center relative">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="user_image"
                class="w-full h-full rounded-full"
              />
            </div> */}
            <div class="w-full h-auto flex justify-start items-start gap-4">
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  class="w-full h-[52px] bg-gray-50 disabled:text-gray-500 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="Mike"
                />
              </div>
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Account Handler Name
                </label>
                <input
                  type="text"
                  value={accountHandlerName}
                  onChange={(e) => setAccountHandlerName(e.target.value)}
                  class="w-full h-[52px] bg-gray-50 disabled:text-gray-500 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="Smith"
                />
              </div>
            </div>
            <div class="w-full h-auto flex justify-start items-start gap-4">
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Company Email
                </label>
                <input
                  type="text"
                  value={email}
                  disabled={true}
                  onChange={(e) => setEmail(e.target.value)}
                  class="w-full h-[52px] bg-gray-50 disabled:text-gray-500 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="mikesmith@gmail.com"
                />
              </div>
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Tax Identification No.
                </label>
                <input
                  type="text"
                  value={companyTaxIdentification}
                  onChange={(e) => setCompanyTaxIdentification(e.target.value)}
                  class="w-full h-[52px] bg-gray-50 disabled:text-gray-500 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="000 000 0000"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-6 flex justify-center items-center text-white text-md px-8 font-semibold h-12 rounded-full bg-[#c00000]"
            >
              {loading ? "Updating" : "Update"}
            </button>
            {/* <div class="w-full h-auto flex justify-start items-start gap-4">
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Address
                </label>
                <input
                  type="text"
                 
                  class="w-full h-[52px] bg-gray-50 disabled:text-gray-500 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="3505 Lake Lynda Dr. Orlando, FL"
                />
              </div>
            </div> */}
          </form>

          <span className="w-full h-[2px] bg-gray-100"></span>
          <div className="bg-gray-100 w-full rounded-xl  px-4 h-12 flex gap-6 justify-between items-center">
            <span className="text-black text-md font-medium">
              Show Notifications
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
