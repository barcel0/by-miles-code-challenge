const Button = ({ label = "Send", onClick }) => {
  return (
    <div className="" onClick={onClick}>
      {label}
    </div>
  );
}

export default Button;