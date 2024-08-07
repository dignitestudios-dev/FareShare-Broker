import React, { useContext } from "react";
import { FaApple, FaFacebook, FaFacebookF } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { TiUserAddOutline } from "react-icons/ti";
import { AppContext } from "../../context/AppContext";

const ChangePassword = () => {
  const { navigate } = useContext(AppContext);
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
            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
              Change Password.
            </h1>

            <p class="mt-4 text-gray-500 ">Setup your new credentials.</p>

            <form class="flex flex-col gap-6 mt-8 ">
              <div class="w-full">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600 ">
                    Password
                  </label>
                </div>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" Password"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="w-full">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600 ">
                    Re-enter Password
                  </label>
                </div>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Re-enter Password"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <button
                onClick={() => navigate("Sign in", "/login")}
                class="flex items-center justify-center gap-4 w-full  px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#c00000] rounded-full hover:bg-[#c00000] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                <span>Submit </span>

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

export default ChangePassword;
