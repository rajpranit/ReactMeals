import React from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const Backdrop = () => {
    return <div onClick={props.closeCart} className={styles.backdrop}></div>;
  };

  const ModalOverlay = (props) => {
    return (
      <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div>
      </div>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      ,
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
