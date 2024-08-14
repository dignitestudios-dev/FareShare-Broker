import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import app, {
  auth,
  googleProvider,
  appleProvider,
} from "../../firebase/firebase";
import Cookies from "js-cookie";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { signInWithPopup } from "firebase/auth";

const SocialLogin = () => {
  const { navigate, error, setError } = useContext(AppContext);

  const [googleLoading, setGoogleLoading] = useState(false);
  const [appleLoading, setAppleLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);

  const handleAppleLogin = async () => {
    try {
      setAppleLoading(true);
      const result = await signInWithPopup(auth, appleProvider);
      if (result) {
        console.log(result);
        const token = await result?.user?.getIdToken();
        if (token) {
          axios
            .post(`https://backend.faresharellc.com/auth/brokerSocialSignIn`, {
              email: result?.user?.email,
              idToken: token,
            })
            .then(
              (response) => {
                // just for now
                Cookies.set("token", response?.data?.data?.token, {
                  expires: 7,
                });
                if (response?.data?.data?.token) {
                  navigate("/home/");
                }
              },
              (error) => {
                setError(error?.response?.data?.message);

                // if (error?.response?.data?.error == "No user found") {
                //   axios
                //     .post(`https://backend.faresharellc.com/auth/brokerSocialSignIn`, {
                //       id_token: token,
                //     })
                //     .then(
                //       (response) => {
                //         console.log(response);
                //         if (response?.status == 201) {
                //           axios
                //             .post(`${baseUrl}/login-social`, {
                //               id_token: token,
                //             })
                //             .then(
                //               (response) => {
                //                 // just for now
                //                 Cookies.set(
                //                   "token",
                //                   response?.data?.data?.token,
                //                   { expires: 7 }
                //                 );
                //                 if (response?.data?.data?.token) {
                //                   navigate("/home/");
                //                 }
                //               },
                //               (error) => {
                //                 setAppleLoading(false);
                //                 setFormError(error?.response?.data?.error);
                //                 console.log(error);
                //               }
                //             );
                //           if (response?.data?.data?.token) {
                //             navigate("/home/");
                //           }
                //         }
                //       },
                //       (error) => {
                //         setAppleLoading(false);
                //         setFormError(error?.response?.data?.error);
                //         console.log(error);
                //       }
                //     );
                // }
                // console.log(error);
                setAppleLoading(false);
              }
            );
        }
      }
    } catch (err) {
      setAppleLoading(false);
      setError("Cannot open apple signin modal.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      if (result) {
        console.log(result);
        const token = await result?.user?.getIdToken();
        if (token) {
          axios
            .post(`https://backend.faresharellc.com/auth/brokerSocialSignIn`, {
              email: result?.user?.email,
              idToken: token,
            })
            .then(
              (response) => {
                // just for now
                Cookies.set("token", response?.data?.data?.token, {
                  expires: 7,
                });
                if (response?.data?.data?.token) {
                  navigate("/home/");
                }
              },
              (error) => {
                setError(error?.response?.data?.message);
                // if (error?.response?.data?.error == "No user found") {
                //   axios
                //     .post(`${baseUrl}/register-social`, {
                //       id_token: token,
                //     })
                //     .then(
                //       (response) => {
                //         console.log(response);
                //         if (response?.status == 201) {
                //           axios
                //             .post(`${baseUrl}/login-social`, {
                //               id_token: token,
                //             })
                //             .then(
                //               (response) => {
                //                 Cookies.set(
                //                   "token",
                //                   response?.data?.data?.token,
                //                   { expires: 7 }
                //                 );
                //                 if (response?.data?.data?.token) {
                //                   navigate("/home/");
                //                 }
                //               },
                //               (error) => {
                //                 setGoogleLoading(false);
                //                 setFormError(error?.response?.data?.error);
                //                 console.log(error);
                //               }
                //             );
                //           if (response?.data?.data?.token) {
                //             navigate("/home/");
                //           }
                //         }
                //       },
                //       (error) => {
                //         setGoogleLoading(false);
                //         setFormError(error?.response?.data?.error);
                //         console.log(error);
                //       }
                //     );
                // }
                setGoogleLoading(false);
              }
            );
        }
      }
    } catch (err) {
      setGoogleLoading(false);
      setError("Cannot open google signin modal.");
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
      <button
        type="button"
        onClick={handleGoogleLogin}
        aria-label="Sign in with Google"
        class="flex items-center justify-center w-full bg-white border border-button-border-light rounded-lg p-1 pr-3"
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
        type="button"
        aria-label="Sign in with Google"
        class="flex items-center w-full justify-center bg-white border border-button-border-light rounded-lg p-1 pr-3"
      >
        <div class="flex items-center justify-center bg-white w-9 h-9 rounded-l">
          <FaApple className="text-xl" />
        </div>
        <span class="text-sm text-google-text-gray tracking-wider">
          Sign in with Apple
        </span>
      </button>
      {/* <button
        type="button"
        aria-label="Sign in with Facebook"
        class="flex items-center bg-white border border-button-border-light rounded-lg p-1 pr-3"
      >
        <div class="flex items-center justify-center bg-white w-9 h-9 rounded-l">
          <FaFacebookF className="text-xl text-[#1877F2]" />
        </div>
        <span class="text-sm text-google-text-gray tracking-wider">
          Sign in with Facebook
        </span>
      </button> */}
    </div>
  );
};

export default SocialLogin;
