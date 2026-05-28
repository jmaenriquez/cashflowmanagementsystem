import React from "react";
import FloatingSelect from "./FloatingSelect";
import FloatingInputs from "./FloatingInputs";
import api from "../api";
import swal from "sweetalert2";

interface record {
  id?: number;
  recdate: string;
  description: string;
  type: "Debit" | "Credit";
  accgrpname: string;
  accgrp: number;
  amount: number;
}

type FormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  item: record | null;
};

function Form({ isOpen, onClose, onSave, item }: FormProps) {
  const [rec, setRec] = React.useState<record>({
    recdate: "",
    description: "",
    type: "Debit",
    accgrpname: "",
    accgrp: 0,
    amount: 0,
  });

  const [accGroups, setAccGroups] = React.useState<
    { id: Number; accname: string }[]
  >([]); //fetching accounts

  const [selectedAccGroup, setSelectedAccGroup] = React.useState("");
  const [selectedAccType, setSelectedAccType] = React.useState("");

  const accOpt = accGroups.map((grp) => ({
    label: grp.accname,
    value: String(grp.id),
  }));
  const typesOpt = [
    {
      label: "Debit",
      value: "Debit",
    },
    {
      label: "Credit",
      value: "Credit",
    },
  ];

  React.useEffect(() => {
    api.getAccGroup().then((data) => {
      setAccGroups(data);
    });
  }, []);

  React.useEffect(() => {
    if(item){
      setRec({
        recdate: item.recdate,
        description: item.description,
        type: item.type,
        accgrpname: item.accgrpname,
        accgrp: item.accgrp,
        amount: item.amount
      });
      setSelectedAccType(item.type),
      setSelectedAccGroup(String(item.accgrp))
    } else{
      setRec({
        recdate: "",
        description: "",
        type: 'Debit',
        accgrpname: "",
        accgrp: 0,
        amount: 0
      })
      setSelectedAccType(""),
      setSelectedAccGroup("")
    }
  }, [item]);

  const handleSubmit = async () => {
    if (
      !rec.recdate ||
      !rec.description ||
      !rec.type ||
      !rec.accgrp ||
      !rec.amount
    ) {
      swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please fill all the required fields.",
      });
      return;
    }{
      !item ? (
        await api.addRecord(rec),
        swal.fire({
          icon: "success",
          title: "Saved!",
          text: "Record saved successfully",
          timer: 3000
        })
        
        
      ) : (
        await api.updateRecord(item.id!, rec),
        swal.fire({
          icon: "success",
          title: "Saved!",
          text: "Record edited successfully",
          timer:3000
        })
      )
    }
    onSave();
    onClose();
  };

  React.useEffect(() => {
    if(!isOpen){
      setRec({
        recdate: "",
        description: "",
        type: 'Debit',
        accgrpname: "",
        accgrp: 0,
        amount: 0
      });
    }
  }, [isOpen])

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-12 rounded-lg shadow-lg w-[645px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-semibold mb-4">Add New Record</h1>

        <form>
          <div className="p-4">
            <FloatingInputs
              label="Date"
              type="date"
              value={rec.recdate}
              required={true}
              onChange={(e) => setRec({ ...rec, recdate: e.target.value })}
            />

            <FloatingInputs
              label="Description"
              type="text"
              value={rec.description}
              required={true}
              onChange={(e) => setRec({ ...rec, description: e.target.value })}
            />

            <FloatingSelect
              label="Select Account Type"
              options={typesOpt}
              value={selectedAccType}
              required={true}
              onChange={(e) => {
                setSelectedAccType(e.target.value);
                setRec({ ...rec, type: e.target.value as "Debit" | "Credit" });
              }}
            />

            <FloatingSelect
              label="Select Account Group"
              options={accOpt}
              value={selectedAccGroup}
              required={true}
              onChange={(e) => {
                setSelectedAccGroup(e.target.value);
                setRec({ ...rec, accgrp: Number(e.target.value) });
              }}
            />

            <FloatingInputs
              label="Amount"
              type="number"
              value={rec.amount}
              required={true}
              onChange={(e) =>
                setRec({ ...rec, amount: Number(e.target.value) })
              }
            />
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 text-white rounded-lg w-[120px] text-xs h-9 hover:bg-blue-600"
            >
              CONFIRM
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-[#fff] text-[#3671D9] rounded-xl border border-[#3671D9] w-[120px] text-xs h-9 hover:bg-[#f0f0f0]"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;