import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { CiFilter } from "react-icons/ci";
import DateFilterModal from "../../components/app/DateFilterModal";
import { useEffect } from "react";
import api from "../../api/apiInterceptor";

const Bookings = () => {
  const { navigate } = useContext(AppContext);
  const [openFilter, setOpenFilter] = useState(false);

  // Invoices:
  const [bookings, setBookings] = useState(null);

  const getBookings = async () => {
    const bookings = await api.get("/broker/bookings");
    console.log(bookings);
  };

  useEffect(() => {
    getBookings();
  }, []);
  return (
    <div className="w-full h-auto flex flex-col gap-4  justify-start items-start">
      <div className="w-full h-12 gap-2 flex justify-end items-center">
        <div className="w-[40%] h-12 flex justify-start items-center gap-2  relative">
          <input
            type="text"
            id="name"
            placeholder="e.g. John Smith"
            className="mt-2 block w-full rounded-full border border-gray-200 bg-gray-50 px-3 h-12 shadow-sm outline-none focus:border-gradient focus:ring focus:ring-purple-200 focus:ring-opacity-50"
          />

          <button className="active:scale-95 absolute right-1 top-2 rounded-full bg-[#c00000] px-8 h-10 font-medium text-white outline-none   hover:opacity-90">
            Search
          </button>
        </div>

        <button
          onClick={() => setOpenFilter(true)}
          className="mt-2 w-10 h-10 rounded-full border text-xl bg-gray-50 flex items-center justify-center"
        >
          <CiFilter />
        </button>
      </div>
      <div className="w-full h-auto grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="w-full h-[167px] rounded-3xl p-4  flex flex-col justify-between items-start gap-2 border bg-gray-50">
          <div class="w-full h-10 flex justify-between items-center">
            <span class="text-2xl font-semibold text-[#c00000]">Michael</span>
            <button
              onClick={() => navigate("Bookings", "/ride/ride-detail/123")}
              class="w-8 h-8 rounded-full bg-[#c00000] flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-white text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
            </button>
          </div>
          <div class="flex flex-col w-full h-auto mt-auto mb-auto items-end justify-center">
            <div class="flex justify-end items-end gap-2 w-full h-auto">
              <span class="text-gray-500 text-md md:text-lg font-semibold">
                Preferability
              </span>
              <span class="text-[#c00000] text-md md:text-xl font-semibold">
                75%
              </span>
            </div>
            <div class="w-full bg-gray-300 h-[2px] rounded-full">
              <div class="w-3/4 bg-[#c00000] h-[2px] rounded-full"></div>
            </div>
          </div>
          <div class="w-full flex justify-start items-end gap-2 h-10">
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                Wed, Nov 10
              </span>
            </div>
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                05:06 PM
              </span>
            </div>
          </div>
        </div>
        <div class="w-full h-[167px] rounded-3xl p-4  flex flex-col justify-between items-start gap-2 border bg-gray-50">
          <div class="w-full h-10 flex justify-between items-center">
            <span class="text-2xl font-semibold text-[#c00000]">Michael</span>
            <button
              onClick={() => navigate("Bookings", "/ride/ride-detail/123")}
              class="w-8 h-8 rounded-full bg-[#c00000] flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-white text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
            </button>
          </div>
          <div class="flex flex-col w-full h-auto mt-auto mb-auto items-end justify-center">
            <div class="flex justify-end items-end gap-2 w-full h-auto">
              <span class="text-gray-500 text-md md:text-lg font-semibold">
                Preferability
              </span>
              <span class="text-[#c00000] text-md md:text-xl font-semibold">
                75%
              </span>
            </div>
            <div class="w-full bg-gray-300 h-[2px] rounded-full">
              <div class="w-3/4 bg-[#c00000] h-[2px] rounded-full"></div>
            </div>
          </div>
          <div class="w-full flex justify-start items-end gap-2 h-10">
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                Wed, Nov 10
              </span>
            </div>
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                05:06 PM
              </span>
            </div>
          </div>
        </div>
        <div class="w-full h-[167px] rounded-3xl p-4  flex flex-col justify-between items-start gap-2 border bg-gray-50">
          <div class="w-full h-10 flex justify-between items-center">
            <span class="text-2xl font-semibold text-[#c00000]">Michael</span>
            <button
              onClick={() => navigate("Bookings", "/ride/ride-detail/123")}
              class="w-8 h-8 rounded-full bg-[#c00000] flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-white text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
            </button>
          </div>
          <div class="flex flex-col w-full h-auto mt-auto mb-auto items-end justify-center">
            <div class="flex justify-end items-end gap-2 w-full h-auto">
              <span class="text-gray-500 text-md md:text-lg font-semibold">
                Preferability
              </span>
              <span class="text-[#c00000] text-md md:text-xl font-semibold">
                75%
              </span>
            </div>
            <div class="w-full bg-gray-300 h-[2px] rounded-full">
              <div class="w-3/4 bg-[#c00000] h-[2px] rounded-full"></div>
            </div>
          </div>
          <div class="w-full flex justify-start items-end gap-2 h-10">
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                Wed, Nov 10
              </span>
            </div>
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                05:06 PM
              </span>
            </div>
          </div>
        </div>
        <div class="w-full h-[167px] rounded-3xl p-4  flex flex-col justify-between items-start gap-2 border bg-gray-50">
          <div class="w-full h-10 flex justify-between items-center">
            <span class="text-2xl font-semibold text-[#c00000]">Michael</span>
            <button
              onClick={() => navigate("Bookings", "/ride/ride-detail/123")}
              class="w-8 h-8 rounded-full bg-[#c00000] flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-white text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
            </button>
          </div>
          <div class="flex flex-col w-full h-auto mt-auto mb-auto items-end justify-center">
            <div class="flex justify-end items-end gap-2 w-full h-auto">
              <span class="text-gray-500 text-md md:text-lg font-semibold">
                Preferability
              </span>
              <span class="text-[#c00000] text-md md:text-xl font-semibold">
                75%
              </span>
            </div>
            <div class="w-full bg-gray-300 h-[2px] rounded-full">
              <div class="w-3/4 bg-[#c00000] h-[2px] rounded-full"></div>
            </div>
          </div>
          <div class="w-full flex justify-start items-end gap-2 h-10">
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                Wed, Nov 10
              </span>
            </div>
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                05:06 PM
              </span>
            </div>
          </div>
        </div>
        <div class="w-full h-[167px] rounded-3xl p-4  flex flex-col justify-between items-start gap-2 border bg-gray-50">
          <div class="w-full h-10 flex justify-between items-center">
            <span class="text-2xl font-semibold text-[#c00000]">Michael</span>
            <button
              onClick={() => navigate("Bookings", "/ride/ride-detail/123")}
              class="w-8 h-8 rounded-full bg-[#c00000] flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-white text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
            </button>
          </div>
          <div class="flex flex-col w-full h-auto mt-auto mb-auto items-end justify-center">
            <div class="flex justify-end items-end gap-2 w-full h-auto">
              <span class="text-gray-500 text-md md:text-lg font-semibold">
                Preferability
              </span>
              <span class="text-[#c00000] text-md md:text-xl font-semibold">
                75%
              </span>
            </div>
            <div class="w-full bg-gray-300 h-[2px] rounded-full">
              <div class="w-3/4 bg-[#c00000] h-[2px] rounded-full"></div>
            </div>
          </div>
          <div class="w-full flex justify-start items-end gap-2 h-10">
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                Wed, Nov 10
              </span>
            </div>
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                05:06 PM
              </span>
            </div>
          </div>
        </div>
        <div class="w-full h-[167px] rounded-3xl p-4  flex flex-col justify-between items-start gap-2 border bg-gray-50">
          <div class="w-full h-10 flex justify-between items-center">
            <span class="text-2xl font-semibold text-[#c00000]">Michael</span>
            <button
              onClick={() => navigate("Bookings", "/ride/ride-detail/123")}
              class="w-8 h-8 rounded-full bg-[#c00000] flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-white text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"></path>
                <path d="M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"></path>
              </svg>
            </button>
          </div>
          <div class="flex flex-col w-full h-auto mt-auto mb-auto items-end justify-center">
            <div class="flex justify-end items-end gap-2 w-full h-auto">
              <span class="text-gray-500 text-md md:text-lg font-semibold">
                Preferability
              </span>
              <span class="text-[#c00000] text-md md:text-xl font-semibold">
                75%
              </span>
            </div>
            <div class="w-full bg-gray-300 h-[2px] rounded-full">
              <div class="w-3/4 bg-[#c00000] h-[2px] rounded-full"></div>
            </div>
          </div>
          <div class="w-full flex justify-start items-end gap-2 h-10">
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                Wed, Nov 10
              </span>
            </div>
            <div class="w-1/2 h-auto flex gap-2 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                class="text-[12px] sm:text-[14px] md:text-[14px] xl:text-[15px] text-[#c00000]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              <span class="text-gray-800 text-[9px] sm:text-[14px] md:text-[12px] xl:text-[15px] font-[600]">
                05:06 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      <DateFilterModal isOpen={openFilter} setIsOpen={setOpenFilter} />
    </div>
  );
};

export default Bookings;
