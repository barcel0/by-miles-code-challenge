const ContentBlock = ({ title = '', children }) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-xl border-b mb-6 tracking-wide">{title}</h2>
      {children}
    </div>
  );
}

export default ContentBlock;