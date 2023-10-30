import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from '@mui/material/styles';
import MainStudentInfo from "./applicant-info";
import studentModal from "./index.module.css";
import MainStudentCv from "./applicant-cv";
import { TogglingButton } from "../applicants-card/toggling-button";
import { useSelector } from "../../../../services/hooks";

const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'var(--main-blue-main)',
  },
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontSize: '20px',
    fontWeight: '400',
    color: 'var(--main-black-500)',
    fontFamily: [
      'YS Display',
    ].join(','),
    '&:hover': {
      color: 'var(--main-black-900)',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: 'black',
      fontWeight: '400',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

interface StyledTabProps {
  label: string;
}

export default function StudentModal() {
  const [value, setValue] = React.useState(0);
  const selectedCard = useSelector(
    (state) => state.applicants.selectedCardData
  );

  // const [isAdded, setIsAdded] = useState(
  //   selectedCard.response_status[0] === 0
  // );

  const [isAdded, setIsAdded] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={studentModal.modal}>
      <div>
        <AntTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <AntTab label="Основная информация" />
          <AntTab label="Резюме" />
        </AntTabs>
      </div>
      {value === 0 && <MainStudentInfo />}
      {value === 1 && <MainStudentCv />}
      <div className={studentModal.test}>
        <TogglingButton
          isAdded={isAdded}
          setIsAdded={setIsAdded}
          applicant={selectedCard}
        />
      </div>
    </div>
  );
}
