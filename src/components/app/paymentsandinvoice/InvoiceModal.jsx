import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";

const InvoiceModal = ({ isOpen, setIsOpen, invoice }) => {
  const dummyArr = [1, 2];
  const modalRef = useRef();
  const toggleModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  };

  function getMonthNameFromISOString(isoString) {
    // Create a Date object from the ISO 8601 string
    const date = new Date(isoString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string");
    }

    // Array of month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the month name
    return monthNames[date.getMonth()];
  }
  return (
    <div
      onClick={toggleModal}
      className={`w-screen ${
        isOpen ? "flex" : "hidden"
      } h-screen fixed top-0 left-0 z-[1000]  justify-center items-center bg-black/[0.46]`}
    >
      <div
        ref={modalRef}
        className="w-auto  h-auto lg:max-h-[85vh] relative rounded-3xl bg-white  p-8 flex flex-col gap-8"
      >
        <div className="w-full h-[5%] flex items-center justify-start">
          <span className="text-3xl font-extrabold text-black">Invoice</span>
        </div>
        <div className="w-full h-auto flex flex-col gap-4 justify-start items-start">
          <div className=" w-full flex items-center justify-start">
            <span className="text-lg font-semibold">Billed To</span>
          </div>
          <div className="w-full flex justify-start items-start h-auto">
            {/* <div className="w-1/2 h-auto flex flex-col gap-1">
              <span className="text-sm text-left  font-medium text-gray-600">
                Methodist Hospital
              </span>
              <span className="text-sm text-left  font-medium text-gray-600">
                +1 5806099705
              </span>
              <span className="text-sm text-left  font-medium text-gray-600">
                Ivy, Road, Hawkville, USA 3106
              </span>
            </div> */}

            <div className="w-1/2 h-auto flex flex-col justify-start items-start gap-1">
              <span className="text-sm text-left  font-medium text-gray-600">
                Invoice No. {invoice?.invoiceNo}
              </span>
              <span className="text-sm text-left  font-medium text-gray-600">
                Generated on: {formatDate(invoice?.generatedOn)}
              </span>
              {/* <span className="text-sm text-left  font-medium text-gray-600">
                Due on: {formatDate(invoice?.dueOn)}
              </span> */}
              <span className="text-sm text-left  font-medium text-gray-600">
                Payable By: {formatDate(invoice?.dueOn)}
              </span>
            </div>
          </div>

          <div className="relative overflow-x-auto w-full h-auto ">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-md  font-medium text-gray-700 uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" className="px-6 py-2">
                    Client's name
                  </th>
                  <th scope="col" className="px-6 py-2">
                    Ride Date
                  </th>

                  <th scope="col" className="px-6 py-2">
                    Price
                  </th>
                </tr>
              </thead>
              {invoice?.transactionId?.length > 0 ? (
                <tbody>
                  {invoice?.transactionId?.map(() => {
                    return (
                      <tr className="bg-white border-b text-sm  border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                        >
                          Mike Smith
                        </th>
                        <td className="px-6 py-2">4 June 2023</td>
                        <td className="px-6 py-2">$20</td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  <tr className="bg-white border-b text-sm  border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
                    ></th>
                    <td className="py-2">No Transactions</td>
                    <td className="px-6 py-2"></td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
          <div className="w-full flex items-center gap-3 justify-end">
            <span className="text-xl lg:text-3xl text-black border-b-2 border-[#000] border-double font-semibold">
              Total
            </span>

            <span className="text-xl lg:text-3xl text-[#c00000] font-semibold">
              ${invoice?.amount ? Number(invoice?.amount.toFixed(2)) : 0}
            </span>
          </div>
          {/* <div className="w-full flex h-auto justify-start items-start">
            <div className="text-black text-md font-medium w-2/3 h-auto flex flex-col gap-1">
              <div className="w-full text-sm flex justify-between items-center">
                <span>Bank Name</span>
                <span>Bank of America</span>
              </div>

              <div className="w-full text-sm flex justify-between items-center">
                <span>Account Name</span>
                <span>Jane Doe</span>
              </div>

              <div className="w-full text-sm flex justify-between items-center">
                <span>Account No</span>
                <span>0001235648994</span>
              </div>

              <div className="w-full text-sm flex justify-between items-center">
                <span>Payable by</span>
                <span>12/03/2023</span>
              </div>
            </div>
            <button className=" absolute bottom-3 right-3 rounded-lg flex items-center justify-center text-white w-auto p-2 text-sm h-12 bg-[#c00000]">
              Send Copy to my Email
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
