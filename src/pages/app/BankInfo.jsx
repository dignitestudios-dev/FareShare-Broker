import api from "../../api/apiInterceptor";
import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { addBankValues } from "../../data/addBank";
import { addBankSchema } from "../../schema/addBankSchema";
import { useFormik } from "formik";

const BankInfo = () => {
  const [isEdit, setIsEdit] = useState(true);
  const [bank, setBank] = useState(null);

  const getBank = async () => {
    const response = await api.get("/broker/bank");
    setBank(response?.data?.data);
  };
  const { navigate, error, setError, prodUrl } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);

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
              // navigate("Home", "/home");
              localStorage.setItem(
                "broker",
                JSON.stringify(response?.data?.data)
              );
              setUpdated((prev) => !prev);
            }
          })
          .catch((error) => {
            setError(error?.response?.data?.message);
            setLoading(false);
          });
      },
    });

  const [bankName, setBankName] = useState("");
  const [accountHandler, setAccountHandler] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");

  useEffect(() => {
    getBank();
  }, [updated]);

  useEffect(() => {
    setBankName(bank?.bank_name);
    setAccountHandler(bank?.account_holder_name);
    setAccountNumber(bank?.last4);
    values.accountHolderName = bank?.account_holder_name;
    values.accountNumber = bank?.last4;
    values.routingNumber = bank?.routing_number;
    setRoutingNumber(bank?.routing_number);
  }, [bank]);

  return (
    <form
      onSubmit={handleSubmit}
      class="flex flex-col overflow-y-auto lg:px-4 justify-start items-start w-full h-full"
    >
      <div class="w-full flex flex-col gap-6 lg:px-5 pb-5 md:px-0">
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
          </div>
          <div class="w-full flex flex-col justify-start items-start gap-4">
            <div class="w-full h-auto grid grid-cols-2 items-start gap-4">
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
                  value={accountHandler}
                  onChange={(e) => {
                    handleChange(e);
                    setAccountHandler(e.target.value);
                  }}
                  onBlur={handleBlur}
                  placeholder="Jack White"
                  class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
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
                  value={accountNumber}
                  onChange={(e) => {
                    handleChange(e);
                    setAccountNumber(e.target.value);
                  }}
                  onBlur={handleBlur}
                  placeholder="XXX-XX-XXXX-XXX"
                  class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
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
                  value={routingNumber}
                  onChange={(e) => {
                    handleChange(e);
                    setRoutingNumber(e.target.value);
                  }}
                  onBlur={handleBlur}
                  maxLength={9}
                  placeholder="XXX-XX-XXXX-XXX"
                  class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-50 border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
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
                className="w-full mt-6 col-span-2 flex justify-center items-center text-white text-md px-8 font-semibold h-12 rounded-full bg-[#c00000]"
              >
                {loading ? "Saving" : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default BankInfo;
