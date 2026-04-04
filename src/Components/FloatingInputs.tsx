import React from 'react'

type FloatingInputsProps = {
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};  

function InputFields({ label, type, value, onChange }: FloatingInputsProps) {
    
    const date = type === "date";

    return (
        <div className="relative w-full my-8">
            <input
                type={type} // 👈 no more switching
                value={value}
                onChange={onChange}
                placeholder={date ? "" : " "}
                className="peer w-full border-b-2 border-gray-400 focus:border-blue-500 outline-none py-2 bg-transparent"
            />
            
            <label
                className={`
                absolute left-0 transition-all
                ${date ? "-top-3 text-sm text-gray-400": value ? "-top-3 text-sm text-blue-500": "top-2 text-base text-gray-400"
                }
                peer-focus:-top-3
                peer-focus:text-sm
                peer-focus:text-blue-500
                `}
            >
                {label}
            </label>
        </div>
    )
}
export default InputFields;