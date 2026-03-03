function FormFields({ labelName, type = "text", options = [], className, placeholder, theme = "light" }) {
  const isDark = theme === "dark";

  const labelClasses = isDark ? "text-gray-400" : "text-gray-500";
  const inputClasses = `${className} border-b outline-none p-1 text-sm bg-transparent ${isDark
      ? "border-white/20 text-white focus:border-white"
      : "border-gray-300 text-gray-900 focus:border-gray-500"
    }`;

  return (
    <div className="w-full flex flex-col gap-2 p-2">
      {labelName && (
        <label htmlFor={labelName} className={`${labelClasses} text-sm`}>
          {labelName} <span className="text-red-400">*</span>
        </label>
      )}

      {type === "text" || type === "email" || type === "number" ? (
        <input
          type={type}
          id={labelName}
          className={inputClasses}
          placeholder={placeholder}
        />
      ) : null}

      {type === "textarea" && (
        <textarea
          id={labelName}
          className={`${inputClasses} resize-none h-24`}
          placeholder={placeholder}
        ></textarea>
      )}

      {type === "select" && (
        <select
          id={labelName}
          className={`${inputClasses} appearance-none cursor-pointer`}
        >
          <option value="" className={isDark ? "bg-bg-app" : ""}>Select {labelName}</option>
          {options.map((opt, i) => (
            <option key={i} value={opt} className={isDark ? "bg-bg-app" : ""}>
              {opt}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default FormFields;
