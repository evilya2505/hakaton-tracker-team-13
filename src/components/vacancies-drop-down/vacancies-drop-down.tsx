import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import vacanciesDropDown from "./vacanvies-drop-down.module.css";

export default function VacanciesDropDown() {
  const [vacancy, setVacancy] = React.useState([]);

  const handleChange = (event: { target: { value: any } }) => {
    const {
      target: { value },
    } = event;
    setVacancy(value);
  };

  return (
    <Select
      className={vacanciesDropDown.input}
      displayEmpty
      value={vacancy}
      onChange={handleChange}
      renderValue={(selected: any) => {
        if (selected.length === 0) {
          return (
            <p
              className={`${vacanciesDropDown.text} ${vacanciesDropDown.placeholder}`}
            >
              Вакансия
            </p>
          );
        }

        return selected;
      }}
      inputProps={{ "aria-label": "Without label" }}
      sx={{
        ".MuiOutlinedInput-input": {
          padding: "10px 12px",
          color: "#1A1B22",
          fontFamily: "YS Text",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
        },
      }}
    >
      {["UX/UI-дизайнер (Junior)", "Графический дизайнер (Middle)"].map(
        (name) => (
          <MenuItem className={vacanciesDropDown.text} key={name} value={name}>
            {name}
          </MenuItem>
        )
      )}
    </Select>
  );
}
