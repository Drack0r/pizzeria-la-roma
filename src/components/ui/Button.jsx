"use client";

import clsx from "clsx";

function Button({ onClick, className, children, ...props }) {
  return (
    <button
      type="button"
      className={clsx("p-2", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
