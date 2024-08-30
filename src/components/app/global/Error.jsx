import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = ({ error, setError }) => {
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 5000);
  }, [error]);

  return (
    <div
      class={`max-w-xs z-50 transition-all duration-500 fixed bottom-4 right-3 bg-white ${
        error ? "translate-x-0" : "translate-x-96"
      } border border-gray-200 rounded-xl shadow-lg  `}
      role="alert"
      tabindex="-1"
      aria-labelledby="hs-toast-stack-toggle-label"
    >
      <div class="flex p-4">
        <div class="shrink-0">
          <svg
            class="shrink-0 size-4 text-red-500 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
          </svg>
        </div>
        <div class="ms-3">
          <p id="hs-toast-error-example-label" class="text-sm text-gray-700 ">
            {error}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;