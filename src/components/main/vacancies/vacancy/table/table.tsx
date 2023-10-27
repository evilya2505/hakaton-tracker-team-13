import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  MenuItem,
  IconButton,
  TextField,
  Button,
  Menu,
} from "@mui/material";
import table from "./table.module.css";
import telegramIcon from "../../../../../images/telegram.svg";
import emailIcon from "../../../../../images/email.svg";
import { applicantStatuses } from "../../../../../constants/applicantStatuses";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { applicantsList } from "../../../../../constants/applicantsList";
import SearchBar from "../../../../search-form/search-form";
import VacancyDropDown from "../vacancy-drop-down/vacancy-drop-down";
import FiltersMenu from "../../../../filters-menu/filters-menu";
import calndarIcon from "../../../../../images/Calendar.svg";
import compareIcon from "../../../../../images/compare.svg";
import BasicModal from "../../../../modal/modal";
import StudentModal from "../../../applicants/applicant-modal";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CompareApplicantsModal from "../compare-applicants-modal/compare-applicants-moda";

const applicants = [
  {
    id: 1,
    firstName: "Анна",
    lastName: "Короткова",
    avatar:
      "https://images.unsplash.com/photo-1693438672953-409b661134fd?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: false,
    city: "Санкт-Петербург",
    age: 24,
    responses: 40,
    completedTestTasks: 14,
    interviews: 10,
    course: "Дизайнер интерфейсов",
    graduationDate: "апрель 2023",
    workFormat: "удаленный",
    grade: "Junior",
    salary: 50000,
    contacts: "+799999999999",
    about: "Улыбаюсь и пью кофе",
  },
  {
    id: 2,
    firstName: "Алия",
    lastName: "Шархимуллина",
    avatar:
      "https://images.unsplash.com/photo-1697472106815-829bad01f7b8?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: false,
    city: "Казань",
    age: 28,
    responses: 1,
    completedTestTasks: 10,
    interviews: 9,
    course: "Web-разработчик",
    graduationDate: "июнь 2022",
    workFormat: "офис",
    grade: "Junior",
    salary: 50000,
    contacts: "+799999999999",
    about: "Не улыбаюсь и пью винишко",
  },
  {
    id: 3,
    firstName: "Иван",
    lastName: "Иванов",
    avatar:
      "https://images.unsplash.com/photo-1696887350319-86341eda4b71?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: true,
    city: "Москва",
    age: 35,
    responses: 0,
    completedTestTasks: 0,
    interviews: 0,
    course: "Python-разработчик",
    graduationDate: "август 2023",
    workFormat: "удаленный",
    grade: "Junior",
    salary: 50000,
    contacts: "+799999999999",
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 5,
    firstName: "Петр",
    lastName: "Петров",
    avatar:
      "https://images.unsplash.com/photo-1697472925037-e38438b132b0?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: false,
    city: "Барнаул",
    age: 30,
    responses: 35,
    completedTestTasks: 20,
    interviews: 5,
    course: "Дизайнер интерфейсов",
    graduationDate: "февраль 2023",
    workFormat: "удаленный",
    grade: "Junior",
    salary: 50000,
    contacts: "+799999999999",
    about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  {
    id: 6,
    firstName: "Александра",
    lastName: "Александрова",
    avatar:
      "https://images.unsplash.com/photo-1689193504709-2ccf8bf64be1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: true,
    city: "Санкт-Петербург",
    age: 24,
    responses: 0,
    completedTestTasks: 1,
    interviews: 0,
    course: "Дизайнер интерфейсов",
    graduationDate: "апрель 2023",
    workFormat: "удаленный",
    grade: "Junior",
    salary: 50000,
    contacts: "+799999999999",
    about: "Улыбаюсь и пью кофе",
  },
  {
    id: 7,
    firstName: "Анна",
    lastName: "Короткова",
    avatar:
      "https://images.unsplash.com/photo-1693438672953-409b661134fd?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: false,
    city: "Санкт-Петербург",
    age: 24,
    responses: 40,
    completedTestTasks: 14,
    interviews: 50,
    course: "Дизайнер интерфейсов",
    graduationDate: "апрель 2023",
    workFormat: "удаленный",
    grade: "Junior",
    salary: 50000,
    contacts: "+799999999999",
    about: "Улыбаюсь и пью кофе",
  },
  {
    id: 8,
    firstName: "Алия",
    lastName: "Шархимуллина",
    avatar:
      "https://images.unsplash.com/photo-1697472106815-829bad01f7b8?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isWinner: true,
    city: "Казань",
    age: 28,
    responses: 10,
    completedTestTasks: 5,
    interviews: 100,
    course: "Web-разработчик",
    graduationDate: "июнь 2022",
    workFormat: "офис",
    grade: "Junior",
    salary: 50000,
    contacts: "+799999999999",
    about: "Не улыбаюсь и пью винишко",
  },
];

const CandidateTable = () => {
  const [isCompareyModalOpened, setIsCompareModalOpened] =
    React.useState<boolean>(false);

  function handleOpenCompareModal() {
    console.log(true);
    setIsCompareModalOpened(true);
  }

  function handleCloseCompareModal() {
    setIsCompareModalOpened(false);
  }
  const [isTypeOpened, setIsTypeOpened] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState<Date | null>(new Date());

  const handleMainMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const tableSchema = yup.object({
    status: yup.number().required(),
  });

  type TableValues = {
    status: number;
  };
  const [selectedCandidates, setSelectedCandidates] = React.useState<number[]>(
    []
  );

  const form = useForm<TableValues>({
    resolver: yupResolver(tableSchema),
  });

  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const onSubmit = (data: TableValues) => {
    console.log("Form data submitted:", data);
    return data;
  };

  const handleCandidateSelection = (candidateId: number) => {
    if (selectedCandidates.includes(candidateId)) {
      setSelectedCandidates(
        selectedCandidates.filter((id) => id !== candidateId)
      );
    } else {
      setSelectedCandidates([...selectedCandidates, candidateId]);
    }
  };

  const handleAllCandidateSelection = () => {
    let tempArray = [...selectedCandidates];

    if (selectedCandidates.length == applicants.length) {
      tempArray = [];
    } else {
      for (let i = 0; i < applicants.length; i++) {
        if (!tempArray.includes(applicants[i].id)) {
          tempArray.push(applicants[i].id);
        }
      }
    }
    setSelectedCandidates(tempArray);
  };
  return (
    <>
      <div className={table.filterContainer}>
        <div className={table.filtersWrapper}>
          <div className={table.wrapper}>
            <SearchBar text="Поиск по имени" />
          </div>
          <div>
            <p className={table.text}>Статус</p>
            <VacancyDropDown />
          </div>
          <FiltersMenu />
        </div>
        {selectedCandidates.length == 1 && (
          <>
            <Button
              onClick={handleMainMenuClick}
              className={`${table.button}`}
              variant="contained"
              startIcon={<img src={calndarIcon} alt="иконка пригласить" />}
            >
              Пригласить
            </Button>
            <Menu
              sx={{
                ".css-6hp17o-MuiList-root-MuiMenu-list": { padding: "16px" },
              }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker orientation="landscape" />
              </LocalizationProvider>
            </Menu>
          </>
        )}
        {selectedCandidates.length == 2 && (
          <Button
            onClick={handleOpenCompareModal}
            className={`${table.buttonOutlined}`}
            variant="outlined"
            startIcon={<img src={compareIcon} alt="иконка сравнить" />}
          >
            Сравнить
          </Button>
        )}
      </div>
      <p className={table.choosen}>
        Выбрано {selectedCandidates.length} / {applicants.length}
      </p>
      <TableContainer className={table.table} component={Paper}>
        <Table
          sx={{
            width: "1888px",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell size="small">#</TableCell>
              <TableCell size="small">
                <Checkbox
                  checked={
                    selectedCandidates.length == applicants.length
                      ? true
                      : false
                  }
                  onChange={handleAllCandidateSelection}
                />
              </TableCell>
              <TableCell
                size="small"
                className={table.cell}
                sx={{ width: "240px" }}
              >
                Кандидат
              </TableCell>
              <TableCell
                className={table.cell}
                size="small"
                sx={{ width: "128px" }}
              >
                Контакты
              </TableCell>
              <TableCell
                className={table.cell}
                size="small"
                sx={{ width: "240px" }}
              >
                Статус
              </TableCell>
              <TableCell
                className={table.cell}
                size="small"
                sx={{ width: "172px" }}
              >
                Дата
              </TableCell>
              <TableCell
                className={table.cell}
                size="small"
                sx={{ width: "172px" }}
              >
                Город
              </TableCell>
              <TableCell
                className={table.cell}
                size="small"
                sx={{ width: "172px" }}
              >
                Формат работы
              </TableCell>
              <TableCell
                className={table.cell}
                size="small"
                sx={{ width: "172px" }}
              >
                Учебный статус
              </TableCell>
              <TableCell
                className={table.cell}
                size="small"
                sx={{ width: "172px" }}
              >
                Опыт работы
              </TableCell>
              <TableCell
                className={table.cell}
                size="small"
                sx={{ width: "240px" }}
              >
                Курс
              </TableCell>
              <TableCell
                className={table.cell}
                size="small"
                sx={{ width: "108px" }}
              >
                Дата выпуска
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicants.map((candidate, index) => (
              <TableRow key={index}>
                <TableCell size="small">{candidate.id}</TableCell>
                <TableCell size="small">
                  <Checkbox
                    checked={selectedCandidates.includes(candidate.id)}
                    onChange={() => handleCandidateSelection(candidate.id)}
                  />
                </TableCell>
                <TableCell
                  // onClick={handleOpenModal}
                  className={table.cell}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      className={table.avatar}
                      src={candidate.avatar}
                      alt="изображение студента"
                    />
                    {`${candidate.firstName} ${candidate.lastName}`}
                  </div>
                </TableCell>
                <TableCell className={table.cell}>
                  <IconButton color="primary" aria-label="Изменить">
                    <img src={telegramIcon} alt="иконка телеграмма" />
                  </IconButton>
                  <IconButton color="secondary" aria-label="Удалить">
                    <img src={emailIcon} alt="иконка электронной почты" />
                  </IconButton>
                </TableCell>
                <TableCell className={table.cell}>
                  <TextField
                    {...register("status")}
                    sx={{
                      backgroundColor: applicantStatuses[1].color,
                      ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                        {
                          padding: "8px 12px",
                          color: "#1A1B22",
                          fontFamily: "YS Text",
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "20px",
                        },
                    }}
                    className={table.input}
                    id="status"
                    defaultValue="1"
                    select
                  >
                    {applicantStatuses.map((option, index) => (
                      <MenuItem
                        className={table.dropDownList}
                        key={index}
                        value={index}
                      >
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
                <TableCell className={table.cell}>test</TableCell>
                <TableCell className={table.cell}>{candidate.city}</TableCell>
                <TableCell className={table.cell}>
                  {candidate.workFormat}
                </TableCell>
                <TableCell className={table.cell}>test</TableCell>
                <TableCell className={table.cell}>test</TableCell>
                <TableCell className={table.cell}>{candidate.course}</TableCell>
                <TableCell className={table.cell}>
                  {candidate.graduationDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <BasicModal
        isVisible={isUserModalOpened}
        closePopup={handleCloseModal}
      >
        <StudentModal />
      </BasicModal> */}

      <BasicModal
        isVisible={isCompareyModalOpened}
        closePopup={handleCloseCompareModal}
      >
        <CompareApplicantsModal />
      </BasicModal>
    </>
  );
};

export default CandidateTable;
