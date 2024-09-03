import React, { useContext, useState } from "react";
import { FaApple, FaFacebook, FaFacebookF } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { TiUserAddOutline } from "react-icons/ti";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { addBankValues } from "../../data/addBank";
import { addBankSchema } from "../../schema/addBankSchema";
import authentication from "../../api/authenticationInterceptor";
import { useFormik } from "formik";

const AddBank = () => {
  const { navigate, error, setError, prodUrl } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: addBankValues,
      validationSchema: addBankSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        setLoading(true);
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
        // API call to login using Axios interceptor
        axios
          .post(
            `${prodUrl}/broker/bank`,
            {
              routingNumber: values?.routingNumber,
              accountNumber: values?.accountNumber,
              accountHolderName: values?.accountHolderName,
              bankName: values?.bankName,
            },
            { headers }
          )
          .then((response) => {
            // Handle the response (e.g., save token, redirect)
            if (response?.data?.success) {
              navigate("Home", "/home");
              localStorage.setItem(
                "broker",
                JSON.stringify(response?.data?.data)
              );
            }
          })
          .catch((error) => {
            setError(error?.response?.data?.message);
            setLoading(false);
          });
      },
    });
  return (
    <section class="bg-white ">
      <div class="flex justify-center min-h-screen">
        <div class="hidden bg-gray-50 lg:flex justify-center items-center bg-cover  lg:w-1/2">
          <div class="w-full h-full  flex items-center justify-center animate one text-4xl font-bold text-[#c00000]">
            <img
              src="https://fareshare.vercel.app/assets/fareshare_logo-15fzbzBE.svg"
              alt=""
              className="w-[70%]"
            />
          </div>
        </div>

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-1/2">
          <div class="w-full">
            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
              Add Bank Account!
            </h1>

            <p class="mt-4 text-gray-500 ">Add your bank account details.</p>

            <form
              onSubmit={handleSubmit}
              class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            >
              <div className="col-span-2">
                <label
                  htmlFor="accountHolderName"
                  class="block mb-2 text-sm text-gray-600 "
                >
                  Account Holder name
                </label>
                <input
                  type="text"
                  name="accountHolderName"
                  id="accountHolderName"
                  value={values.accountHolderName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Jack White"
                  class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
                    errors.accountHolderName && touched.accountHolderName
                      ? "border-red-600 shake"
                      : null
                  }`}
                />
                {errors.accountHolderName && touched.accountHolderName ? (
                  <p className="text-red-700 text-sm font-medium">
                    {errors.accountHolderName}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="accountNumber"
                  class="block mb-2 text-sm text-gray-600 "
                >
                  Account Number
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  id="accountNumber"
                  maxLength={12}
                  value={values.accountNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="XXX-XX-XXXX-XXX"
                  class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
                    errors.accountNumber && touched.accountNumber
                      ? "border-red-600 shake"
                      : null
                  }`}
                />
                {errors.accountNumber && touched.accountNumber ? (
                  <p className="text-red-700 text-sm font-medium">
                    {errors.accountNumber}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="routingNumber"
                  class="block mb-2 text-sm text-gray-600 "
                >
                  Routing Number
                </label>
                <input
                  type="text"
                  name="routingNumber"
                  id="routingNumber"
                  value={values.routingNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={9}
                  placeholder="XXX-XX-XXXX-XXX"
                  class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
                    errors.routingNumber && touched.routingNumber
                      ? "border-red-600 shake"
                      : null
                  }`}
                />
                {errors.routingNumber && touched.routingNumber ? (
                  <p className="text-red-700 text-sm font-medium">
                    {errors.routingNumber}
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
                <span>Get Started </span>

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

export default AddBank;
