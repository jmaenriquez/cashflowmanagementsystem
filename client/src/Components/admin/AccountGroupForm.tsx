import React from "react";
import FloatingInputs from "../FloatingInputs";

type FormProps = {
  isOpen: boolean;
  onClose: () => void;
};

function accGroupForm({ isOpen, onClose }: FormProps) {
  if (!isOpen) return null;

  const [name, setName] = React.useState(""),
    [description, setDescription] = React.useState("");

  const handleSubmit = () => {
    name === "" || description === ""
      ? alert("Please fill in all fields.")
      : console.log(
          { name, description },
          alert("Account added successfully!"),
        );
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-12 rounded-lg shadow-lg w-[645px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-semibold mb-4">Add New Account Group</h1>

        <form>
          <div className="p-4">
            <FloatingInputs
              label="Account Name"
              type="text"
              value={name}
              required={true}
              onChange={(e) => setName(e.target.value)}
            />

            <FloatingInputs
              label="Description"
              type="text"
              value={description}
              required={true}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-3 mt-8">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white rounded-lg w-[120px] text-xs h-9 hover:bg-blue-600"
            >
              CONFIRM
            </button>

            <button
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

export default accGroupForm;
