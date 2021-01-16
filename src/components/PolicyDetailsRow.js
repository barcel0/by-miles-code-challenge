const PolicyDetailsRow = ({ title = '', content = '' }) => {
  return (
    <div className="mb-4">
      <div className="policy-details-row-title">{title}</div>
      <div className="policy-details-row-content">{content}</div>
    </div>
  );
}

export default PolicyDetailsRow;