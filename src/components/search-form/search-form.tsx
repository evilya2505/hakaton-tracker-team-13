import React from "react";
import searchIcon from "../../images/search.svg";
import searchBar from "./search-form.module.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { InputAdornment } from "@mui/material";

export const SearchBar = () => {
  return (
    <form className={searchBar.form}>
      <TextField
        id="search-bar"
        className={searchBar.textField}
        variant="outlined"
        placeholder="Поиск"
        size="small"
        sx={{
          ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
            {
              color: "#1A1B22",
              fontFamily: "YS Text",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
            },
          ".css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root": {
            paddingLeft: "12px",
          },
          ".css-1ua80n0-MuiInputBase-input-MuiOutlinedInput-input::placeholder":
            {
              opacity: 1,
              color: "#797981",
              fontFamily: "YS Text",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
            },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton
                className={searchBar.iconButton}
                type="submit"
                aria-label="search"
              >
                <img src={searchIcon} alt="иконка поиска"></img>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};
