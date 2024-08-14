import React, { useState, useContext } from "react";
import { ContactUsVector } from "../../assets/export";
import { useFormik } from "formik";
import { AppContext } from "../../context/AppContext";
import { contactUsSchema } from "../../schema/contactUsSchema";
import { contactUsValues } from "../../data/contactUs";
import api from "../../api/apiInterceptor";

const ContactUs = () => {
  const { navigate, error, setError } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: contactUsValues,
      validationSchema: contactUsSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        setLoading(true);
        try {
          // API call to login using Axios interceptor
          const response = await api.post("/broker/contact-us", {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
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
    <div className="w-full h-full flex flex-col justify-center border p-4 rounded-3xl items-center">
      <div class="w-full grid lg:grid-cols-2  items-start gap-16 p-4  bg-white font-[sans-serif]">
        <div className="w-full border-r flex">
          <img src={ContactUsVector} alt="" className="w-[95%]" />
        </div>
        <form class="ml-auto w-full space-y-4">
          <div>
            <h1 class="text-gray-800 text-3xl font-extrabold">
              We would love to help
            </h1>
            <p class="text-sm text-gray-500 mt-4">
              Reachout and we will get in touch within 24 hours
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
              class={`w-full rounded-md py-3 px-4 bg-gray-50 text-gray-800 text-sm outline-[#c00000] focus:bg-transparent transition-colors duration-300 ${
                errors.name && touched.name
                  ? "border border-red-600 shake"
                  : null
              }`}
            />

            {errors.name && touched.name ? (
              <p className="text-red-700 text-sm font-medium">{errors.name}</p>
            ) : null}
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              class={`w-full rounded-md py-3 px-4 bg-gray-50 text-gray-800 text-sm outline-[#c00000] focus:bg-transparent transition-colors duration-300 ${
                errors.email && touched.email
                  ? "border border-red-600 shake"
                  : null
              }`}
            />
            {errors.email && touched.email ? (
              <p className="text-red-700 text-sm font-medium">{errors.email}</p>
            ) : null}
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              class={`w-full rounded-md py-3 px-4 bg-gray-50 text-gray-800 text-sm outline-[#c00000] focus:bg-transparent transition-colors duration-300 ${
                errors.subject && touched.subject
                  ? "border border-red-600 shake"
                  : null
              }`}
            />

            {errors.subject && touched.subject ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.subject}
              </p>
            ) : null}
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            <textarea
              placeholder="Message"
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows="6"
              class={`w-full resize-none rounded-md py-3 px-4 bg-gray-50 text-gray-800 text-sm outline-[#c00000] focus:bg-transparent transition-colors duration-300 ${
                errors.message && touched.message
                  ? "border border-red-600 shake"
                  : null
              }`}
            ></textarea>

            {errors.message && touched.message ? (
              <p className="text-red-700 text-sm font-medium">
                {errors.message}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            class="text-white bg-[#c00000] hover:bg-[#c00000]/[0.9] tracking-wide rounded-full text-sm px-4 py-3 w-full !mt-6"
          >
            Send
          </button>
        </form>
      </div>
      <div class="h-16 w-full border-t  px-6 flex items-center justify-between lg:justify-start">
        <div class="flex gap-2 justify-start items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-md text-gray-600"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
          </svg>
          <span class="text-gray-600 text-md">example@mail.com</span>
        </div>
        <div class="ml-4 lg:ml-48 flex gap-2 justify-start items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            class="text-md text-gray-600"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
          </svg>
          <span class="text-gray-600 text-md">202-555-0184</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
