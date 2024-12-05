import React, { useContext, useState } from "react";
import InvoiceModal from "../../components/app/paymentsandinvoice/InvoiceModal";
import api from "../../api/apiInterceptor";
import { useEffect } from "react";
import { NoData } from "../../assets/export";
import axios from "axios";
import { AppContext } from "../../context/AppContext";

const PaymentsInvoice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setError } = useContext(AppContext);

  // Invoices:
  const [invoices, setInvoices] = useState([]);
  const [filter, setFilter] = useState("paid");
  const [loading, setLoading] = useState(false);

  const getInvoices = async () => {
    try {
      setLoading(true);
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const invoices = await axios.post(
        `https://backend.faresharellc.com/broker/invoice`,
        {
          status: filter == "paid" ? "completed" : "pending",
        },
        { headers }
      );
      setInvoices(invoices?.data?.data);
    } catch (error) {
      setError(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInvoices();
  }, [filter]);

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getUTCFullYear();

    return `${month}/${day}/${year}`;
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

  // pagination related data:

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(invoices?.length / itemsPerPage);

  const currentData = invoices?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [invoice, setInvoice] = useState(null);
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
      <div className="w-full h-auto p-4 text-left text-xs text-[#c00000] rounded-3xl font-normal bg-[#c00000]/[0.1] ">
        Note: Late Payment and Fees: Any outstanding balance not paid within
        three (3) days of the payment due date will incur a late fee of 10% of
        the total outstanding balance for each day the payment remains overdue.
        If the balance remains unpaid beyond three (3) days from the payment due
        date, the account associated with the outstanding balance will be
        temporarily suspended or deactivated until the full payment is received.
      </div>
      <div className="w-full overflow-x-auto rounded-3xl border  border-gray-300 bg-gray-50   ">
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
              {currentData?.map((invoice, key) => {
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
          <div className="w-full h-[75vh] flex flex-col  border-t items-center border-collapse justify-center">
            <img src={"/no-data.png"} alt="no-data" className="w-48" />
            <span className="text-gray-700 text-2xl font-bold">
              No Data Available
            </span>
          </div>
        )}

        <InvoiceModal setIsOpen={setIsOpen} isOpen={isOpen} invoice={invoice} />
      </div>
      {!loading && invoices?.length > 0 && (
        <nav
          class="flex w-full items-center  justify-end  -space-x-px"
          aria-label="Pagination"
        >
          <button
            type="button"
            onClick={() =>
              goToPage(currentPage > 1 ? currentPage - 1 : currentPage)
            }
            class="min-h-[38px] min-w-[38px] py-2 bg-gray-50 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-xl last:rounded-e-xl border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
            aria-label="Previous"
          >
            <svg
              class="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            <span class="hidden sm:block">Previous</span>
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => goToPage(i + 1)}
              class={`min-h-[38px] min-w-[38px]  flex hover:bg-gray-100 justify-center items-center  text-gray-800 ${
                currentPage === i + 1
                  ? " border bg-[#c00000] text-white hover:bg-[#c00000] "
                  : "border bg-gray-50"
              }    py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none  disabled:opacity-50 disabled:pointer-events-none `}
              aria-current="page"
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() =>
              goToPage(currentPage < totalPages ? currentPage + 1 : currentPage)
            }
            class="min-h-[38px] min-w-[38px] py-2 bg-gray-50 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-xl last:rounded-e-xl border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
            aria-label="Next"
          >
            <span class="hidden sm:block">Next</span>
            <svg
              class="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </nav>
      )}
    </div>
  );
};

export default PaymentsInvoice;
