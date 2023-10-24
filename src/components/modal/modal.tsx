import React, { ReactNode } from "react";
import Modal from "@mui/material/Modal";
import modal from "./modal.module.css";
import CloseIcon from "@mui/icons-material/Close";

interface IModalProps {
  isVisible: boolean;
  children: ReactNode;
  closePopup: () => void;
}

export default function BasicModal({
  children,
  closePopup,
  isVisible,
}: IModalProps) {
  return (
    <div>
      <Modal
        className={modal.overlay}
        open={isVisible}
        onClose={closePopup}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={modal.modal}>
          <button className={modal.button} onClick={closePopup}>
            <CloseIcon className={modal.icon} />
          </button>
          {children}
        </div>
      </Modal>
    </div>
  );
}
