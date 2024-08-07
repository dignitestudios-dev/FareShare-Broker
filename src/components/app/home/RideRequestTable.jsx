import React, { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import CancelRideModal from "../ride/CancelRideModal";

const RideRequestTable = () => {
  const { navigate } = useContext(AppContext);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  return (
    <div className="w-full overflow-x-auto rounded-2xl border  border-gray-300 bg-white   ">
      <div class="w-full h-14 px-4 flex justify-between items-center">
        <span class="text-lg  text-[#c00000] font-semibold">Ride Requests</span>
        <button
          onClick={() => navigate("Home", "/ride/ride-requests")}
          class="w-24 h-8 rounded-full bg-[#c00000] text-white text-xs font-semibold flex items-center justify-center"
        >
          View All
        </button>
      </div>
      <table className="w-full border-collapse  text-left text-sm text-gray-500">
        <thead className="bg-[#c00000]">
          <tr className="">
            <th
              scope="col"
              className="px-6 lg:px-4  py-4 font-medium text-white"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 lg:px-4  py-4 font-medium text-white"
            >
              Client Info
            </th>

            <th
              scope="col"
              className="px-6 lg:px-4  py-4 font-medium text-white"
            >
              Pickup Location
            </th>

            <th
              scope="col"
              className="px-6 lg:px-4  py-4 font-medium text-white"
            >
              Dropoff Location
            </th>
            <th
              scope="col"
              className="px-6 lg:px-4  py-4 font-medium text-white"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 lg:px-4  py-4 font-medium text-white"
            ></th>
            <th
              scope="col"
              className="px-6 lg:px-4  py-4 font-medium text-white"
            ></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 border-t border-[#c00000]">
          <tr className="">
            <td className="px-6 lg:px-4  py-4 text-gray-600 font-normal ">
              25/06/2024
            </td>
            <th className="px-6 lg:px-4  flex gap-3  py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">Jack Anderson</div>
                <div className="text-gray-600">jackanderson@gmail.com</div>
              </div>
            </th>

            <td className="px-6 lg:px-4 text-gray-600  py-4 capitalize">
              Lorem ipsum dolor, sit amet
            </td>
            <td className="px-6 lg:px-4 text-gray-600 py-4 capitalize">
              Lorem ipsum dolor, sit amet
            </td>

            <td className="px-6 lg:px-4  py-4">
              <button className="w-auto px-2 h-6 bg-yellow-500/10 border border-yellow-500 hover:opacity-80 text-yellow-500 rounded-full text-xs">
                Pending
              </button>
            </td>
            <td className="px-6 lg:px-4  py-4 capitalize">
              <button
                onClick={() => navigate("Home", "/ride/ride-detail/123")}
                className="text-[#c00000] text-xs font-semibold"
              >
                View More
              </button>
            </td>
            <td className="px-6 lg:px-4  py-4 capitalize">
              <button
                onClick={() => setIsCancelOpen(true)}
                class="w-28 h-8 bg-[#c00000] flex items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 text-[#fff] hover:bg-gray-800"
              >
                Cancel Request
              </button>
            </td>
          </tr>
          <tr className="">
            <td className="px-6 lg:px-4  py-4 text-gray-600 font-normal ">
              25/06/2024
            </td>
            <th className="px-6 lg:px-4  flex gap-3  py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">Jack Anderson</div>
                <div className="text-gray-600">jackanderson@gmail.com</div>
              </div>
            </th>

            <td className="px-6 lg:px-4 text-gray-600  py-4 capitalize">
              Lorem ipsum dolor, sit amet
            </td>
            <td className="px-6 lg:px-4 text-gray-600 py-4 capitalize">
              Lorem ipsum dolor, sit amet
            </td>

            <td className="px-6 lg:px-4  py-4">
              <button className="w-auto px-2 h-6 bg-yellow-500/10 border border-yellow-500 hover:opacity-80 text-yellow-500 rounded-full text-xs">
                Pending
              </button>
            </td>
            <td className="px-6 lg:px-4  py-4 capitalize">
              <button
                onClick={() => navigate("Home", "/ride/ride-detail/123")}
                className="text-[#c00000] text-xs font-semibold"
              >
                View More
              </button>
            </td>
            <td className="px-6 lg:px-4  py-4 capitalize">
              <button
                onClick={() => setIsCancelOpen(true)}
                class="w-28 h-8 bg-[#c00000] flex items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 text-[#fff] hover:bg-gray-800"
              >
                Cancel Request
              </button>
            </td>
          </tr>
          <tr className="">
            <td className="px-6 lg:px-4  py-4 text-gray-600 font-normal ">
              25/06/2024
            </td>
            <th className="px-6 lg:px-4  flex gap-3  py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">Jack Anderson</div>
                <div className="text-gray-600">jackanderson@gmail.com</div>
              </div>
            </th>

            <td className="px-6 lg:px-4 text-gray-600  py-4 capitalize">
              Lorem ipsum dolor, sit amet
            </td>
            <td className="px-6 lg:px-4 text-gray-600 py-4 capitalize">
              Lorem ipsum dolor, sit amet
            </td>

            <td className="px-6 lg:px-4  py-4">
              <button className="w-auto px-2 h-6 bg-yellow-500/10 border border-yellow-500 hover:opacity-80 text-yellow-500 rounded-full text-xs">
                Pending
              </button>
            </td>
            <td className="px-6 lg:px-4  py-4 capitalize">
              <button
                onClick={() => navigate("Home", "/ride/ride-detail/123")}
                className="text-[#c00000] text-xs font-semibold"
              >
                View More
              </button>
            </td>
            <td className="px-6 lg:px-4  py-4 capitalize">
              <button
                onClick={() => setIsCancelOpen(true)}
                class="w-28 h-8 bg-[#c00000] flex items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 text-[#fff] hover:bg-gray-800"
              >
                Cancel Request
              </button>
            </td>
          </tr>
          <tr className="">
            <td className="px-6 lg:px-4  py-4 text-gray-600 font-normal ">
              25/06/2024
            </td>
            <th className="px-6 lg:px-4  flex gap-3  py-4 font-normal text-gray-900">
              <div className="relative h-10 w-10">
                <img
                  className="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-800">Jack Anderson</div>
                <div className="text-gray-600">jackanderson@gmail.com</div>
              </div>
            </th>

            <td className="px-6 lg:px-4 text-gray-600  py-4 capitalize">
              Lorem ipsum dolor, sit amet
            </td>
            <td className="px-6 lg:px-4 text-gray-600 py-4 capitalize">
              Lorem ipsum dolor, sit amet
            </td>

            <td className="px-6 lg:px-4  py-4">
              <button className="w-auto px-2 h-6 bg-yellow-500/10 border border-yellow-500 hover:opacity-80 text-yellow-500 rounded-full text-xs">
                Pending
              </button>
            </td>
            <td className="px-6 lg:px-4  py-4 capitalize">
              <button
                onClick={() => navigate("Home", "/ride/ride-detail/123")}
                className="text-[#c00000] text-xs font-semibold"
              >
                View More
              </button>
            </td>
            <td className="px-6 lg:px-4  py-4 capitalize">
              <button
                onClick={() => setIsCancelOpen(true)}
                class="w-28 h-8 bg-[#c00000] flex items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 text-[#fff] hover:bg-gray-800"
              >
                Cancel Request
              </button>
            </td>
          </tr>
        </tbody>
        <CancelRideModal isOpen={isCancelOpen} setIsOpen={setIsCancelOpen} />
      </table>
    </div>
  );
};

export default RideRequestTable;
