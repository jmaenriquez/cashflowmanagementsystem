import { XCircle } from "lucide-react";

type CofirmationParams = {
  title: string;
  text: string;
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

function ConfirmtaionPopUp({
  title,
  text,
  isOpen,
  onConfirm,
  onClose,
}: CofirmationParams) {
  const handleConfirm = async () => {
    (await onConfirm(), onClose());
  };
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-12 rounded-lg shadow-lg w-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center mb-8">
          <XCircle strokeWidth={1} color="#f24040" size={"80px"} />
          <h1 className="font-semibold text-2xl my-4 text-black/80 ">
            {title}
          </h1>
          <p>{text}</p>
        </div>

        <div className="flex justify-center gap-2">
          <button
            type="button"
            className="bg-[#f24040] font-semibold text-white h-[41px] w-[150px] rounded-lg hover:bg-[#b72424]"
            onClick={handleConfirm}
          >
            Confirm
          </button>

          <button
            type="button"
            className="bg-white font-semibold text-gray-400 h-[41px] w-[150px] rounded-lg hover:bg-gray-200 border border-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmtaionPopUp;
