import React, { FormEvent } from "react";
import searchIcon from "../../images/search.svg";
import searchBar from "./search-form.module.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
interface ISearchBarProps {
  text: string;
  type?: string;
  addCity?: (city:string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({ addCity, type, text }): JSX.Element => {

  const form = useForm<{keyWord: string}>();

  const { register, handleSubmit, getValues} = form;

  const onSubmit = (data:{keyWord: string}) => {
    if (addCity !== undefined) addCity(data.keyWord);
  };

  return (
    <form className={searchBar.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="search-bar"
        className={searchBar.textField}
        variant="outlined"
        placeholder={text}
        size="small"
        {...register("keyWord")}
        sx={{
          ".MuiOutlinedInput-input":
            {
              color: "#1A1B22",
              fontFamily: "YS Text",
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
            },
          ".MuiOutlinedInput-root": {
            paddingLeft: "12px",
          },
          ".MuiOutlinedInput-input::placeholder":
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

export default SearchBar;
