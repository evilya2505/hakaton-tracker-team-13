import React, { ReactNode } from "react";
import Modal from "@mui/material/Modal";
import modal from "./modal.module.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)({
  textTransform: "none",
});

interface IModalProps {
  isVisible: boolean;
  children: ReactNode;
  closePopup: () => void;
}

export default function NotifyModal({
  children,
  closePopup,
  isVisible,
}: IModalProps) {
  return (
    <Modal
      open={isVisible}
      onClose={closePopup}
    >
      <div className={modal.modal}>
        <h3 className={modal.message}>{children}</h3>
        <div className={modal.buttons}>
          <CustomButton
            className={modal.cancelButton}
            variant="outlined"
            onClick={() => { }}>
            Нет
          </CustomButton>
          <CustomButton
            className={modal.confirmButton}
            variant="contained"
            onClick={() => { }}>
            Да
          </CustomButton>
        </div>

      </div>
    </Modal>
  );
}
