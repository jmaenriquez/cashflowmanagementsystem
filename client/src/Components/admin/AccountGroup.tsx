import React from "react";
import { EllipsisVertical, Plus } from "lucide-react";
import Form from "./AccountGroupForm";

function accGrp() {
  const cashflowData = [
    {
      name: "Asset",
      desc: "Description 1",
    },

    {
      name: "Asset",
      desc: "Description 2",
    },

    {
      name: "Asset",
      desc: "Description 3",
    },

    {
      name: "Asset",
      desc: "Description 4",
    },

    {
      name: "Asset",
      desc: "Description 5",
    },

    {
      name: "Asset",
      desc: "Description 6",
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex font-roboto text-wide w-full">
      <div className="main-content pt-16 px-12 w-full">
        <h1 className="text-4xl font-semibold text-[#1E293B]">
          Account Groups
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
            <span>Account</span>
          </button>
        </div>

        <div>
          <Form isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>

        <div className="table-auto md:table-fixed mt-2 overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full text-left rounded-lg text-[#1E293B] shadow-lg">
            <thead className="bg-[#3671D9] text-white h-12">
              <tr className="">
                <th className="py-2 pl-4">Account Name</th>
                <th className="py-2 pl-4">Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cashflowData.map((item, index) => (
                <tr key={index}>
                  <td className="py-4 pl-4">{item.name}</td>
                  <td className="py-4 pl-4">{item.desc}</td>
                  <td className="py-4 pl-4">
                    <EllipsisVertical />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default accGrp;
