import * as React from 'react';
import notifyModal from "./index.module.css"
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import NotifyBell from "../notify-button"

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        <NotifyBell />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <div className={notifyModal.modal}>
            <div className={notifyModal.modalMenu}>
              <h3 className={notifyModal.title}>Новые уведомления</h3>
              <button className={notifyModal.readAllButton}>Прочитать все</button>
            </div>
            <div className={notifyModal.inbox}>
              <div className={notifyModal.emptyPic}></div>
              <p className={notifyModal.emptyMessage}>Новых уведомлений нет.</p>
            </div>
          </div>
        </Typography>
      </Popover>
    </div>
  );
}
