import React from "react";
import { FaApple, FaFacebook, FaFacebookF } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { TiUserAddOutline } from "react-icons/ti";

const Login = () => {
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
                <button className="w-full h-full rounded-full bg-[#c00000] text-white font-medium hover:bg-[#c00000] hover:text-white flex items-center justify-center">
                  Sign In
                </button>
                <button className="w-full h-full rounded-full hover:bg-[#c00000] font-medium text-gray-600 hover:text-white flex items-center justify-center">
                  Sign Up
                </button>
              </div>
            </div>
            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
              Login to your account.
            </h1>

            <p class="mt-4 text-gray-500 ">
              Enter your credentials below to access your account.
            </p>

            <form class="flex flex-col gap-6 mt-8 ">
              <div className="w-full">
                <label class="block mb-2 text-sm text-gray-600 ">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="johnsnow@example.com"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="w-full">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600 ">
                    Password
                  </label>
                  <a
                    href="#"
                    class="text-sm text-gray-400 focus:text-[#c00000] hover:text-[#c00000] hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <button class="flex items-center justify-center gap-4 w-full  px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#c00000] rounded-full hover:bg-[#c00000] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                <span>Sign In </span>

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

              <div className="w-full flex justify-center items-center gap-2">
                <span className="w-[35%] h-[1px] bg-gray-300"></span>
                <span className="text-sm font-semibold text-gray-500">OR</span>
                <span className="w-[35%] h-[1px] bg-gray-300"></span>
              </div>

              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
                <button
                  aria-label="Sign in with Google"
                  class="flex items-center bg-white border border-button-border-light rounded-lg p-1 pr-3"
                >
                  <div class="flex items-center justify-center bg-white w-9 h-9 rounded-l">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      class="w-5 h-5"
                    >
                      <title>Sign in with Google</title>
                      <desc>Google G Logo</desc>
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        class="fill-google-logo-blue"
                      ></path>
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        class="fill-google-logo-green"
                      ></path>
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        class="fill-google-logo-yellow"
                      ></path>
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        class="fill-google-logo-red"
                      ></path>
                    </svg>
                  </div>
                  <span class="text-sm text-google-text-gray tracking-wider">
                    Sign in with Google
                  </span>
                </button>
                <button
                  aria-label="Sign in with Google"
                  class="flex items-center bg-white border border-button-border-light rounded-lg p-1 pr-3"
                >
                  <div class="flex items-center justify-center bg-white w-9 h-9 rounded-l">
                    <FaApple className="text-xl" />
                  </div>
                  <span class="text-sm text-google-text-gray tracking-wider">
                    Sign in with Apple
                  </span>
                </button>
                <button
                  aria-label="Sign in with Facebook"
                  class="flex items-center bg-white border border-button-border-light rounded-lg p-1 pr-3"
                >
                  <div class="flex items-center justify-center bg-white w-9 h-9 rounded-l">
                    <FaFacebookF className="text-xl text-[#1877F2]" />
                  </div>
                  <span class="text-sm text-google-text-gray tracking-wider">
                    Sign in with Facebook
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
