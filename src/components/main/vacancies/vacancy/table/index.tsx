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
import table from "./index.module.css";
import telegramIcon from "../../../../../images/telegram.svg";
import emailIcon from "../../../../../images/email.svg";
import { applicantStatuses } from "../../../../../constants/applicantStatuses";
import SearchBar from "../../../../search-form/search-form";
import VacancyDropDown from "../vacancy-drop-down";
import FiltersMenu from "../../../../filters-menu/filters-menu";
import calndarIcon from "../../../../../images/Calendar.svg";
import compareIcon from "../../../../../images/compare.svg";
import BasicModal from "../../../../modal/modal";
import CompareApplicantsModal from "../compare-applicants-modal";
import { useSelector, useDispatch } from "../../../../../services/hooks";
import { editCandidateStatus } from "../../../../../services/actions/vacancies";
const CandidateTable = () => {
  const dispatch = useDispatch();
  const [isCompareyModalOpened, setIsCompareModalOpened] =
    React.useState<boolean>(false);

  const currentVacancyApplicantsList = useSelector(
    (state) => state.vacancies.currentVacancyApplicantsList
  );
  const currentVacancy = useSelector(
    (state) => state.vacancies.currentVacancyPage
  );

  function handleOpenCompareModal() {
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

  const [selectedCandidates, setSelectedCandidates] = React.useState<number[]>(
    []
  );

  const handleStatusChange = (candidateId:number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (applicantStatuses.find((status) => status.id == parseInt(e.target.value))?.name !== undefined) {
      dispatch(editCandidateStatus({applicantId: candidateId, vacancyId: currentVacancy?.id, status: applicantStatuses.find((status) => status.id == parseInt(e.target.value))?.name}))
    }
  }

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

    if (selectedCandidates.length === currentVacancyApplicantsList.length) {
      tempArray = [];
    } else {
      for (let i = 0; i < currentVacancyApplicantsList.length; i++) {
        if (!tempArray.includes(currentVacancyApplicantsList[i].id)) {
          tempArray.push(currentVacancyApplicantsList[i].id);
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
        {/* {selectedCandidates.length === 1 && (
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
                ".MuiMenu-list": { padding: "16px" },
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
        )} */}
        {selectedCandidates.length === 2 && (
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
      {currentVacancyApplicantsList.length > 0 ? (
        <>
          <p className={table.choosen}>
            Выбрано {selectedCandidates.length} /{" "}
            {currentVacancyApplicantsList.length}
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
                        selectedCandidates.length ===
                        currentVacancyApplicantsList.length
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
                  {/* <TableCell
                    className={table.cell}
                    size="small"
                    sx={{ width: "172px" }}
                  >
                    Дата
                  </TableCell> */}
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
                {currentVacancyApplicantsList.map((candidate,index) => {
                  console.log(candidate)
                  return (
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
                          src={candidate.avatar_url}
                          alt="изображение студента"
                        />
                        {`${candidate.first_name} ${candidate.last_name}`}
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
                        sx={{
                          backgroundColor: applicantStatuses.find((status) => status.name == candidate.response_status)?.color,
                          ".MuiOutlinedInput-input":
                            {
                              padding: "8px 12px",
                              color: "#1A1B22",
                              fontFamily: "YS Text",
                              fontSize: "14px",
                              fontWeight: "400",
                              lineHeight: "20px",
                            },
                        }}
                        onChange={(e) => handleStatusChange(candidate.id, e)}
                        className={table.input}
                        id="status"
                        value={applicantStatuses.find((status) => status.name == candidate.response_status)?.id}
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
                    {/* <TableCell className={table.cell}>test</TableCell> */}
                    <TableCell className={table.cell}>
                      {candidate.city}
                    </TableCell>
                    <TableCell className={table.cell}>
                      {candidate.work_format}
                    </TableCell>
                    <TableCell className={table.cell}>{candidate.edu_status}</TableCell>
                    <TableCell className={table.cell}>{candidate.work_status}</TableCell>
                    <TableCell className={table.cell}>
                      {candidate.course}
                    </TableCell>
                    <TableCell className={table.cell} sx={{width: '200px'}}>
                      {candidate?.graduation_date.toString()}
                    </TableCell>
                  </TableRow>
                  )
                }) }
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <div>Нет добавленных или откликнувшихся кандидатов</div>
      )}
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
        <CompareApplicantsModal studentFirst={currentVacancyApplicantsList.find(applicant => applicant.id === selectedCandidates[0])}studentSecond={currentVacancyApplicantsList.find(applicant => applicant.id === selectedCandidates[1])}/>
      </BasicModal>
    </>
  );
};

export default CandidateTable;
