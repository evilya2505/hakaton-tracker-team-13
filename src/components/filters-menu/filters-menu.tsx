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
import { useDispatch, useSelector } from "../../services/hooks";
import {
  setApplicants,
  setChecked,
  setShownApplicants,
  unsetChecked,
} from "../../services/reducers/applicants";

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

    filters.push({ key: "province", value: city });

    dispatch(setChecked({ key: "province", value: city }));

    mainApi
      .getFilteresApplicants(filters)
      .then((data) => {
        dispatch(setShownApplicants(data.results));
      })
      .catch((err) => console.log(err));

    setChoosenCities([city, ...choosenCities]);
  };

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const filter = e.target.name;
    let filters = [...checkedList];

    if (["HB", "FD", "RM"].includes(filter)) {
      if (e.target.checked) {
        filters.push({ key: "work_format", value: filter });
        dispatch(setChecked({ key: "work_format", value: filter }));
      } else {
        dispatch(unsetChecked({ key: "work_format", value: filter }));
        filters = checkedList.filter((item) => item.value !== filter);
      }
    }

    if (filters.length == 0) {
      dispatch(setShownApplicants(applicants));
    } else {
      mainApi
        .getFilteresApplicants(filters)
        .then((data) => {
          dispatch(setShownApplicants(data.results));
        })
        .catch((err) => console.log(err));
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
    const filters = checkedList.filter((item) => item.value !== filter);

    dispatch(unsetChecked({ key: "province", value: filter }));
    setChoosenCities(choosenCities.filter((city) => city !== clickedCity));

    if (filters.length == 0) {
      dispatch(setShownApplicants(applicants));
    } else {
      mainApi
        .getFilteresApplicants(filters)
        .then((data) => {
          dispatch(setShownApplicants(data.results));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form noValidate>
      <Button
        variant="text"
        onClick={handleMainMenuClick}
        startIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_695_22701)">
              <path
                d="M0.833333 3.95806H3.11333C3.2922 4.61617 3.68264 5.19714 4.22444 5.61134C4.76623 6.02553 5.42927 6.24994 6.11125 6.24994C6.79323 6.24994 7.45627 6.02553 7.99806 5.61134C8.53986 5.19714 8.9303 4.61617 9.10917 3.95806H19.1667C19.3877 3.95806 19.5996 3.87026 19.7559 3.71398C19.9122 3.5577 20 3.34574 20 3.12473C20 2.90371 19.9122 2.69175 19.7559 2.53547C19.5996 2.37919 19.3877 2.29139 19.1667 2.29139H9.10917C8.9303 1.63328 8.53986 1.05232 7.99806 0.638118C7.45627 0.223921 6.79323 -0.000488281 6.11125 -0.000488281C5.42927 -0.000488281 4.76623 0.223921 4.22444 0.638118C3.68264 1.05232 3.2922 1.63328 3.11333 2.29139H0.833333C0.61232 2.29139 0.400358 2.37919 0.244078 2.53547C0.0877974 2.69175 0 2.90371 0 3.12473C0 3.34574 0.0877974 3.5577 0.244078 3.71398C0.400358 3.87026 0.61232 3.95806 0.833333 3.95806ZM6.11083 1.66639C6.39926 1.66639 6.68122 1.75192 6.92104 1.91217C7.16086 2.07241 7.34778 2.30017 7.45816 2.56665C7.56854 2.83312 7.59742 3.12635 7.54115 3.40923C7.48488 3.69212 7.34598 3.95197 7.14203 4.15592C6.93808 4.35988 6.67823 4.49877 6.39534 4.55504C6.11245 4.61131 5.81923 4.58243 5.55275 4.47205C5.28628 4.36167 5.05852 4.17476 4.89827 3.93493C4.73803 3.69511 4.6525 3.41316 4.6525 3.12473C4.65294 2.73809 4.80673 2.36741 5.08012 2.09402C5.35352 1.82062 5.72419 1.66684 6.11083 1.66639Z"
                fill="#1D6BF3"
              />
              <path
                d="M19.1667 9.16672H16.8867C16.7081 8.50846 16.3178 7.92728 15.7761 7.51291C15.2343 7.09854 14.5712 6.87402 13.8892 6.87402C13.2071 6.87402 12.544 7.09854 12.0023 7.51291C11.4605 7.92728 11.0702 8.50846 10.8917 9.16672H0.833333C0.61232 9.16672 0.400358 9.25452 0.244078 9.4108C0.0877974 9.56708 0 9.77904 0 10.0001C0 10.2211 0.0877974 10.433 0.244078 10.5893C0.400358 10.7456 0.61232 10.8334 0.833333 10.8334H10.8917C11.0702 11.4916 11.4605 12.0728 12.0023 12.4872C12.544 12.9016 13.2071 13.1261 13.8892 13.1261C14.5712 13.1261 15.2343 12.9016 15.7761 12.4872C16.3178 12.0728 16.7081 11.4916 16.8867 10.8334H19.1667C19.3877 10.8334 19.5996 10.7456 19.7559 10.5893C19.9122 10.433 20 10.2211 20 10.0001C20 9.77904 19.9122 9.56708 19.7559 9.4108C19.5996 9.25452 19.3877 9.16672 19.1667 9.16672ZM13.8892 11.4584C13.6007 11.4584 13.3188 11.3729 13.079 11.2126C12.8391 11.0524 12.6522 10.8246 12.5418 10.5581C12.4315 10.2917 12.4026 9.99843 12.4589 9.71555C12.5151 9.43266 12.654 9.17281 12.858 8.96885C13.0619 8.7649 13.3218 8.62601 13.6047 8.56974C13.8875 8.51347 14.1808 8.54235 14.4472 8.65273C14.7137 8.76311 14.9415 8.95002 15.1017 9.18985C15.262 9.42967 15.3475 9.71162 15.3475 10.0001C15.3471 10.3867 15.1933 10.7574 14.9199 11.0308C14.6465 11.3042 14.2758 11.4579 13.8892 11.4584Z"
                fill="#1D6BF3"
              />
              <path
                d="M19.1667 16.0419H9.10917C8.9303 15.3838 8.53986 14.8028 7.99806 14.3886C7.45627 13.9744 6.79323 13.75 6.11125 13.75C5.42927 13.75 4.76623 13.9744 4.22444 14.3886C3.68264 14.8028 3.2922 15.3838 3.11333 16.0419H0.833333C0.61232 16.0419 0.400358 16.1297 0.244078 16.286C0.0877974 16.4422 0 16.6542 0 16.8752C0 17.0962 0.0877974 17.3082 0.244078 17.4645C0.400358 17.6208 0.61232 17.7085 0.833333 17.7085H3.11333C3.2922 18.3667 3.68264 18.9476 4.22444 19.3618C4.76623 19.776 5.42927 20.0004 6.11125 20.0004C6.79323 20.0004 7.45627 19.776 7.99806 19.3618C8.53986 18.9476 8.9303 18.3667 9.10917 17.7085H19.1667C19.3877 17.7085 19.5996 17.6208 19.7559 17.4645C19.9122 17.3082 20 17.0962 20 16.8752C20 16.6542 19.9122 16.4422 19.7559 16.286C19.5996 16.1297 19.3877 16.0419 19.1667 16.0419ZM6.11083 18.3335C5.8224 18.3335 5.54045 18.248 5.30063 18.0878C5.0608 17.9275 4.87389 17.6998 4.76351 17.4333C4.65313 17.1668 4.62425 16.8736 4.68052 16.5907C4.73679 16.3078 4.87568 16.048 5.07964 15.844C5.28359 15.6401 5.54344 15.5012 5.82633 15.4449C6.10922 15.3886 6.40244 15.4175 6.66891 15.5279C6.93539 15.6383 7.16315 15.8252 7.32339 16.065C7.48364 16.3048 7.56917 16.5868 7.56917 16.8752C7.56851 17.2618 7.41465 17.6323 7.1413 17.9057C6.86795 18.179 6.4974 18.3329 6.11083 18.3335Z"
                fill="#1D6BF3"
              />
            </g>
            <defs>
              <clipPath id="clip0_695_22701">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        }
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.707 8.28578C18.5193 8.10279 18.2647 8 17.9993 8C17.7339 8 17.4794 8.10279 17.2917 8.28578L12.7016 12.762C12.5113 12.9401 12.2577 13.0396 11.994 13.0396C11.7302 13.0396 11.4766 12.9401 11.2863 12.762L6.69623 8.28578C6.50746 8.10798 6.25463 8.0096 5.9922 8.01182C5.72977 8.01405 5.47873 8.1167 5.29316 8.29767C5.10758 8.47864 5.00232 8.72345 5.00004 8.97937C4.99776 9.23529 5.09864 9.48185 5.28096 9.66594L9.87006 14.1422C10.1489 14.4141 10.4799 14.6299 10.8443 14.7771C11.2086 14.9242 11.5991 15 11.9935 15C12.3878 15 12.7783 14.9242 13.1427 14.7771C13.507 14.6299 13.838 14.4141 14.1169 14.1422L18.707 9.66594C18.8946 9.4829 19 9.23467 19 8.97586C19 8.71704 18.8946 8.46882 18.707 8.28578Z"
                    fill="#797981"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.9993 15C17.7339 14.9999 17.4793 14.8967 17.2917 14.7129L12.7016 10.2185C12.5113 10.0397 12.2577 9.93984 11.994 9.93984C11.7302 9.93984 11.4766 10.0397 11.2863 10.2185L6.69623 14.7129C6.50746 14.8914 6.25463 14.9902 5.9922 14.9879C5.72977 14.9857 5.47873 14.8826 5.29316 14.7009C5.10758 14.5192 5.00232 14.2734 5.00004 14.0165C4.99776 13.7595 5.09864 13.512 5.28096 13.3271L9.87106 8.83282C10.4432 8.29825 11.2036 8 11.9945 8C12.7853 8 13.5457 8.29825 14.1179 8.83282L18.707 13.3271C18.8469 13.4642 18.9422 13.6388 18.9808 13.8289C19.0194 14.0189 18.9996 14.216 18.9238 14.395C18.8481 14.574 18.7198 14.7271 18.5553 14.8348C18.3907 14.9425 18.1972 15 17.9993 15Z"
                    fill="#797981"
                  />
                </svg>
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
            <CheckboxCustomized
              handleCheckboxChange={handleCheckboxChange}
              label="Программирование"
              id="isProgramming"
              register={register}
            />
            <CheckboxCustomized
              handleCheckboxChange={handleCheckboxChange}
              label="Анализ данных"
              id="isDataAnalysis"
              register={register}
            />
            <CheckboxCustomized
              handleCheckboxChange={handleCheckboxChange}
              label="Дизайн"
              id="isDesign"
              register={register}
            />
            <CheckboxCustomized
              handleCheckboxChange={handleCheckboxChange}
              label="Менеджмент"
              id="isManagment"
              register={register}
            />
            <CheckboxCustomized
              handleCheckboxChange={handleCheckboxChange}
              label="Маркетинг"
              id="isMarketing"
              register={register}
            />
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
                );
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
            <CheckboxCustomized
              isChecked={checkedList.some(
                (item: { key: string; value: string }) => item.value === "FD"
              )}
              handleCheckboxChange={handleCheckboxChange}
              label="Офис"
              id="FD"
              register={register}
            />
            <CheckboxCustomized
              isChecked={checkedList.some(
                (item: { key: string; value: string }) => item.value === "HB"
              )}
              handleCheckboxChange={handleCheckboxChange}
              label="Гибрид"
              id="HB"
              register={register}
            />
            <CheckboxCustomized
              isChecked={checkedList.some(
                (item: { key: string; value: string }) => item.value === "RM"
              )}
              handleCheckboxChange={handleCheckboxChange}
              label="Удаленная работа"
              id="RM"
              register={register}
            />
          </fieldset>
        </MenuItem>
        <Divider />
        <Button
          variant="text"
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M13.9997 2.66667H11.933C11.7783 1.91428 11.3689 1.23823 10.7738 0.752479C10.1788 0.266727 9.43448 0.000969683 8.66634 0L7.33301 0C6.56487 0.000969683 5.82055 0.266727 5.22551 0.752479C4.63046 1.23823 4.22107 1.91428 4.06634 2.66667H1.99967C1.82286 2.66667 1.65329 2.7369 1.52827 2.86193C1.40325 2.98695 1.33301 3.15652 1.33301 3.33333C1.33301 3.51014 1.40325 3.67971 1.52827 3.80474C1.65329 3.92976 1.82286 4 1.99967 4H2.66634V12.6667C2.6674 13.5504 3.01893 14.3976 3.64382 15.0225C4.26871 15.6474 5.11594 15.9989 5.99967 16H9.99967C10.8834 15.9989 11.7306 15.6474 12.3555 15.0225C12.9804 14.3976 13.3319 13.5504 13.333 12.6667V4H13.9997C14.1765 4 14.3461 3.92976 14.4711 3.80474C14.5961 3.67971 14.6663 3.51014 14.6663 3.33333C14.6663 3.15652 14.5961 2.98695 14.4711 2.86193C14.3461 2.7369 14.1765 2.66667 13.9997 2.66667ZM7.33301 1.33333H8.66634C9.07986 1.33384 9.48309 1.46225 9.82075 1.70096C10.1584 1.93967 10.414 2.27699 10.5523 2.66667H5.44701C5.5854 2.27699 5.84094 1.93967 6.1786 1.70096C6.51626 1.46225 6.91949 1.33384 7.33301 1.33333ZM11.9997 12.6667C11.9997 13.1971 11.789 13.7058 11.4139 14.0809C11.0388 14.456 10.5301 14.6667 9.99967 14.6667H5.99967C5.46924 14.6667 4.96053 14.456 4.58546 14.0809C4.21039 13.7058 3.99967 13.1971 3.99967 12.6667V4H11.9997V12.6667Z"
                fill="#797981"
              />
              <path
                d="M6.66667 11.9998C6.84348 11.9998 7.01305 11.9296 7.13807 11.8046C7.2631 11.6796 7.33333 11.51 7.33333 11.3332V7.33317C7.33333 7.15636 7.2631 6.98679 7.13807 6.86177C7.01305 6.73674 6.84348 6.6665 6.66667 6.6665C6.48986 6.6665 6.32029 6.73674 6.19526 6.86177C6.07024 6.98679 6 7.15636 6 7.33317V11.3332C6 11.51 6.07024 11.6796 6.19526 11.8046C6.32029 11.9296 6.48986 11.9998 6.66667 11.9998Z"
                fill="#797981"
              />
              <path
                d="M9.33366 11.9998C9.51047 11.9998 9.68004 11.9296 9.80506 11.8046C9.93009 11.6796 10.0003 11.51 10.0003 11.3332V7.33317C10.0003 7.15636 9.93009 6.98679 9.80506 6.86177C9.68004 6.73674 9.51047 6.6665 9.33366 6.6665C9.15685 6.6665 8.98728 6.73674 8.86225 6.86177C8.73723 6.98679 8.66699 7.15636 8.66699 7.33317V11.3332C8.66699 11.51 8.73723 11.6796 8.86225 11.8046C8.98728 11.9296 9.15685 11.9998 9.33366 11.9998Z"
                fill="#797981"
              />
            </svg>
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
