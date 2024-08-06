import React, { useState } from "react";

const BankInfo = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div class="flex flex-col overflow-y-auto px-4 justify-start items-start w-full h-full">
      <div class="w-full flex flex-col gap-6 px-5 pb-5 md:px-0">
        <div class="w-full flex flex-col  gap-8 justify-between items-start">
          <div class="w-full flex justify-between items-start">
            <div class="flex flex-col gap-2">
              <h1 class="text-[24px] font-bold leading-[32.4px]">
                Bank Information
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
            <div class="w-full h-auto flex justify-start items-start gap-4">
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Bank Name
                </label>
                <input
                  type="text"
                  disabled={isEdit}
                  class="w-full h-[52px] bg-gray-50 disabled:text-white/50 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="Bank Of America"
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
                  placeholder="Mike Smith"
                />
              </div>
            </div>
            <div class="w-full h-auto flex justify-start items-start gap-4">
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Account Number
                </label>
                <input
                  type="text"
                  disabled={isEdit}
                  class="w-full h-[52px] bg-gray-50 disabled:text-white/50 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="000 000 0000"
                />
              </div>
              <div class="w-full h-auto flex flex-col gap-1 justify-start items-start">
                <label class="text-[16px] font-medium leading-[21.6px]">
                  Routing Number
                </label>
                <input
                  type="text"
                  disabled={isEdit}
                  class="w-full h-[52px] bg-gray-50 disabled:text-white/50 outline-none  px-3 focus:border-[1px] focus:border-[#c00000] rounded-xl"
                  placeholder="000 000 0000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankInfo;
