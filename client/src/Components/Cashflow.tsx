import React from "react";
import { EllipsisVertical, Plus } from "lucide-react";
import Form from "./Form";
import api from "../api";

interface Records {
  id: number;
  recdate: string;
  description: string;
  type: "Debit" | "Credit";
  accgrp: string;
  amount: number;
}

function Cashflow() {
  const [cashflowrec, setcashflowrec] = React.useState<Records[]>([]);
  const totalAmount = cashflowrec
    .reduce((total, item) => total + Number(item.amount), 0)
    .toFixed(2);
  const [isOpen, setIsOpen] = React.useState(false);

  const refreshData = () => {
    api.getRecord().then((data) => setcashflowrec(data));
  };

  React.useEffect(() => {
    api.getRecord().then((data) => {
      console.log("date raw: ", data[0].recdate);
      setcashflowrec(data);
    });
  }, []);

  return (
    <div className="flex font-roboto text-wide w-full">
      <div className="main-content pt-16 px-12 w-full">
        <h1 className="text-4xl font-semibold text-[#1E293B]">
          Cash Flow Statement
        </h1>

        <div className="actions mt-12 mb-6 flex justify-end">
          <input
            className="border-2 rounded-lg p-2 mr-4 h-[41px] w-[150px]"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            placeholder="Start Date"
          />
          <input
            className="border-2 rounded-lg p-2 mr-4 h-[41px] w-[150px]"
            type="text"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
            }}
            placeholder="End Date"
          />
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#3671D9] font-semibold text-white h-[41px] w-[150px] p-4 rounded-lg hover:bg-[#2a5cb0] flex flex-row items-center justify-center"
          >
            <Plus className="w-5 h-5 mr-1 relative top-[1px]" />
            <span>New Record</span>
          </button>
        </div>

        <div>
          <Form
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onSave={refreshData}
          />
        </div>

        <div className="table-auto md:table-fixed mt-2 overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full text-left rounded-lg text-[#1E293B] shadow-lg">
            <thead className="bg-[#3671D9] text-white h-12">
              <tr className="">
                <th className="py-2 pl-4">Description</th>
                <th className="py-2 pl-4">Account Group</th>
                <th className="py-2 pl-4">Amount</th>
                <th className="py-2 pl-4">Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cashflowrec.length > 0 ? (
                cashflowrec.map((item, index) => (
                  <tr key={index}>
                    <td className="py-4 pl-4">{item.description}</td>
                    <td className="py-4 pl-4">{item.accgrp}</td>
                    <td className="py-4 pl-4">{item.amount}</td>
                    <td className="py-4 pl-4">{item.recdate.slice(0, 10)}</td>
                    <td className="py-4 pl-4">
                      <EllipsisVertical />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="p-6 text-gray-500">
                    No data to show.
                  </td>
                </tr>
              )}
            </tbody>

            {cashflowrec.length > 0 ? (
              <tfoot className="border-t ">
                <tr className="">
                  <th className="py-4 pl-4">Grand Total</th>
                  <th className="py-4 pl-4"></th>
                  <th className="py-4 pl-4">{totalAmount}</th>
                  <th></th>
                </tr>
              </tfoot>
            ) : (
              ""
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cashflow;
