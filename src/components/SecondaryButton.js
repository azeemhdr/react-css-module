import React from "react";
import styles from "./Button.module.css";

export default function SecondaryButton({ type, content }) {
  return (
    <div>
        <button className={`${styles.secondary}`} type={type}>
          {content}
        </button>
    </div>
  );
}
