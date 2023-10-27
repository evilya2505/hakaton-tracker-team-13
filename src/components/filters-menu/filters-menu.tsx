import React from "react";
import { Button, Checkbox, FormControlLabel, Chip } from "@mui/material";
import settingsIcon from "../../images/settings.svg";
import filtersMenu from "./filters-menu.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import arrowDownIcon from "../../images/arrow_down.svg";
import arrowUpIcon from "../../images/arrow_up.svg";
import deleteIcon from "../../images/delete.svg";
import { Divider } from "@mui/material";
import SearchBar from "../search-form/search-form";

const createCheckbox = (label: string) => {
  return (
    <FormControlLabel
      sx={{
        ".css-g3c0gg-MuiFormControlLabel-root": {
          marginBottom: "8px",
          color: "#1A1B22",
          fontFamily: "YS Text",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20px",
        },
        ".css-2tnjwj-MuiButtonBase-root-MuiCheckbox-root": {
          padding: "0",
        },
        ".css-gd9q31-MuiButtonBase-root-MuiCheckbox-root": {
          padding: "0 10px 0 0",
        },
      }}
      control={
        <Checkbox
          sx={{
            "& .MuiSvgIcon-root": {
              fontSize: 30,
              width: "0.8em",
              height: "0.8em",
            },
          }}
        />
      }
      label={label}
    />
  );
};

const FiltersMenu = () => {
  const [isDirectionsOpened, setIsDirectionsOpened] =
    React.useState<boolean>(false);
  const [isCityOpened, setIsCityOpened] = React.useState<boolean>(false);
  const [isExperienceOpened, setIsExperienceOpened] =
    React.useState<boolean>(false);
  const [isTypeOpened, setIsTypeOpened] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMainMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleFilterClick(filter: string) {
    switch (filter) {
      case "directions":
        setIsDirectionsOpened(!isDirectionsOpened);
        break;
      case "city":
        setIsCityOpened(!isCityOpened);
        break;
      case "type":
        setIsTypeOpened(!isTypeOpened);
        break;
      case "experience":
        setIsExperienceOpened(!isExperienceOpened);
        break;
      default:
        break;
    }
  }

  const handleDelete = () => {
    // Обработчик удаления
  };

  return (
    <form>
      <Button
        variant="text"
        onClick={handleMainMenuClick}
        startIcon={<img src={settingsIcon} alt="иконка фильтра" />}
        className={filtersMenu.button}
      >
        Фильтры
      </Button>
      <Menu
        sx={{ ".css-6hp17o-MuiList-root-MuiMenu-list": { padding: "16px" } }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={filtersMenu.menuItem}>
          <Button
            onClick={() => handleFilterClick("directions")}
            className={`${filtersMenu.menuButton} ${filtersMenu.button}`}
            variant="text"
            endIcon={
              !isDirectionsOpened ? (
                <img src={arrowDownIcon} alt="иконка вниз" />
              ) : (
                <img src={arrowUpIcon} alt="иконка вверх" />
              )
            }
          >
            Направление
          </Button>
          <fieldset
            className={`${filtersMenu.checkboxes} ${
              !isDirectionsOpened
                ? `${filtersMenu.fieldset}`
                : `${filtersMenu.fieldsetVisible}`
            }`}
          >
            {createCheckbox("Программирование")}
            {createCheckbox("Анализ данных")}
            {createCheckbox("Дизайн")}
            {createCheckbox("Менеджмент")}
            {createCheckbox("Маркетинг")}
          </fieldset>
        </MenuItem>
        <Divider />

        <MenuItem className={filtersMenu.menuItem}>
          <Button
            onClick={() => handleFilterClick("city")}
            className={`${filtersMenu.menuButton} ${filtersMenu.button}`}
            variant="text"
            endIcon={
              !isCityOpened ? (
                <img src={arrowDownIcon} alt="иконка вниз" />
              ) : (
                <img src={arrowUpIcon} alt="иконка вверх" />
              )
            }
          >
            Город
          </Button>
          <fieldset
            className={`${filtersMenu.city} ${
              !isCityOpened
                ? `${filtersMenu.fieldset}`
                : `${filtersMenu.fieldsetVisible}`
            }`}
          >
            <SearchBar text="Поиск города" />
            <Chip
              sx={{
                ".css-6od3lo-MuiChip-label": {
                  color: "#1D6BF3",
                  fontFamily: "YS Text",
                  fontSize: "13px",
                  fontWeight: "400",
                  lineHeight: "26px",
                },
              }}
              className={filtersMenu.chip}
              label="Москва, Россия"
              onDelete={handleDelete}
            />
          </fieldset>
        </MenuItem>
        <Divider />

        <MenuItem className={filtersMenu.menuItem}>
          <Button
            onClick={() => handleFilterClick("experience")}
            className={`${filtersMenu.menuButton} ${filtersMenu.button}`}
            variant="text"
            endIcon={
              !isExperienceOpened ? (
                <img src={arrowDownIcon} alt="иконка вниз" />
              ) : (
                <img src={arrowUpIcon} alt="иконка вверх" />
              )
            }
          >
            Опыт работы
          </Button>
          <fieldset
            className={`${filtersMenu.checkboxes} ${
              !isExperienceOpened
                ? `${filtersMenu.fieldset}`
                : `${filtersMenu.fieldsetVisible}`
            }`}
          >
            {createCheckbox("Релевантный")}
            {createCheckbox("Около-релевантный")}
            {createCheckbox("Учебный")}
          </fieldset>
        </MenuItem>
        <Divider />

        <MenuItem className={filtersMenu.menuItem}>
          <Button
            onClick={() => handleFilterClick("type")}
            className={`${filtersMenu.menuButton} ${filtersMenu.button}`}
            variant="text"
            endIcon={
              !isTypeOpened ? (
                <img src={arrowDownIcon} alt="иконка вниз" />
              ) : (
                <img src={arrowUpIcon} alt="иконка вверх" />
              )
            }
          >
            Формат работы
          </Button>
          <fieldset
            className={`${filtersMenu.checkboxes} ${
              !isTypeOpened
                ? `${filtersMenu.fieldset}`
                : `${filtersMenu.fieldsetVisible}`
            }`}
          >
            {createCheckbox("Офис")}
            {createCheckbox("Гибрид")}
            {createCheckbox("Удаленный")}
          </fieldset>
        </MenuItem>
        <Divider />
        <Button
          variant="text"
          startIcon={
            <img
              src={deleteIcon}
              alt="иконка удаления"
              className={filtersMenu.deleteIcon}
            />
          }
          className={filtersMenu.buttonDelete}
        >
          Очистить фильтры
        </Button>
      </Menu>
    </form>
  );
};

export default FiltersMenu;
