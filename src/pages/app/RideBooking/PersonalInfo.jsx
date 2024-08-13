import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";

const PersonalInfo = () => {
  const { navigate, tab, setTab } = useContext(AppContext);

  return (
    <div className="w-full h-auto overflow-y-auto flex flex-col gap-3 justify-center items-center">
      <div class="w-full h-12 flex justify-start items-center gap-2 px-4">
        <button
          onClick={() => setTab("corporate")}
          class={`w-36 h-9 rounded-full ${
            tab == "corporate"
              ? "bg-[#c00000] text-white"
              : "bg-[#c00000]/[0.10] text-[#c00000]"
          } transition-all duration-150 text-sm font-medium flex justify-center items-center hover:bg-[#c00000] hover:text-white`}
        >
          Corporate Ride
        </button>
        <button
          onClick={() => setTab("medical")}
          class={`w-36 h-9 rounded-full ${
            tab == "medical"
              ? "bg-[#c00000] text-white"
              : "bg-[#c00000]/[0.10] text-[#c00000]"
          } transition-all duration-150 text-sm font-medium flex justify-center items-center hover:bg-[#c00000] hover:text-white`}
        >
          Medical Ride
        </button>
      </div>
      <div class="container w-full border-b">
        <div class="bg-white rounded w-full p-4 px-4 md:p-8">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Requester Information</p>
              <p>Please fill out all the fields.</p>
            </div>

            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5 grid grid-cols-2 gap-3">
                  <div class="">
                    <label for="full_name">First Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                    />
                  </div>
                  <div class="">
                    <label for="full_name">Last Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                    />
                  </div>
                </div>
                <div className="md:col-span-5 grid grid-cols-2 gap-3">
                  <div class="">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="email@domain.com"
                    />
                  </div>
                  <div class="">
                    <label for="email">Contact Number</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="(886)-8191-920"
                    />
                  </div>
                </div>

                {/* <div class="md:col-span-3">
                  <label for="address">Address / Street</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                    placeholder=""
                  />
                </div>

                <div class="md:col-span-2">
                  <label for="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                    placeholder=""
                  />
                </div>

                <div class="md:col-span-2">
                  <label for="country">Country / region</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="country"
                      id="country"
                      placeholder="Country"
                      class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value=""
                    />
                    <button
                      tabindex="-1"
                      class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button
                      tabindex="-1"
                      for="show_more"
                      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="md:col-span-2">
                  <label for="state">State / province</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="state"
                      id="state"
                      placeholder="State"
                      class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value=""
                    />
                    <button
                      tabindex="-1"
                      class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button
                      tabindex="-1"
                      for="show_more"
                      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="md:col-span-1">
                  <label for="zipcode">Zipcode</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                    value=""
                  />
                </div>

                <div class="md:col-span-5">
                  <div class="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="billing_same"
                      id="billing_same"
                      class="form-checkbox"
                    />
                    <label for="billing_same" class="ml-2">
                      My billing address is different than above.
                    </label>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container w-full border-b">
        <div class="bg-white rounded w-full p-4 px-4 md:p-8">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Client's Information</p>
              <p>Please fill out all the fields.</p>
            </div>

            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5 grid grid-cols-2 gap-3">
                  <div class="">
                    <label for="full_name">Client's First Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                    />
                  </div>
                  <div class="">
                    <label for="full_name">Client's Last Name</label>
                    <input
                      type="text"
                      name="full_name"
                      id="full_name"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                    />
                  </div>
                </div>
                <div className="md:col-span-5 grid grid-cols-2 gap-3">
                  <div class="">
                    <label for="email">Client's MI</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="XXXXXXXX"
                    />
                  </div>
                  <div class="">
                    <label for="email">Fareshare ID</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder="XXXXXX"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container w-full">
        <div class="bg-white rounded w-full p-4 px-4 md:p-8">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Additional Information</p>
              <p>Filling out this field is not necessary.</p>
            </div>
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5 ">
                  <label for="full_name">Additional Info</label>
                  <textarea
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="h-44  resize-none border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mt-6 inline-flex items-end">
            <button
              onClick={() =>
                navigate("Request a ride", "/ride/new-request/where-to")
              }
              class="bg-[#c00000] w-full hover:bg-[#c00000d8] text-white font-bold h-12 px-4 rounded-full"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
