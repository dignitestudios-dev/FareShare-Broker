import React from "react";
import { MdOutlinePending } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiProgress2Line } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import GoogleMaps from "../../components/app/ride/GoogleMaps";

const TrackRideDetail = () => {
  return (
    <div className="w-[calc(100%+2rem)] h-full -m-4  flex flex-col justify-start items-start">
      <div className="w-full p-4 h-auto flex gap-6 justify-between items-start">
        <div className="w-auto flex flex-col gap-1 justify-start items-start">
          <h3 className="text-xl font-semibold text-gray-900">
            Requester Information
          </h3>
          <span className="text-2xl font-bold text-[#c00000]">Jane Doe</span>
        </div>
        <div className="w-auto flex flex-col justify-start items-start">
          <span className="flex text-lg text-gray-900 font-semibold justify-start items-center gap-2">
            <span className="">Estimated Fare:</span>
            <span className="text-[#c00000]">$100</span>
          </span>
          <span className="flex text-lg text-gray-900 font-semibold justify-start items-center gap-2">
            <span className="">Total:</span>
            <span className="text-2xl text-[#c00000]">$120</span>
          </span>
        </div>
      </div>

      <div className="w-full border-y grid grid-cols-3 justify-start items-start">
        <div className="w-full px-6 py-4 lg:col-span-1 border-r flex flex-col gap-4 justify-start items-start ">
          <span className="text-xl font-bold text-gray-900">Timeline</span>
          <ul
            role="list"
            class="w-auto flex flex-col items-start justify-center"
          >
            <li>
              <div class="relative pb-8">
                <span
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span class="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center ring-8 ring-white">
                      <MdOutlinePending />
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-gray-500">Pending</p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                      <time datetime="2020-09-20">08:00 PM</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <span
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span class="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center ring-8 ring-white">
                      <VscOpenPreview />
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-gray-500">In-review</p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                      <time datetime="2020-09-22">08:02 PM</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <span
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span class="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center ring-8 ring-white">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-gray-500">Confirmed</p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                      <time datetime="2020-09-28">08:04 PM</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <span
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span class="h-8 w-8 rounded-full bg-yellow-500 text-gray-900 flex items-center justify-center ring-8 ring-white">
                      <RiProgress2Line />
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-gray-500">In-progress</p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                      <time datetime="2020-09-30">08:04 PM</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <div class="relative flex space-x-3">
                  <div>
                    <span class="h-8 w-8 rounded-full bg-red-500 text-white flex items-center justify-center ring-8 ring-white">
                      <IoCheckmarkDoneCircleOutline />
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-gray-500">Completed</p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                      <time datetime="2020-10-04">N/A</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full lg:col-span-2 flex flex-col justify-start items-start gap-4">
          <div className="w-full border-b px-6 py-4 flex flex-col gap-4 justify-start items-start">
            <span className="text-xl font-bold text-gray-900">
              Client's Information
            </span>

            <div className="w-full  h-auto flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-between items-center">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Name:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  Michael
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Pickup Location:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  lorem ipsum dolor summit
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Dropoff Location:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  lorem ipsum dolor summit
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Additional Request:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  repudiandae.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full  px-6 py-4 flex flex-col gap-4 justify-start items-start">
            <span className="text-xl font-bold text-gray-900">
              Driver's Information
            </span>

            <div className="w-full  h-auto flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-between items-center">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Name:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  Jason Smith
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Contact:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  1234567890
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Car Model:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  Toyotta Prius
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Car License Plate No.:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  ABC-1234
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full   rounded-3xl p-4 ">
        <GoogleMaps />
      </div>
    </div>
  );
};

export default TrackRideDetail;
