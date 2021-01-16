const ContentBlock = ({ title = '', children }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-semibold text-lg border-b">{title}</h2>
      {children}
    </div>
  );
}

export default ContentBlock;