const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      className="input-main"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

export default Input;
