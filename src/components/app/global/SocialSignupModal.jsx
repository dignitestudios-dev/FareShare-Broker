import React from "react";
import { signupValues, socialSignupValues } from "../../../data/authentication";
import { signupSchema } from "../../../schema/signupSchema";
import { useFormik } from "formik";

import { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { useState } from "react";
import authentication from "../../../api/authenticationInterceptor";
import { useEffect } from "react";
import { socialSignupSchema } from "../../../schema/socialSignupSchema";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";

const SocialSignupModal = ({ isOpen, setIsOpen, idToken }) => {
  const { navigate, error, setError } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: socialSignupValues,
      validationSchema: socialSignupSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        setLoading(true);
        if (idToken) {
          try {
            const ip = await authentication.get(
              "https://api.ipify.org?format=json"
            );
            if (ip) {
              // API call to login using Axios interceptor
              authentication
                .post("/auth/brokerSocialSignup", {
                  companyName: values.companyName,
                  accountHandlerName: values.accountHandlerName,
                  email: values.email,
                  companyTaxIdenfication: values.companyTaxIdentification,
                  department: values.department,
                  idToken: idToken,
                  ip: ip.data.ip,
                })
                .then((response) => {
                  // Handle the response (e.g., save token, redirect)
                  if (response?.data?.success) {
                    localStorage.setItem("token", response?.data?.token);
                    navigate("Add Bank", "/add-bank");
                    setLoading(false);
                  }
                })
                .catch((error) => {
                  setError(error?.response?.data?.message);
                  setLoading(false);
                });
            }
          } catch (error) {
            setError(error?.response?.data?.message);
            // Handle errors (e.g., show error message)
            // console.error("Login failed:", error.response?.data);
          } finally {
            setLoading(false);
          }
        }
      },
    });

  const modalRef = useRef();
  const toggleModal = (e) => {
    setIsOpen(false);
    values.accountHandlerName = "";
    values.companyName = "";
    values.companyTaxIdentification = "";
    values.department = null;
    values.email = "";
  };

  return (
    <div
      className={`w-screen h-screen p-2 fixed top-0 left-0  ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center `}
    >
      <div
        ref={modalRef}
        className="w-full lg:w-auto shadow-lg border h-auto p-4 rounded-xl bg-white  flex flex-col justify-center items-start"
      >
        <div className="w-full flex justify-between items-start">
          <div>
            <h1 class="text-2xl font-semibold tracking-wider text-[#c00000] capitalize ">
              Broker Information.
            </h1>
            <p class=" text-gray-500 ">
              Enter the details below to register on the platform.
            </p>
          </div>
          <button onClick={toggleModal} className="text-lg">
            <IoMdClose />
          </button>
        </div>
        <form
          id="form"
          onSubmit={handleSubmit}
          class="w-full md:grid flex flex-col justify-start items-start gap-6 mt-8 md:grid-cols-2"
        >
          <div className="w-full col-span-1">
            <label class="block mb-2 text-sm text-gray-600 ">
              Comapny Name
            </label>
            <input
              type="text"
              placeholder="John"
              id="companyName"
              name="companyName"
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
                errors.companyName && touched.companyName
                  ? "border-red-600 shake"
                  : null
              }`}
            />
            {errors.companyName && touched.companyName ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.companyName}
              </p>
            ) : null}
          </div>

          <div className="w-full col-span-1">
            <label class="block mb-2 text-sm text-gray-600 ">
              Account Handler name
            </label>
            <input
              type="text"
              placeholder="Snow"
              id="accountHandlerName"
              name="accountHandlerName"
              value={values.accountHandlerName}
              onChange={handleChange}
              onBlur={handleBlur}
              class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
                errors.accountHandlerName && touched.accountHandlerName
                  ? "border-red-600 shake"
                  : null
              }`}
            />
            {errors.accountHandlerName && touched.accountHandlerName ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.accountHandlerName}
              </p>
            ) : null}
          </div>

          <div className="w-full col-span-1">
            <label class="block mb-2 text-sm text-gray-600 ">
              Tax Identification number
            </label>
            <input
              type="text"
              placeholder="XXX-XX-XXXX-XXX"
              id="companyTaxIdentification"
              name="companyTaxIdentification"
              value={values.companyTaxIdentification}
              onChange={handleChange}
              onBlur={handleBlur}
              class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
                errors.companyTaxIdentification &&
                touched.companyTaxIdentification
                  ? "border-red-600 shake"
                  : null
              }`}
            />
            {errors.companyTaxIdentification &&
            touched.companyTaxIdentification ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.companyTaxIdentification}
              </p>
            ) : null}
          </div>

          <div className="w-full">
            <label class="block mb-2 text-sm text-gray-600 ">
              Company Email
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
                errors.email && touched.email ? "border-red-600 shake" : null
              }`}
            />
            {errors.email && touched.email ? (
              <p className="text-red-700 text-sm font-medium">{errors.email}</p>
            ) : null}
          </div>

          <div className="w-full flex flex-col justify-start items-start col-span-2">
            <div class="w-full h-auto py-2.5 ml-1 flex justify-start items-center  gap-6">
              <div class="w-auto flex gap-1 justify-start items-center h-auto">
                <input
                  type="radio"
                  id="department"
                  name="department"
                  value="Corporate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  class="w-4 h-4 accent-[#c00000]"
                  required=""
                />
                <label
                  for="department"
                  class="block  text-md text-gray-600 font-medium"
                >
                  Corporate
                </label>
              </div>
              <div class="w-auto flex gap-1 justify-start items-center h-auto">
                <input
                  type="radio"
                  id="department"
                  name="department"
                  value="Medical"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  class="w-4 h-4 accent-[#c00000]"
                  required=""
                />
                <label
                  for="department"
                  class="block  text-md text-gray-600 font-medium"
                >
                  Medical
                </label>
              </div>
            </div>
            {errors.department && touched.department ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.department}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            class="flex items-center justify-center gap-4 w-full col-span-2 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#c00000] rounded-full hover:bg-[#c00000] focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
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
            <span>Continue </span>

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
  );
};

export default SocialSignupModal;
