import React from "react";
import styles from "./Button.module.css";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import SuccessButton from "./SuccessButton";

export default function AllButton({}) {
  return (
    <div>
      <div className={`${styles.container} ${styles.flex}`}>
          <PrimaryButton content="Primary" />
          <SecondaryButton content="Secondary" />
          <SuccessButton content="Success" />
      </div>
    </div>
  );
}
