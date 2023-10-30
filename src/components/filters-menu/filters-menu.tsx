import React from "react";
import { Button, Chip } from "@mui/material";
import settingsIcon from "../../images/settings.svg";
import filtersMenu from "./filters-menu.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import arrowDownIcon from "../../images/arrow_down.svg";
import arrowUpIcon from "../../images/arrow_up.svg";
import deleteIcon from "../../images/delete.svg";
import { Divider } from "@mui/material";
import SearchBar from "../search-form/search-form";
import { useForm } from "react-hook-form";
import { FilterApplicantsValues } from "../../utils/types";
import CheckboxCustomized from "./checkbox";
import mainApi from "../../utils/MainApi";
import { useDispatch,useSelector } from "../../services/hooks";
import { setApplicants, setChecked, setShownApplicants, unsetChecked } from "../../services/reducers/applicants";

const FiltersMenu = () => {
  const dispatch = useDispatch();
  const [isDirectionsOpened, setIsDirectionsOpened] =
    React.useState<boolean>(false);
  const [isCityOpened, setIsCityOpened] = React.useState<boolean>(false);
  const [isExperienceOpened, setIsExperienceOpened] =
    React.useState<boolean>(false);
  const [isTypeOpened, setIsTypeOpened] = React.useState<boolean>(false);
  const checkedList = useSelector((state) => state.applicants.checked);
  const applicants = useSelector((state) => state.applicants.applicants);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const form = useForm<FilterApplicantsValues>();
  const [choosenCities, setChoosenCities] = React.useState(["Москва"]);
  const { register, getValues } = form;

  const handleMainMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setNewCity = (city: string) => {
    let filters = [...checkedList];

    console.log(filters);

    filters.push({key: "province", value: city})

    dispatch(setChecked({key: "province", value: city}));

      mainApi.getFilteresApplicants(filters)
    .then(data => {
      dispatch(setShownApplicants(data.results));
    })
    .catch(err => console.log(err))

    setChoosenCities([city, ...choosenCities]);
  }

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const filter = e.target.name;
    let filters = [...checkedList];

    if(['HB','FD','RM'].includes(filter)) {
      if (e.target.checked) {
        filters.push({key: "work_format", value: filter})
        dispatch(setChecked({key: "work_format", value: filter}));
      } else {
        dispatch(unsetChecked({key: "work_format", value: filter}));
        filters =  checkedList.filter(item => item.value !== filter);

      }
    }

    if (filters.length == 0) {
      dispatch(setShownApplicants(applicants));
    } else {
      mainApi.getFilteresApplicants(filters)
    .then(data => {
      dispatch(setShownApplicants(data.results));
    })
    .catch(err => console.log(err))
    }
  }

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

  const handleDelete = (clickedCity: string) => {
    const filter = clickedCity;
    const filters =  checkedList.filter(item => item.value !== filter);

    dispatch(unsetChecked({key: "province", value: filter}));
    setChoosenCities(choosenCities.filter((city) => city !== clickedCity))

    if (filters.length == 0) {
      dispatch(setShownApplicants(applicants));
    } else {
      mainApi.getFilteresApplicants(filters)
    .then(data => {
      dispatch(setShownApplicants(data.results));
    })
    .catch(err => console.log(err))
    }

  };

  return (
    <form noValidate>
      <Button
        variant="text"
        onClick={handleMainMenuClick}
        startIcon={<img src={settingsIcon} alt="иконка фильтра" />}
        className={filtersMenu.button}
      >
        Фильтры
      </Button>
      <Menu
        sx={{ ".MuiMenu-list": { padding: "16px" } }}
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
            <CheckboxCustomized handleCheckboxChange={handleCheckboxChange} label="Программирование" id="isProgramming" register={register}/>
            <CheckboxCustomized handleCheckboxChange={handleCheckboxChange} label="Анализ данных" id="isDataAnalysis" register={register}/>
            <CheckboxCustomized handleCheckboxChange={handleCheckboxChange} label="Дизайн" id="isDesign" register={register}/>
            <CheckboxCustomized handleCheckboxChange={handleCheckboxChange}label="Менеджмент" id="isManagment" register={register}/>
            <CheckboxCustomized handleCheckboxChange={handleCheckboxChange} label="Маркетинг" id="isMarketing" register={register}/>
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
            <SearchBar addCity={setNewCity} type="city" text="Поиск города" />
            <ul className={filtersMenu.list}>
            {choosenCities.map((city, index) => {
              return (
                <li key={index} className={filtersMenu.item}>
                <Chip
                sx={{
                  ".MuiChip-label": {
                    color: "#1D6BF3",
                    fontFamily: "YS Text",
                    fontSize: "13px",
                    fontWeight: "400",
                    lineHeight: "26px",
                  },
                }}
                className={filtersMenu.chip}
                label={city}
                onDelete={() => handleDelete(city)}
              />
                </li>
              )
            })}
            </ul>


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

            {/* {createCheckbox("Релевантный")}
            {createCheckbox("Около-релевантный")}
            {createCheckbox("Учебный")} */}
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
            <CheckboxCustomized isChecked={checkedList.some((item:{key:string, value:string}) => item.value === "FD")} handleCheckboxChange={handleCheckboxChange} label="Офис" id="FD" register={register}/>
            <CheckboxCustomized isChecked={checkedList.some((item:{key:string, value:string}) => item.value === "HB")} handleCheckboxChange={handleCheckboxChange} label="Гибрид" id="HB" register={register}/>
            <CheckboxCustomized isChecked={checkedList.some((item:{key:string, value:string}) => item.value === "RM")} handleCheckboxChange={handleCheckboxChange} label="Удаленная работа" id="RM" register={register}/>
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
