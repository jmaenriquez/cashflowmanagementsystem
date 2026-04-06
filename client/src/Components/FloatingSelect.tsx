type FloatingSelectProps = {
  label: string;
  options: string[];
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function FloatingSelect({
  label,
  options,
  value,
  required,
  onChange,
}: FloatingSelectProps) {
  return (
    <div className="relative w-full my-8">
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="peer w-full border-b-2 border-gray-400 focus:border-blue-500 outline-none py-2 bg-transparent"
      >
        <option value=""></option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <label
        className={`
          absolute left-0 transition-all text-gray-400
          ${value ? "-top-3 text-sm text-blue-500" : "top-2 text-base"}
          peer-focus:-top-3
          peer-focus:text-sm
          peer-focus:text-blue-500
        `}
      >
        {label}
      </label>
    </div>
  );
}

export default FloatingSelect;
