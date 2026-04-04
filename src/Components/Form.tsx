import React from "react";

type FormProps = {
  isOpen: boolean;
  onClose: () => void;
};

function Form({ isOpen, onClose }: FormProps) {
  if (!isOpen) return null;

  const [date, setDate] = React.useState(""), 
        [description, setDescription] = React.useState(""),
        [selectedAccGrp, setSelectedAccGrp] = React.useState(""),
        [selectedAccType, setSelectedAccType] = React.useState(""),
        [amount, setAmount] = React.useState("");

  const accgrp = ["Asset", "Liability", "Equity", "Revenue", "Expense"];
  const acctype = ["Debit", "Credit"];

  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    onClick={onClose}
    >
      <div className="bg-white p-12 rounded-lg shadow-lg w-[645px]"
      onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-semibold mb-4">Add New Record</h1>

        <div className="p-4">
          <div className="date relative w-full my-8">
            <input
              type="text"
              placeholder=" "
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => {
              if (!e.target.value) e.target.type = "text";
              }}
              className="peer w-full border-b-2 border-gray-400 focus:border-blue-500 outline-none py-2"
            />
            
            <label
              className="
                absolute left-0 top-2 text-gray-400 transition-all
                peer-placeholder-shown:top-2 
                peer-placeholder-shown:text-base
                peer-focus:-top-3 
                peer-focus:text-sm
                peer-focus:text-blue-500
                -top-3 text-sm
                icon: CallendarDays
              "
            >
              Date
            </label>
          </div>

          <div className="desc relative w-full my-8">
            <input
              type="text"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-400 focus:border-blue-500 outline-none py-2"
            />
            
            <label
              className="
                absolute left-0 top-2 text-gray-400 transition-all
                peer-placeholder-shown:top-2 
                peer-placeholder-shown:text-base
                peer-focus:-top-3 
                peer-focus:text-sm
                peer-focus:text-blue-500
                -top-3 text-sm
              "
            >
              Description
            </label>
          </div>

          <div className="acc-type relative w-full my-8">
            <select
              className="peer w-full border-b-2 border-gray-400 focus:border-blue-500 outline-none py-2"
              value={selectedAccType}
              onChange={(e) => setSelectedAccType(e.target.value)}
            >
              <option value=""></option>
              {acctype.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <label
              className="
                absolute left-0 top-2 text-gray-400 transition-all
                peer-placeholder-shown:top-2 
                peer-placeholder-shown:text-base
                peer-focus:-top-3 
                peer-focus:text-sm
                peer-focus:text-blue-500
                -top-3 text-sm
              "
            >
              Account Type
            </label>
          </div>

          <div className="acc-grp relative w-full my-8">
            <select
              className="peer w-full border-b-2 border-gray-400 focus:border-blue-500 outline-none py-2"
              value={selectedAccGrp}
              onChange={(e) => setSelectedAccGrp(e.target.value)}
            >
              <option value=""></option>
              {accgrp.map((grp) => (
                <option key={grp} value={grp}>
                  {grp}
                </option>
              ))}
            </select>

            <label
              className="
                absolute left-0 top-2 text-gray-400 transition-all
                peer-placeholder-shown:top-2 
                peer-placeholder-shown:text-base
                peer-focus:-top-3 
                peer-focus:text-sm
                peer-focus:text-blue-500
                -top-3 text-sm
              "
            >
              Account Type
            </label>
          </div>

          <div className="amount relative w-full my-8">
            <input
              type="number"
              placeholder=" "
              className="peer w-full border-b-2 border-gray-400 focus:border-blue-500 outline-none py-2"
            />
            
            <label
              className="
                absolute left-0 top-2 text-gray-400 transition-all
                peer-placeholder-shown:top-2 
                peer-placeholder-shown:text-base
                peer-focus:-top-3 
                peer-focus:text-sm
                peer-focus:text-blue-500
                -top-3 text-sm
              "
            >
              Amount
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button className="bg-blue-500 text-white rounded-lg w-[120px] text-xs h-9 hover:bg-blue-600">
            CONFIRM
          </button>

          <button
            onClick={onClose}
            className="bg-[#fff] text-[#3671D9] rounded-xl border border-[#3671D9] w-[120px] text-xs h-9 hover:bg-[#f0f0f0]"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;