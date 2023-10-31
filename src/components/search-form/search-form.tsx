import React, { FormEvent, useEffect } from "react";
import searchIcon from "../../images/search.svg";
import searchBar from "./search-form.module.css";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import { InputAdornment } from "@mui/material";
import { useForm } from "react-hook-form";
import { getSearchResults } from "../../utils/getSearchResults";
import { useSelector, useDispatch } from "../../services/hooks";
import { setApplicantsSearchResults } from "../../services/reducers/applicants";
import { setSearchResult } from "../../services/reducers/vacancies";

interface ISearchBarProps {
  text: string;
  type?: string;
  addCity?: (city: string) => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  addCity,
  type,
  text,
}): JSX.Element => {
  const form = useForm<{ keyWord: string }>();

  const { register, handleSubmit, getValues } = form;

  const applicants = useSelector((state) => state.applicants.applicants);
  const dispatch = useDispatch();
  const applicantsVacancy = useSelector(
    (state) => state.vacancies.currentVacancyApplicantsListNotFiltered
  );
  const onSubmit = (data: { keyWord: string }) => {
    if (addCity !== undefined) addCity(data.keyWord);

    if (type !== undefined && type === "applicants") {
      if (data.keyWord.trim() !== "") {
        dispatch(
          setApplicantsSearchResults(getSearchResults(data.keyWord, applicants))
        );
      } else {
        dispatch(setApplicantsSearchResults([]));
      }
    }

    if (type !== undefined && type === "vacancy") {
      if (data.keyWord.trim() !== "") {
        dispatch(
          setSearchResult(getSearchResults(data.keyWord, applicantsVacancy))
        );
      } else {
        dispatch(setSearchResult([]));
      }
    }
  };

  return (
    <form
      className={searchBar.form}
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="search-bar"
        className={searchBar.textField}
        variant="outlined"
        placeholder={text}
        size="small"
        {...register("keyWord")}
        sx={{
          ".MuiOutlinedInput-input": {
            color: "#1A1B22",
            fontFamily: "YS Text",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
          },
          ".MuiOutlinedInput-root": {
            paddingLeft: "12px",
          },
          ".MuiOutlinedInput-input::placeholder": {
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.7099 20.2899L17.9999 16.6099C19.44 14.8143 20.1374 12.5352 19.9487 10.2412C19.76 7.94721 18.6996 5.81269 16.9854 4.27655C15.2713 2.74041 13.0337 1.91941 10.7328 1.98237C8.43194 2.04534 6.24263 2.98747 4.61505 4.61505C2.98747 6.24263 2.04534 8.43194 1.98237 10.7328C1.91941 13.0337 2.74041 15.2713 4.27655 16.9854C5.81269 18.6996 7.94721 19.76 10.2412 19.9487C12.5352 20.1374 14.8143 19.44 16.6099 17.9999L20.2899 21.6799C20.3829 21.7736 20.4935 21.848 20.6153 21.8988C20.7372 21.9496 20.8679 21.9757 20.9999 21.9757C21.1319 21.9757 21.2626 21.9496 21.3845 21.8988C21.5063 21.848 21.6169 21.7736 21.7099 21.6799C21.8901 21.4934 21.9909 21.2442 21.9909 20.9849C21.9909 20.7256 21.8901 20.4764 21.7099 20.2899ZM10.9999 17.9999C9.61544 17.9999 8.26206 17.5894 7.11091 16.8202C5.95977 16.051 5.06256 14.9578 4.53275 13.6787C4.00293 12.3996 3.86431 10.9921 4.13441 9.63427C4.4045 8.27641 5.07119 7.02912 6.05016 6.05016C7.02912 5.07119 8.27641 4.4045 9.63427 4.13441C10.9921 3.86431 12.3996 4.00293 13.6787 4.53275C14.9578 5.06256 16.051 5.95977 16.8202 7.11091C17.5894 8.26206 17.9999 9.61544 17.9999 10.9999C17.9999 12.8564 17.2624 14.6369 15.9497 15.9497C14.6369 17.2624 12.8564 17.9999 10.9999 17.9999Z"
                    fill="#797981"
                  />
                </svg>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
