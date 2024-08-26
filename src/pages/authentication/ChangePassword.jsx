import React, { useContext, useState } from "react";
import axios from "axios";
import { FaApple, FaFacebook, FaFacebookF } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { TiUserAddOutline } from "react-icons/ti";
import { AppContext } from "../../context/AppContext";
import { useFormik } from "formik";
import { updatePassValues } from "../../data/authentication";
import { updatePassSchema } from "../../schema/UpdatePassSchema";
import authentication from "../../api/authenticationInterceptor";

const ChangePassword = () => {
  const { navigate, error, setError } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: updatePassValues,
      validationSchema: updatePassSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        setLoading(true);
        try {
          // API call to login using Axios interceptor
          const response = await authentication.post("/auth/updatePassOTP", {
            email: localStorage.getItem("email"),
            password: values?.password,
            confirmPassword: values?.confirmPassword,
            resetToken: localStorage.getItem("forgot_token"),
          });

          // Handle the response (e.g., save token, redirect)
          if (response?.data?.success) {
            localStorage.removeItem("email");
            localStorage.removeItem("forgot_token");
            navigate("Login", "/login");
          }
        } catch (error) {
          console.log(error);
          // Handle errors (e.g., show error message)
          setError(error?.response?.data?.message);

          // console.error("Login failed:", error.response?.data);
        } finally {
          setLoading(false);
        }
      },
    });
  return (
    <section class="bg-white ">
      <form onSubmit={handleSubmit} class="flex justify-center min-h-screen">
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

            <div class="flex flex-col gap-6 mt-8 ">
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
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Password"
                  class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40  transition-colors duration-300 ${
                    errors.email && touched.email
                      ? "border-red-600 shake"
                      : null
                  }`}
                />
                {errors.password && touched.password ? (
                  <p className="text-red-700 text-sm font-medium">
                    {errors.password}
                  </p>
                ) : null}
              </div>
              <div class="w-full">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600 ">
                    Confirm Password
                  </label>
                </div>

                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Confirm Password"
                  class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40  transition-colors duration-300 ${
                    errors.confirmPassword && touched.confirmPassword
                      ? "border-red-600 shake"
                      : null
                  }`}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="text-red-700 text-sm font-medium">
                    {errors.confirmPassword}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
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
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ChangePassword;
