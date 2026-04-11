import React from "react";
import FloatingInputs from "../FloatingInputs";
import api from "../../api";
import swal from "sweetalert2";

interface accounts {
  id?: number;
  accname: string;
  description: string;
}

type FormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  item: accounts | null;
};

function accGroupForm({ isOpen, onClose, onSave, item }: FormProps) {
  const [account, setAccount] = React.useState<accounts>({
    accname: "",
    description: "",
  });

  React.useEffect(() => {
    if (item) {
      setAccount({
        accname: item.accname,
        description: item.description,
      });
    } else {
      setAccount({ accname: "", description: "" });
    }
  }, [item]);

  const handleSubmit = async () => {
    if (!account.accname || !account.description) {
      swal.fire({
        icon: "error",
        title: "Error!",
        text: "Please fill all the required fields.",
      });
      return;
    }
    {
      !item
        ? (await api.createAccGroup(account),
          swal.fire({
            icon: "success",
            title: "Saved!",
            text: account.accname + " has been saved successfully.",
          }))
        : (await api.updateAccGroup(item.id!, account),
          swal.fire({
            icon: "success",
            title: "Saved!",
            text: account.accname + " has been edited successfully.",
          }));
    }
    onSave();
    onClose();
  };

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
        <h1 className="text-xl font-semibold mb-4">Add New Account Group</h1>

        <form>
          <div className="p-4">
            <FloatingInputs
              label="Account Name"
              type="text"
              value={account.accname}
              required={true}
              onChange={(e) =>
                setAccount({ ...account, accname: e.target.value })
              }
            />

            <FloatingInputs
              label="Description"
              type="text"
              value={account.description}
              required={true}
              onChange={(e) =>
                setAccount({ ...account, description: e.target.value })
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

export default accGroupForm;
