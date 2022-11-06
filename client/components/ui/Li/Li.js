const Li = ({ children, className = "" }) => {
  return (
    <li
      className={`p-3 cursor-pointer border-2 active:bg-lime-600 hover:bg-slate-500 ${className}`}
    >
      {children}
    </li>
  );
};

export default Li;
