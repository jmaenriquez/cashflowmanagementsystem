import React from "react";

type FloatingInputsProps = {
  icon?: React.ReactNode;
  label: string;
  type?: string;
  value: string | number;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputFields({ icon, label, type, value, required, onChange }: FloatingInputsProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  
  const date = type === "date";
  const number = type === "number";
  const isFloating = isFocused || !!value || date || number;

  return (
    <div className="relative w-full my-8">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={date || number ? "" : " "}
        required={required}
        className={`w-full border-b-2 outline-none py-2 bg-transparent transition-all
          ${isFocused ? 'border-[#1E293B]' : 'border-gray-400'}`}
      />

      <div className={`absolute left-0 transition-all duration-200 flex items-center gap-2 pointer-events-none
        ${isFloating ? '-top-4' : 'top-2'}`}
      >
        {icon && (
          <div className={`w-5 h-7 transition-all duration-200
            ${isFloating ? 'text-[#1E293B]' : 'text-gray-400'}`}
          >
            {icon}
          </div>
        )}
        <label className={`transition-all duration-200
          ${isFloating ? 'text-sm text-[#1E293B]' : 'text-base text-gray-400'}`}
        >
          {label}
        </label>
      </div>
    </div>
  );
}

export default InputFields;