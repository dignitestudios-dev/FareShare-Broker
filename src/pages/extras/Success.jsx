import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import { GiCancel } from "react-icons/gi";
import Error from "../../components/app/global/Error";
import SuccessToast from "../../components/app/global/SuccessToast";
const Success = () => {
  const { navigate, error, setError, prodUrl, setSuccess, success } =
    useContext(AppContext);
  const { subId } = useParams();
  const [loading, setLoading] = useState(false);
  const validateAchBank = async () => {
    setLoading(true);
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await axios.post(
        `${prodUrl}/finance/broker/rideBilling/verify`,
        {
          stripeSubscriptionId: subId,
        },
        { headers }
      );
      if (response?.data?.success) {
        setLoading(false);
        if (response?.data?.data?.status) {
          localStorage.setItem(
            "broker",
            JSON.stringify(response?.data?.data?.broker)
          );
          setSuccess("Bank Information Verified Successfully.");
          navigate("Home", "/home");
        }
      }
    } catch (error) {
      // Handle errors (e.g., show error message)
      setError(error?.response?.data?.message);
      // console.error("Login failed:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (subId) {
      validateAchBank();
    } else {
      setError("You don't have a valid subscription id. Please re-signup.");
      localStorage.removeItem("token");
      navigate("Signup", "/signup");
    }
  }, []);
  return subId ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <Error error={error} setError={setError} />
      {<SuccessToast success={success} setSuccess={setSuccess} />}

      <div className="w-auto flex justify-center items-center gap-2 ">
        <span className="text-2xl font-semibold text-gray-800">
          Validating your bank account
        </span>
        {loading && (
          <div
            class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-[#c00000] rounded-full"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-auto flex flex-col justify-center items-center gap-2 ">
        <GiCancel className="text-6xl text-red-600 " />
        <span className="text-2xl font-semibold text-gray-800">
          Subscription Id not found !
        </span>
      </div>
    </div>
  );
};

export default Success;
