import * as React from 'react';
import notifyButton from "./index.module.css"
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function NotifyBell() {
  return (
    // <IconButton aria-label="cart">
      <StyledBadge

       badgeContent={4} //количество непрочитанных уведомлений

      color="primary"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}>
        <div className={notifyButton.bell}></div>
      </StyledBadge>
    // </IconButton>
  );
}
