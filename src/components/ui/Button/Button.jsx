"use client";

import clsx from "clsx";

import styles from "./button.module.scss";

function Button({ variant = "default", onClick, children }) {
  const className = clsx(
    variant === "default" && styles.default,
    variant === "dark" && styles.dark,
  );

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
