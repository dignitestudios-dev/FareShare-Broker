import React, { useState } from "react";
import InvoiceModal from "../../components/app/paymentsandinvoice/InvoiceModal";
import api from "../../api/apiInterceptor";
import { useEffect } from "react";
import { NoData } from "../../assets/export";

const PaymentsInvoice = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Invoices:
  const [invoices, setInvoices] = useState(null);
  const [filter, setFilter] = useState("paid");

  const getInvoices = async () => {
    const invoices = await api.post(`/broker/invoice`, {
      status: filter == "paid" ? "completed" : "pending",
    });
    setInvoices(invoices?.data?.data);
  };

  useEffect(() => {
    getInvoices();
  }, [filter]);

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

  const [invoice, setInvoice] = useState(null);
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
      <div className="w-full overflow-x-auto rounded-2xl border  border-gray-300 bg-white   ">
        <div class="w-full h-14 px-4 flex justify-between items-center">
          <span class="text-lg  text-[#c00000] font-semibold">
            Payments & Invoices
          </span>
          <div className="w-auto group flex border rounded-full justify-start items-start">
            <button
              onClick={() => setFilter("paid")}
              class={`w-24 h-8 rounded-full   ${
                filter == "paid" ? "bg-[#c00000] text-white" : "text-gray-800 "
              } text-xs font-semibold flex items-center justify-center`}
            >
              Paid
            </button>
            <button
              onClick={() => setFilter("pending")}
              class={`w-24 h-8 rounded-full   ${
                filter == "pending"
                  ? "bg-[#c00000] text-white"
                  : "text-gray-800 "
              } text-xs font-semibold flex items-center justify-center`}
            >
              Pending
            </button>
          </div>
        </div>
        {invoices?.length > 0 ? (
          <table className="w-full border-collapse  text-left text-sm text-gray-500">
            <thead className="bg-[#c00000]">
              <tr className="">
                <th
                  scope="col"
                  className="px-6 lg:px-4  py-4 font-medium text-white"
                >
                  Invoice Date
                </th>
                <th
                  scope="col"
                  className="px-6 lg:px-4  py-4 font-medium text-white"
                >
                  Due Date
                </th>

                <th
                  scope="col"
                  className="px-6 lg:px-4  py-4 font-medium text-white"
                >
                  Billing Month
                </th>

                <th
                  scope="col"
                  className="px-6 lg:px-4  py-4 font-medium text-white"
                >
                  Invoice Amount
                </th>

                <th
                  scope="col"
                  className="px-6 lg:px-4  py-4 font-medium text-white"
                ></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 border-t border-[#c00000]">
              {invoices?.map((invoice, key) => {
                console.log(invoice);
                return (
                  <tr key={key} className="">
                    <td className="px-6 lg:px-4  py-4 text-gray-600 font-normal ">
                      {formatDate(invoice?.generatedOn)}
                    </td>
                    <td className="px-6 lg:px-4  py-4 text-gray-600 font-normal ">
                      {formatDate(invoice?.dueOn)}
                    </td>

                    <td className="px-6 lg:px-4 text-gray-600  py-4 capitalize">
                      {getMonthNameFromISOString(invoice?.dueOn)}
                    </td>
                    <td className="px-6 lg:px-4 text-gray-600 py-4 capitalize">
                      $
                      {invoice?.amount ? Number(invoice?.amount.toFixed(2)) : 0}
                    </td>

                    <td className="px-6 lg:px-4  py-4 capitalize">
                      <button
                        onClick={() => {
                          setIsOpen(true);
                          setInvoice(invoice);
                        }}
                        className="text-[#c00000] text-xs font-semibold"
                      >
                        View More
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="w-full h-[75vh] flex border-t items-center border-collapse justify-center">
            <img src={NoData} alt="no-data" className="w-96" />
          </div>
        )}

        <InvoiceModal setIsOpen={setIsOpen} isOpen={isOpen} invoice={invoice} />
      </div>
    </div>
  );
};

export default PaymentsInvoice;
