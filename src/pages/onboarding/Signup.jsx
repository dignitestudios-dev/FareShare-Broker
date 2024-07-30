import React from "react";
import { FaApple, FaFacebook, FaFacebookF } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { TiUserAddOutline } from "react-icons/ti";

const Signup = () => {
  return (
    <section class="bg-white ">
      <div class="flex justify-center min-h-screen">
        <div class="hidden bg-gray-50 lg:flex justify-center items-center bg-cover  lg:w-2/5">
          <div class="w-full h-full  flex items-center justify-center animate one text-4xl font-bold text-[#c00000]">
            <img
              src="https://fareshare.vercel.app/assets/fareshare_logo-15fzbzBE.svg"
              alt=""
              className="w-[70%]"
            />
          </div>
        </div>

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div class="w-full">
            <div class="mb-6">
              <div className="w-full border h-12 rounded-full flex gap-1 justify-start items-start">
                <button className="w-full h-full rounded-full  font-medium hover:bg-[#c00000]  text-gray-600 hover:text-white flex items-center justify-center">
                  Sign In
                </button>
                <button className="w-full h-full rounded-full bg-[#c00000] text-white hover:bg-[#c00000] font-medium hover:text-white flex items-center justify-center">
                  Sign Up
                </button>
              </div>
            </div>

            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
              Create an Account
            </h1>

            <p class="mt-4 text-gray-500 ">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label class="block mb-2 text-sm text-gray-600 ">
                  Comapny Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 ">
                  Account Handler name
                </label>
                <input
                  type="text"
                  placeholder="Snow"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 ">
                  Tax Identification number
                </label>
                <input
                  type="text"
                  placeholder="XXX-XX-XXXX-XXX"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 ">
                  Company Email
                </label>
                <input
                  type="email"
                  placeholder="johnsnow@example.com"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 ">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600 ">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="w-full h-auto py-2.5 ml-1 flex justify-start items-center col-span-2 gap-6">
                <div class="w-auto flex gap-1 justify-start items-center h-auto">
                  <input
                    type="radio"
                    id="corporate-service"
                    class="w-4 h-4 accent-[#c00000]"
                    required=""
                  />
                  <label
                    for="corporate-service"
                    class="block  text-md text-gray-600 font-medium"
                  >
                    Corporate
                  </label>
                </div>
                <div class="w-auto flex gap-1 justify-start items-center h-auto">
                  <input
                    type="radio"
                    id="medical-service"
                    class="w-4 h-4 accent-[#c00000]"
                    required=""
                  />
                  <label
                    for="medical-service"
                    class="block  text-md text-gray-600 font-medium"
                  >
                    Medical
                  </label>
                </div>
              </div>

              <button class="flex items-center justify-center gap-4 w-full col-span-2 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#c00000] rounded-full hover:bg-[#c00000] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Sign Up </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
