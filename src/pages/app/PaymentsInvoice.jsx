import React, { useState } from "react";
import InvoiceModal from "../../components/app/paymentsandinvoice/InvoiceModal";
import api from "../../api/apiInterceptor";
import { useEffect } from "react";
import { NoData } from "../../assets/export";

const PaymentsInvoice = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Invoices:
  const [invoices, setInvoices] = useState(null);

  const getInvoices = async () => {
    const invoices = await api.get("/broker/invoice");
    console.log(invoices);
  };

  useEffect(() => {
    getInvoices();
  }, []);
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-2">
      <div className="w-full overflow-x-auto rounded-2xl border  border-gray-300 bg-white   ">
        <div class="w-full h-14 px-4 flex justify-between items-center">
          <span class="text-lg  text-[#c00000] font-semibold">
            Payments & Invoices
          </span>
          <div className="w-auto group flex border rounded-full justify-start items-start">
            <button class="w-24 h-8 rounded-full   bg-[#c00000] text-white text-xs font-semibold flex items-center justify-center">
              Paid
            </button>
            <button class="w-24 h-8 rounded-full  text-gray-800  text-xs font-semibold flex items-center justify-center">
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
                return (
                  <tr key={key} className="">
                    <td className="px-6 lg:px-4  py-4 text-gray-600 font-normal ">
                      25/06/2024
                    </td>
                    <td className="px-6 lg:px-4  py-4 text-gray-600 font-normal ">
                      25/06/2024
                    </td>

                    <td className="px-6 lg:px-4 text-gray-600  py-4 capitalize">
                      March
                    </td>
                    <td className="px-6 lg:px-4 text-gray-600 py-4 capitalize">
                      $800
                    </td>

                    <td className="px-6 lg:px-4  py-4 capitalize">
                      <button
                        onClick={() => setIsOpen(true)}
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

        <InvoiceModal setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default PaymentsInvoice;
