const ContentBlock = ({ title = '', children }) => {
  return (
    <div className="flex flex-col">
      <h2 className="content-block-title">{title}</h2>
      {children}
    </div>
  );
}

export default ContentBlock;