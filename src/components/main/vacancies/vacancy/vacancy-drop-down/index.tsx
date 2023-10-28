import { MenuItem, Select } from "@mui/material";
import React from "react";
import vacancyDropDown from "./index.module.css";
import { applicantStatuses } from "../../../../../constants/applicantStatuses";
export default function VacancyDropDown() {
  const [vacancy, setVacancy] = React.useState([]);

  const handleChange = (event: { target: { value: any } }) => {
    const {
      target: { value },
    } = event;
    setVacancy(value);
  };

  return (
    <Select
      className={vacancyDropDown.input}
      displayEmpty
      value={vacancy}
      onChange={handleChange}
      renderValue={(selected: any) => {
        if (selected.length === 0) {
          return (
            <p
              className={`${vacancyDropDown.text} ${vacancyDropDown.placeholder}`}
            >
              Статус
            </p>
          );
        }

        return selected;
      }}
      inputProps={{ "aria-label": "Without label" }}
      sx={{
        ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
          {
            padding: "10px 12px",
            color: "#1A1B22",
            fontFamily: "YS Text",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
          },
      }}
    >
      {applicantStatuses.map((status) => (
        <MenuItem
          className={vacancyDropDown.text}
          key={status.id}
          value={status.name}
        >
          {status.name}
        </MenuItem>
      ))}
    </Select>
  );
}
