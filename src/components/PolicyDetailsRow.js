const PolicyDetailsRow = ({ title = '', content = '' }) => {
  return (
    <div className="mb-4">
      <div className="font-semibold text-gray-400 border-b mb-1">{title}</div>
      <div className="font-semibold">{content}</div>
    </div>
  );
}

export default PolicyDetailsRow;