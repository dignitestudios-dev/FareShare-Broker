import React, { useState } from "react";

const Profile = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div class="flex flex-col overflow-y-auto px-4 justify-start items-start w-full h-full">
      <div class="w-full flex flex-col gap-6 px-5 pb-5 md:px-0">
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
            {isEdit ? (
              <button
                onClick={() => setIsEdit((prev) => !prev)}
                class="bg w-[77px] h-[28px] rounded-lg text-white flex items-center justify-center text-sm font-medium leading-5"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit((prev) => !prev)}
                class="bg w-[77px] h-[28px] rounded-lg text-white flex items-center justify-center text-sm font-medium leading-5"
              >
                Edit
              </button>
            )}
          </div>
          <div class="w-full flex flex-col justify-start items-start gap-4">
            <div class="w-[120px] h-[120px] rounded-full bg-gray-50 flex justify-center items-center relative">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="user_image"
                class="w-full h-full rounded-full"
              />
            </div>
            <div class="w-full h-auto flex justify-start items-start gap-4">
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Company Name
                </label>
                <input
                  type="text"
                  disabled={isEdit}
                  class="w-full h-[52px] bg-gray-50 disabled:text-white/50 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="Mike"
                />
              </div>
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Account Handler Name
                </label>
                <input
                  type="text"
                  disabled={isEdit}
                  class="w-full h-[52px] bg-gray-50 disabled:text-white/50 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
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
                  disabled={isEdit}
                  class="w-full h-[52px] bg-gray-50 disabled:text-white/50 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="mikesmith@gmail.com"
                />
              </div>
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Company Tax Identification No.
                </label>
                <input
                  type="text"
                  disabled={isEdit}
                  class="w-full h-[52px] bg-gray-50 disabled:text-white/50 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="000 000 0000"
                />
              </div>
            </div>
            <div class="w-full h-auto flex justify-start items-start gap-4">
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Address
                </label>
                <input
                  type="text"
                  disabled={isEdit}
                  class="w-full h-[52px] bg-gray-50 disabled:text-white/50 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="3505 Lake Lynda Dr. Orlando, FL"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
