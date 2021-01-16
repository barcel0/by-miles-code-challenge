const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      className="border mb-4 rounded-sm px-2 py-1 w-60"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

export default Input;
