"use client";

import clsx from "clsx";

function Button({ onClick, className, children, ...props }) {
  return (
    <button
      className={clsx(
        "p-2 duration-300 hover:opacity-60 active:opacity-40",
        className,
      )}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
