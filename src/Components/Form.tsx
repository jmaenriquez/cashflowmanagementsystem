import React from "react";
import FloatingSelect from "./FloatingSelect";
import FloatingInputs from "./FloatingInputs";

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
          <FloatingInputs
            label="Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <FloatingInputs 
            label="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <FloatingSelect
            label="Account Type"
            options={acctype}
            value={selectedAccType}
            onChange={(e) => setSelectedAccType(e.target.value)}
          />

          <FloatingSelect 
            label="Account Group"
            options={accgrp}
            value={selectedAccGrp}
            onChange={(e) => setSelectedAccGrp(e.target.value)}
          />

          <FloatingInputs
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
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