import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const CartModal = (props) => {
  const Backdrop = () => {
    return <div className={styles.backdrop}></div>;
  };

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      ,
      {ReactDOM.createPortal(
        <div className={styles.modal}>{props.children}</div>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default CartModal;
