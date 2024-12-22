import React from "react";
import styles from "./Button.module.css";
import style from "./PopUp.module.css";
import stylex from './Modal.module.css'
export default function PopUp({ content, isPopUp, setIsPopUp }) {
  return (
    <div>
      <div className={`${stylex.modal}`}>
        <div className={`${styles.container}`}>
          <div className={`${style.popUp}`}>
            <h2>{content}</h2>
            <button
              className={styles.secondary}
              onClick={() => {
                setIsPopUp(false);
              }}
            >
				Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
