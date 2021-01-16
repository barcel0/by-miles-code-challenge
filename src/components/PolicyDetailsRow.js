const PolicyDetailsRow = ({ title = '', content = '' }) => {
  return (
    <div className="">
      <div className="font-semibold text-gray-400 border-b">{title}</div>
      <div className="font-semibold">{content}</div>
    </div>
  );
}

export default PolicyDetailsRow;