import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { useFormik } from "formik";
import { loginValues } from "../../../data/authentication";
import { personalInfoSchema } from "../../../schema/personalInformation";
import { personalInfoValues } from "../../../data/personalInfo";
import { RideBookingContext } from "../../../context/RideBookingContext";

const PersonalInfo = () => {
  const { navigate, tab, setTab, error, setError } = useContext(AppContext);
  const { setPersonalInfo, setCreated } = useContext(RideBookingContext);

  const [loading, setLoading] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: personalInfoValues,
      validationSchema: personalInfoSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        setPersonalInfo({
          requesterFirstName: values.requesterFirstName,
          requesterLastName: values.requesterLastName,
          requesterEmail: values.requesterEmail,
          requesterContact: values.requesterContact,
          fareshareUserId: values.fareshareUserId,
          patientFirstName: values.patientFirstName,
          patientLastName: values.patientLastName,
          patientMI: values.patientMI,
          additionalRequests: values.additionalRequests,
        });
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setCreated("Created");
          navigate("Request a ride", "/ride/new-request/where-to");
        }, 2000);
      },
    });
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto overflow-y-auto flex flex-col gap-3 justify-center items-center"
    >
      <div class="w-full border-b pb-2 h-12 flex justify-start items-center gap-2 px-4">
        <button
          type="button"
          onClick={() => setTab("corporate")}
          class={`w-36 h-9 rounded-full ${
            tab == "corporate"
              ? "bg-[#c00000] text-white"
              : "bg-[#c00000]/[0.10] text-[#c00000]"
          } transition-all duration-150 text-sm font-medium flex justify-center items-center hover:bg-[#c00000] hover:text-white`}
        >
          Corporate Ride
        </button>
        <button
          type="button"
          onClick={() => setTab("medical")}
          class={`w-36 h-9 rounded-full ${
            tab == "medical"
              ? "bg-[#c00000] text-white"
              : "bg-[#c00000]/[0.10] text-[#c00000]"
          } transition-all duration-150 text-sm font-medium flex justify-center items-center hover:bg-[#c00000] hover:text-white`}
        >
          Medical Ride
        </button>
      </div>
      <div class="container w-full border-b">
        <div class="bg-white rounded w-full p-4 px-4 md:p-8">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Requester Information</p>
              <p>Please fill out all the fields.</p>
            </div>

            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5 grid grid-cols-2 gap-3">
                  <div class="">
                    <label for="requesterFirstName">First Name</label>
                    <input
                      type="text"
                      id="requesterFirstName"
                      name="requesterFirstName"
                      value={values.requesterFirstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      class={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 transition-colors duration-300 ${
                        errors.requesterFirstName && touched.requesterFirstName
                          ? "border-red-600 shake"
                          : null
                      }`}
                    />
                    {errors.requesterFirstName && touched.requesterFirstName ? (
                      <p className="text-red-700 text-sm font-medium">
                        {errors.requesterFirstName}
                      </p>
                    ) : null}
                  </div>
                  <div class="">
                    <label for="full_name">Last Name</label>
                    <input
                      type="text"
                      name="requesterLastName"
                      id="requesterLastName"
                      value={values.requesterLastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      class={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 transition-colors duration-300 ${
                        errors.requesterLastName && touched.requesterLastName
                          ? "border-red-600 shake"
                          : null
                      }`}
                    />
                    {errors.requesterLastName && touched.requesterLastName ? (
                      <p className="text-red-700 text-sm font-medium">
                        {errors.requesterLastName}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="md:col-span-5 grid grid-cols-2 gap-3">
                  <div class="">
                    <label for="email">Email Address</label>
                    <input
                      type="text"
                      name="requesterEmail"
                      id="requesterEmail"
                      value={values.requesterEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      class={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 transition-colors duration-300 ${
                        errors.requesterEmail && touched.requesterEmail
                          ? "border-red-600 shake"
                          : null
                      }`}
                      placeholder="email@domain.com"
                    />
                    {errors.requesterEmail && touched.requesterEmail ? (
                      <p className="text-red-700 text-sm font-medium">
                        {errors.requesterEmail}
                      </p>
                    ) : null}
                  </div>
                  <div class="">
                    <label for="requesterContact">Contact Number</label>
                    <input
                      type="text"
                      name="requesterContact"
                      id="requesterContact"
                      value={values.requesterContact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      class={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 transition-colors duration-300 ${
                        errors.requesterContact && touched.requesterContact
                          ? "border-red-600 shake"
                          : null
                      }`}
                      placeholder="(886)-8191-920"
                    />
                    {errors.requesterContact && touched.requesterContact ? (
                      <p className="text-red-700 text-sm font-medium">
                        {errors.requesterContact}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* <div class="md:col-span-3">
                  <label for="address">Address / Street</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                    placeholder=""
                  />
                </div>

                <div class="md:col-span-2">
                  <label for="city">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    value=""
                    placeholder=""
                  />
                </div>

                <div class="md:col-span-2">
                  <label for="country">Country / region</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="country"
                      id="country"
                      placeholder="Country"
                      class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value=""
                    />
                    <button
                      tabindex="-1"
                      class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button
                      tabindex="-1"
                      for="show_more"
                      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="md:col-span-2">
                  <label for="state">State / province</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="state"
                      id="state"
                      placeholder="State"
                      class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      value=""
                    />
                    <button
                      tabindex="-1"
                      class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button
                      tabindex="-1"
                      for="show_more"
                      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="md:col-span-1">
                  <label for="zipcode">Zipcode</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                    value=""
                  />
                </div>

                <div class="md:col-span-5">
                  <div class="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="billing_same"
                      id="billing_same"
                      class="form-checkbox"
                    />
                    <label for="billing_same" class="ml-2">
                      My billing address is different than above.
                    </label>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container w-full border-b">
        <div class="bg-white rounded w-full p-4 px-4 md:p-8">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Client's Information</p>
              <p>Please fill out all the fields.</p>
            </div>

            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5 grid grid-cols-2 gap-3">
                  <div class="">
                    <label for="full_name">Client's First Name</label>
                    <input
                      type="text"
                      name="patientFirstName"
                      id="patientFirstName"
                      value={values.patientFirstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      class={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 transition-colors duration-300 ${
                        errors.patientFirstName && touched.patientFirstName
                          ? "border-red-600 shake"
                          : null
                      }`}
                    />
                    {errors.patientFirstName && touched.patientFirstName ? (
                      <p className="text-red-700 text-sm font-medium">
                        {errors.patientFirstName}
                      </p>
                    ) : null}
                  </div>
                  <div class="">
                    <label for="full_name">Client's Last Name</label>
                    <input
                      type="text"
                      name="patientLastName"
                      id="patientLastName"
                      value={values.patientLastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      class={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 transition-colors duration-300 ${
                        errors.patientLastName && touched.patientLastName
                          ? "border-red-600 shake"
                          : null
                      }`}
                    />
                    {errors.patientLastName && touched.patientLastName ? (
                      <p className="text-red-700 text-sm font-medium">
                        {errors.patientLastName}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="md:col-span-5 grid grid-cols-2 gap-3">
                  <div class="">
                    <label for="email">Client's MI</label>
                    <input
                      type="text"
                      name="patientMI"
                      id="patientMI"
                      value={values.patientMI}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      class={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 transition-colors duration-300 ${
                        errors.patientMI && touched.patientMI
                          ? "border-red-600 shake"
                          : null
                      }`}
                    />
                    {errors.patientMI && touched.patientMI ? (
                      <p className="text-red-700 text-sm font-medium">
                        {errors.patientMI}
                      </p>
                    ) : null}
                  </div>
                  <div class="">
                    <label for="email">Fareshare ID</label>
                    <input
                      type="text"
                      name="fareshareUserId"
                      id="fareshareUserId"
                      value={values.fareshareUserId}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      class={`h-10 border mt-1 rounded px-4 w-full bg-gray-50 transition-colors duration-300 ${
                        errors.fareshareUserId && touched.fareshareUserId
                          ? "border-red-600 shake"
                          : null
                      }`}
                    />
                    {errors.fareshareUserId && touched.fareshareUserId ? (
                      <p className="text-red-700 text-sm font-medium">
                        {errors.fareshareUserId}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container w-full">
        <div class="bg-white rounded w-full p-4 px-4 md:p-8">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div class="text-gray-600">
              <p class="font-medium text-lg">Additional Information</p>
              <p>Filling out this field is not necessary.</p>
            </div>
            <div class="lg:col-span-2">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5 ">
                  <label for="additionalRequests">Additional Info</label>
                  <textarea
                    type="text"
                    name="additionalRequests"
                    id="additionalRequests"
                    value={values.additionalRequests}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class={`h-44  resize-none border mt-1 rounded p-3 w-full bg-gray-50 transition-colors duration-300 ${
                      errors.additionalRequests && touched.additionalRequests
                        ? "border-red-600 shake"
                        : null
                    }`}
                  ></textarea>
                  {errors.additionalRequests && touched.additionalRequests ? (
                    <p className="text-red-700 text-sm font-medium">
                      {errors.additionalRequests}
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mt-6 inline-flex items-end">
            <button
              type="submit"
              disabled={loading}
              class="bg-[#c00000] w-full hover:bg-[#c00000d8] text-white flex items-center justify-center gap-2 font-bold h-12 px-4 rounded-full"
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
              <span>Proceed</span>
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
  );
};

export default PersonalInfo;
