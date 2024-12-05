import React, { useContext, useState } from "react";
import { useEffect } from "react";
import authentication from "../../api/authenticationInterceptor";
import api from "../../api/apiInterceptor";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);

  const { setError, setSuccess, prodUrl } = useContext(AppContext);
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
          localStorage.setItem("broker", JSON.stringify(response?.data?.data));
          setUpdate((prev) => !prev);
        }
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setLoading(false);
      });
  };

  const [isChecked, setIsChecked] = useState(false);

  const sendNotificationPreference = async (bool) => {
    try {
      const response = await api.post("/notification/settings", {
        isEnabled: bool,
      });

      console.log("Response:", response);
      if (response?.data?.success) {
        setSuccess("Notification settings updated successfully.");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
      console.error("Error:", error);
    }
  };

  const [update2, setUpdate2] = useState(false);
  const getNotificationSetting = async () => {
    try {
      const response = await api.get("/notification/settings");
      setIsChecked(response?.data?.data?.settings);
    } catch (error) {
      setError(error?.response?.data?.message);
      console.error("Error:", error);
    }
  };
  // useEffect(() => {
  //   getNotificationSetting();
  // }, [update]);
  // Dependency array includes `isChecked`

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    sendNotificationPreference(event.target.checked);
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

            {/* <button className="w-auto h-9 rounded-lg bg-[#1c1c1c] text-white font-medium px-2 flex items-center justify-center">
              Update Bank Info
            </button> */}
          </div>
          <form
            onSubmit={(e) => sendDataToBackend(e)}
            class="w-full flex flex-col justify-start items-start gap-4"
          >
            {/* <div class="w-[120px] h-[120px] rounded-full bg-gray-100 border flex justify-center items-center relative">
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
                  disabled={!isEdit}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  class="w-full h-[52px] bg-gray-100 border disabled:text-gray-500 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="Mike"
                />
              </div>
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Account Handler Name
                </label>
                <input
                  type="text"
                  disabled={!isEdit}
                  value={accountHandlerName}
                  onChange={(e) => setAccountHandlerName(e.target.value)}
                  class="w-full h-[52px] bg-gray-100 border disabled:text-gray-500 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
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
                  class="w-full h-[52px] bg-gray-100 border disabled:text-gray-500 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="mikesmith@gmail.com"
                />
              </div>
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Tax Identification No.
                </label>
                <input
                  type="text"
                  disabled={!isEdit}
                  value={companyTaxIdentification}
                  onChange={(e) => setCompanyTaxIdentification(e.target.value)}
                  class="w-full h-[52px] bg-gray-100 border disabled:text-gray-500 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="000 000 0000"
                />
              </div>
            </div>
            {!isEdit && (
              <button
                type="button"
                onClick={() => setIsEdit(true)}
                className="w-full mt-6 col-span-2 flex justify-center items-center text-white text-md px-8 font-semibold h-12 rounded-full bg-[#c00000]"
              >
                Edit
              </button>
            )}
            {isEdit && (
              <button
                type="submit"
                className="w-full mt-6 flex justify-center items-center text-white text-md px-8 font-semibold h-12 rounded-full bg-[#c00000]"
              >
                {loading ? "Saving" : "Save"}
              </button>
            )}
            {/* <div class="w-full h-auto flex justify-start items-start gap-4">
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Address
                </label>
                <input
                  type="text"
                 
                  class="w-full h-[52px] bg-gray-100 border disabled:text-gray-500 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="3505 Lake Lynda Dr. Orlando, FL"
                />
              </div>
            </div> */}
          </form>
          {/* <span className="w-full h-[2px] bg-gray-200"></span>
          <h1 class="text-[24px] font-bold leading-[5.4px]">
            Notification Settings
          </h1>
          <div className="bg-gray-100 border w-full rounded-xl px-4 h-12 flex gap-6 justify-between items-center">
            <span className="text-black text-md font-medium">
              Show Notifications
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500" />
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
