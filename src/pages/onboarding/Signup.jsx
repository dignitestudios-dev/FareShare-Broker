import React, { useContext, useState } from "react";
import { FaApple, FaFacebook, FaFacebookF } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { TiUserAddOutline } from "react-icons/ti";
import { AppContext } from "../../context/AppContext";
import { signupValues } from "../../data/authentication";
import { signupSchema } from "../../schema/signupSchema";
import { useFormik } from "formik";
import authentication from "../../api/authenticationInterceptor";
// firebase:
import { auth } from "../../firebase/firebase"; // Adjust the import based on your file structure
import {
  createUserWithEmailAndPassword,
  getIdToken,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Error from "../../components/app/global/Error";
import { useEffect } from "react";

const Signup = () => {
  const { navigate, error, setError } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [idToken, setIdToken] = useState(null);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: signupValues,
      validationSchema: signupSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        setLoading(true);
        try {
          // Try to sign in the user
          const userCredential = await signInWithEmailAndPassword(
            auth,
            values?.email,
            values?.password
          );
          const user = userCredential.user;
          // Get the ID token
          const token = await getIdToken(user);
          if (token) {
            setIdToken(token);
          } else {
            setError("Token Not Found");
            setLoading(false);
          }
        } catch (error) {
          if (error.code === "auth/user-not-found") {
            try {
              const newUser = await createUserWithEmailAndPassword(
                auth,
                values?.email,
                values?.password
              );
              const user = newUser.user;
              // Get the ID token
              const token = await getIdToken(user);
              if (token) {
                setIdToken(token);
              } else {
                setError("Token Not Found");
                setLoading(false);
              }
            } catch (createError) {
              setError("Error creating new user");
            }
          } else {
            setError("Login error");
            setLoading(false);
          }
        } finally {
          setLoading(false);
        }
      },
    });

  const sendDataToBackend = async () => {
    if (idToken) {
      try {
        // API call to login using Axios interceptor
        const response = await authentication.post("/auth/brokerSignUp", {
          companyName: values.companyName,
          accountHandlerName: values.accountHandlerName,
          email: values.email,
          companyTaxIdenfication: values.companyTaxIdentification,
          password: values.password,
          confirmPassword: values.confirmPassword,
          department: values.department,
          idToken: idToken,
        });

        // Handle the response (e.g., save token, redirect)
        console.log("Login successful:", response.data);
      } catch (error) {
        console.log(error);
        // Handle errors (e.g., show error message)
        setError(error?.response?.data?.message);
        // console.error("Login failed:", error.response?.data);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    sendDataToBackend();
  }, [idToken]);

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

        <Error error={error} setError={setError} />

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
          <div class="w-full">
            <div class="mb-6">
              <div className="w-full border h-12 rounded-full flex gap-1 justify-start items-start">
                <button
                  type="button"
                  onClick={() => navigate("Sign in", "/login")}
                  className="w-full h-full rounded-full  font-medium hover:bg-[#c00000]  text-gray-600 hover:text-white flex items-center justify-center"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => navigate("Sign up", "/signup")}
                  className="w-full h-full rounded-full bg-[#c00000] text-white hover:bg-[#c00000] font-medium hover:text-white flex items-center justify-center"
                >
                  Sign Up
                </button>
              </div>
            </div>

            <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
              Create an Account
            </h1>

            <p class="mt-4 text-gray-500 ">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>

            <form
              onSubmit={handleSubmit}
              class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
            >
              <div>
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

              <div>
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

              <div>
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

              <div>
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

              <div>
                <label class="block mb-2 text-sm text-gray-600 ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your password"
                  class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
                    errors.password && touched.password
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

              <div>
                <label class="block mb-2 text-sm text-gray-600 ">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your password"
                  class={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-[#c00000]  focus:ring-[#c00000] focus:outline-none focus:ring focus:ring-opacity-40 transition-colors duration-300 ${
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
                <span>Sign Up </span>

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

export default Signup;
