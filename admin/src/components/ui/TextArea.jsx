const TextArea = ({
  label,
  name,
  value,
  onChange,
  rows = 5,
  placeholder = "",
  required = false,
}) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-300"
      >
        {label}
        {required && <span className="ml-1 text-red-400">*</span>}
      </label>

      <textArea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
      />
    </div>
  );
};

export default TextArea;