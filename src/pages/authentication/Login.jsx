import React, { useContext } from "react";
import {
  FaApple,
  FaFacebook,
  FaFacebookF,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { TiUserAddOutline } from "react-icons/ti";
import { AppContext } from "../../context/AppContext";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { loginValues } from "../../data/authentication";
import { loginSchema } from "../../schema/loginSchema";
import authentication from "../../api/authenticationInterceptor";
import { useState } from "react";
import Error from "../../components/app/global/Error";
import SocialLogin from "../../components/authentication/SocialLogin";
import axios from "axios";

const Login = () => {
  const { navigate, error, setError } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: loginValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        setLoading(true);
        try {
          // API call to login using Axios interceptor
          const response = await authentication.post("/auth/brokerSignIn", {
            email: values.email,
            password: values.password,
          });

          if (response?.status == 200 && response?.data?.token !== null) {
            localStorage.setItem("token", response?.data?.token);
            localStorage.setItem(
              "broker",
              JSON.stringify(response?.data?.data)
            );
            navigate("Home", "/home");
          }
        } catch (error) {
          console.log(error);
          // Handle errors (e.g., show error message)
          setError(error?.response?.data?.message);
        } finally {
          // console.error("Login failed:", error.response?.data);
          setLoading(false);
        }
      },
    });
  return (
    <section class="bg-white ">
      <div class="flex justify-center items-start min-h-screen">
        <div class="hidden mb-20 bg-gray-50 lg:flex justify-center items-center bg-cover  lg:w-2/5">
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
                <button
                  type="button"
                  onClick={() => navigate("Sign in", "/login")}
                  className="w-full h-full rounded-full bg-[#c00000] text-white font-medium   flex items-center justify-center"
                >
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => navigate("Sign up", "/signup")}
                  className="w-full h-full rounded-full  font-medium text-gray-600  flex items-center justify-center"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <Error error={error} setError={setError} />

            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
              Login to your account.
            </h1>

            <p class="mt-4 text-gray-500 ">
              Enter your credentials below to access your account.
            </p>

            <form onSubmit={handleSubmit} class="flex flex-col gap-6 mt-8 ">
              <div className="w-full">
                <label class="block mb-2 text-sm text-gray-600 ">
                  Email address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="johnsnow@example.com"
                  class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
                    errors.email && touched.email
                      ? "border-red-600 shake"
                      : null
                  }`}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-700 text-sm font-medium">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div class="w-full relative">
                <div class="flex justify-between  mb-2">
                  <label for="password" class="text-sm text-gray-600 ">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      navigate("Forgot Password", "/forgot-password")
                    }
                    class="text-sm text-gray-400 focus:text-[#c00000] hover:text-[#c00000] hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="w-full relative">
                  <input
                    type={isShow ? "text" : "password"}
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Password"
                    class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40  transition-colors duration-300 ${
                      errors.password && touched.password
                        ? "border-red-600 shake"
                        : null
                    }`}
                  />
                  {
                    <button
                      type="button"
                      onClick={() => setIsShow((prev) => !prev)}
                      className="absolute top-[32%] text-gray-500 text-lg right-3"
                    >
                      {isShow ? <FaRegEyeSlash /> : <FaRegEye />}
                    </button>
                  }
                </div>

                {errors.password && touched.password ? (
                  <p className="text-red-700 text-sm font-medium">
                    {errors.password}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={loading}
                class="flex items-center justify-center gap-4 w-full  px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#c00000] rounded-full hover:bg-[#c00000] focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
              >
                {loading && (
                  <div
                    class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                    role="status"
                    aria-label="loading"
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
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

              {/* <div className="w-full flex justify-center items-center gap-2">
                <span className="w-[35%] h-[1px] bg-gray-300"></span>
                <span className="text-sm font-semibold text-gray-500">OR</span>
                <span className="w-[35%] h-[1px] bg-gray-300"></span>
              </div> */}
            </form>
            {/* <SocialLogin /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
