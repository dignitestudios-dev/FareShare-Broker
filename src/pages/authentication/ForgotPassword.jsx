import React, { useContext, useState } from "react";
import { FaApple, FaFacebook, FaFacebookF } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { TiUserAddOutline } from "react-icons/ti";
import { AppContext } from "../../context/AppContext";
import { useFormik } from "formik";
import authentication from "../../api/authenticationInterceptor";
import { verifyEmailValues } from "../../data/authentication";
import { verifyEmailSchema } from "../../schema/verifyEmailSchema";
import Error from "../../components/app/global/Error";

const ForgotPassword = () => {
  const { navigate, error, setError } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: verifyEmailValues,
      validationSchema: verifyEmailSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        setLoading(true);
        try {
          // API call to login using Axios interceptor
          const response = await authentication.post("/auth/sendPassOTP", {
            email: values.email,
          });

          // Handle the response (e.g., save token, redirect)
          console.log("Login successful:", response.data);
        } catch (error) {
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
      <div class="flex justify-center min-h-screen">
        <div class="hidden bg-gray-50 lg:flex justify-center items-center bg-cover  lg:w-1/2">
          <div class="w-full h-full  flex items-center justify-center animate one text-4xl font-bold text-[#c00000]">
            <img
              src="https://fareshare.vercel.app/assets/mobilemockup-ySib-16m.svg"
              alt=""
              className="w-[40%]"
            />
          </div>
        </div>

        <Error error={error} setError={setError} />

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-1/2">
          <div class="w-full">
            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
              Forgot Password?
            </h1>

            <p class="mt-4 text-gray-500 ">
              Enter your registered email to recieve an otp on your email.
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
                <span>Send OTP</span>

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
              {/* <div class="w-full flex justify-center items-center col-span-2 gap-1 text-sm text-gray-500 mt-1">
                Didn't receive code?
                <a
                  class="font-medium text-[#c00000] hover:text-[#c00000c9]"
                  href="#0"
                >
                  Resend
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
