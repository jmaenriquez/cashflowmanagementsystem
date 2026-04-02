import React from "react";
import {EllipsisVertical} from "lucide-react";

function Cashflow() {

  const cashflowData = [
    {desc: "Description 1", accgrp: "Asset", amount: 1961, date: "Jan 1, 2026"},
    {desc: "Description 2", accgrp: "Asset", amount: 1961, date: "Jan 1, 2026"},
    {desc: "Description 3", accgrp: "Asset", amount: 1961, date: "Jan 1, 2026"},
    {desc: "Description 4", accgrp: "Asset", amount: 1961, date: "Jan 1, 2026"},
    {desc: "Description 5", accgrp: "Asset", amount: 1961, date: "Jan 1, 2026"},
    {desc: "Description 6", accgrp: "Asset", amount: 1961, date: "Jan 1, 2026"}
  ];

  const totalAmount = cashflowData.reduce((total, item) => total + item.amount, 0);


  return (
    <div className="flex font-roboto text-wide w-full">
      <div className="main-content pt-16 px-12 w-full">
        <h1 className="text-4xl font-semibold text-[#1E293B]">
          Cash Flow Statement
        </h1>

        <div className="actions mt-12 flex justify-end">
          <input
            className="border-2 rounded-lg p-2 mr-4 h-10"
            type="date"
            placeholder="Start Date"
          />
          <input
            className="border-2 rounded-lg p-2 mr-4 h-10"
            type="date"
            placeholder="End Date"
          />
          <button className="bg-[#3671D9] font-semibold text-white h-10 pl-4 pr-4 rounded hover:bg-[#2a5cb0]">
            New Record
          </button>
        </div>

        <div className="table-auto md:table-fixed mt-2">
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
              {cashflowData.map((item, index) => (
                <tr key={index}>
                  <td className="py-4 pl-4">{item.desc}</td>
                  <td className="py-4 pl-4">{item.accgrp}</td>
                  <td className="py-4 pl-4">{item.amount}</td>
                  <td className="py-4 pl-4">{item.date}</td>
                  <td className="py-4 pl-4">
                    <EllipsisVertical />
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="mt-4">
                <th className="py-4 pl-4">Total</th>
                <th className="py-4 pl-4"></th>
                <th className="py-4 pl-4">{totalAmount}</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cashflow;
