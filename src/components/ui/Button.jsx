function Button({ onClick, children, ...props }) {
  return (
    <button
      className="p-2 duration-300 hover:opacity-60 active:opacity-40"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
