import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import vacanciesDropDown from "./vacancies-drop-down.module.css";
import { useSelector, useDispatch } from "../../services/hooks";
import { setSelectedDropDownVacancy } from "../../services/reducers/applicants";

export default function VacanciesDropDown() {
  const [vacancy, setVacancy] = React.useState([]);
  const vacancies = useSelector((state) => state.vacancies.vacancies);
  const dispatch = useDispatch();

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
      {vacancies.map((vacancy) => (
        <MenuItem
          className={vacanciesDropDown.text}
          key={vacancy.id}
          value={vacancy.title}
          onClick={() => {
            dispatch(setSelectedDropDownVacancy(vacancy));
          }}
        >
          {vacancy.title}
        </MenuItem>
      ))}
    </Select>
  );
}
