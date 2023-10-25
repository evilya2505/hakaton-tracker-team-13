import Modal from "@mui/material/Modal";
import applicantsFilter from './index.module.css';

interface IModalProps {
  isVisible: boolean;
  closePopup: () => void;
}

export default function FilterModal({
  closePopup,
  isVisible,
}: IModalProps) {
  return (
      <Modal className={applicantsFilter.modal} open={isVisible} onClose={closePopup}>
        <div className={applicantsFilter.container}>Фильтр</div>
      </Modal>
  );
}
