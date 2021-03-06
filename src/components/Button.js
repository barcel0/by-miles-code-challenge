const Button = ({ label = "Send", onClick, enabled = false }) => {
  return (
    <div className={`btn-main ${enabled ? 'btn-main-enabled' : 'btn-main-disabled'}`} onClick={onClick}>
      {label}
    </div>
  );
}

export default Button;