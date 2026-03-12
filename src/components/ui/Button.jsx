"use client";

import clsx from "clsx";

function Button({ onClick, className, children, ...props }) {
  return (
    <button
      type="button"
      className={clsx(
        "flex items-center justify-center rounded-full p-2",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
