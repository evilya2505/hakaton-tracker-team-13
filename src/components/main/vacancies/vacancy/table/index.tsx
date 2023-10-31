import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
import Checkbox from "@mui/joy/Checkbox";
import { TApplicant } from "../../../../../utils/types";

const CandidateTable = () => {
  const [dataToShow, setDataToShow] = React.useState<
    Array<TApplicant | undefined>
  >([]);
  const dispatch = useDispatch();
  const [isCompareyModalOpened, setIsCompareModalOpened] =
    React.useState<boolean>(false);

  const currentVacancyApplicantsList = useSelector(
    (state) => state.vacancies.currentVacancyApplicantsList
  );
  const searchResult = useSelector((state) => state.vacancies.searchResults);
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

  const handleStatusChange = (
    candidateId: number | undefined,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (candidateId !== undefined) {
      if (
        applicantStatuses.find(
          (status) => status.id == parseInt(e.target.value)
        )?.name !== undefined
      ) {
        dispatch(
          editCandidateStatus({
            applicantId: candidateId,
            vacancyId: currentVacancy?.id,
            status: applicantStatuses.find(
              (status) => status.id == parseInt(e.target.value)
            )?.name,
          })
        );
      }
    }
  };

  const handleCandidateSelection = (candidateId: number | undefined) => {
    if (candidateId !== undefined) {
      if (selectedCandidates.includes(candidateId)) {
        setSelectedCandidates(
          selectedCandidates.filter((id) => id !== candidateId)
        );
      } else {
        setSelectedCandidates([...selectedCandidates, candidateId]);
      }
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

  React.useEffect(() => {
    if (searchResult.length > 0) {
      setDataToShow(searchResult);
    } else {
      setDataToShow(currentVacancyApplicantsList);
    }
  }, [searchResult, currentVacancyApplicantsList]);
  return (
    <>
      <div className={table.filterContainer}>
        <div className={table.filtersWrapper}>
          <div className={table.wrapper}>
            <SearchBar text="Поиск по имени" type="vacancy" />
          </div>
          <div>
            <p className={table.text}>Статус</p>
            <VacancyDropDown />
          </div>
          <FiltersMenu type={"vacancy"} />
        </div>
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
                      variant="outlined"
                      size="lg"
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
                {dataToShow.map((candidate, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell size="small">{candidate?.id}</TableCell>
                      <TableCell size="small">
                        <Checkbox
                          variant="outlined"
                          size="lg"
                          checked={
                            candidate?.id !== undefined &&
                            selectedCandidates.includes(candidate?.id)
                          }
                          onChange={() =>
                            handleCandidateSelection(candidate?.id)
                          }
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
                            src={candidate?.avatar_url}
                            alt="изображение студента"
                          />
                          {`${candidate?.first_name} ${candidate?.last_name}`}
                        </div>
                      </TableCell>
                      <TableCell className={table.cell}>
                        <IconButton color="primary" aria-label="Изменить">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M22.2647 2.92778C21.98 2.69091 21.6364 2.53567 21.2704 2.47858C20.9045 2.42149 20.5299 2.46469 20.1866 2.60357L2.26566 9.83892C1.88241 9.9966 1.55618 10.2671 1.33026 10.6145C1.10434 10.962 0.989427 11.3699 1.00076 11.7841C1.0121 12.1984 1.14916 12.5994 1.39374 12.934C1.63832 13.2685 1.97886 13.5208 2.37016 13.6573L5.99516 14.918L8.01566 21.5997C8.04312 21.6889 8.08297 21.7739 8.13404 21.852C8.14179 21.864 8.15272 21.873 8.16096 21.8846C8.21996 21.967 8.29127 22.0397 8.37239 22.1004C8.39546 22.118 8.41755 22.1345 8.44221 22.1501C8.53714 22.2131 8.64228 22.2591 8.75294 22.2862L8.76478 22.2872L8.77149 22.2901C8.83802 22.3036 8.90574 22.3105 8.97364 22.3106C8.98017 22.3106 8.98597 22.3074 8.99244 22.3073C9.0949 22.3055 9.19647 22.2879 9.29353 22.255C9.31611 22.2473 9.33546 22.2345 9.35737 22.2252C9.42975 22.1952 9.49832 22.1567 9.56166 22.1106C9.61238 22.0679 9.66312 22.0251 9.71388 21.9824L12.416 18.9991L16.4463 22.1211C16.8011 22.3974 17.2379 22.5475 17.6875 22.5479C18.1587 22.5473 18.6154 22.3847 18.9809 22.0874C19.3465 21.7901 19.5987 21.3762 19.6954 20.9151L22.958 4.89849C23.032 4.53801 23.0065 4.16421 22.8844 3.81708C22.7623 3.46995 22.5481 3.16255 22.2647 2.92778ZM9.37016 15.2364C9.2315 15.3745 9.13672 15.5505 9.0977 15.7422L8.78819 17.2462L8.00413 14.6532L12.0694 12.5362L9.37016 15.2364ZM17.6719 20.5401L12.9092 16.8506C12.71 16.6966 12.46 16.6234 12.2092 16.6455C11.9583 16.6675 11.725 16.7833 11.5557 16.9697L10.6903 17.9249L10.9961 16.4385L18.0791 9.35549C18.2482 9.18665 18.3512 8.96285 18.3695 8.72461C18.3878 8.48638 18.3201 8.24947 18.1788 8.05681C18.0375 7.86414 17.8319 7.72845 17.5992 7.67433C17.3664 7.6202 17.122 7.65121 16.9102 7.76174L6.74491 13.0544L3.02055 11.6915L20.999 4.49905L17.6719 20.5401Z"
                              fill="#1D6BF3"
                            />
                          </svg>
                        </IconButton>
                        <IconButton color="secondary" aria-label="Удалить">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="21"
                            viewBox="0 0 24 21"
                            fill="none"
                          >
                            <path
                              d="M22.3233 7.05946H20.8106V5.54667C20.8106 4.62215 20.0585 3.86999 19.134 3.86999H17.6212V2.35734C17.6212 1.42977 16.8687 0.680664 15.9446 0.680664H1.67667C0.754453 0.680711 0 1.42743 0 2.35734V12.2635C0 13.188 0.752156 13.9402 1.67667 13.9402H3.18937V15.453C3.18937 16.3775 3.94153 17.1297 4.86605 17.1297H6.37875V18.6424C6.37875 19.5669 7.13091 20.319 8.05542 20.319H22.3234C23.2479 20.319 24 19.5669 24 18.6424V8.73609C24 7.81162 23.2478 7.05946 22.3233 7.05946ZM14.7343 2.35499L8.81063 8.16032L2.88708 2.35513L14.7343 2.35499ZM1.67442 12.2635L1.67475 3.51145L8.22464 9.93046C8.55019 10.2495 9.07116 10.2494 9.39661 9.93046L15.9465 3.5114L15.9447 12.2658L1.67442 12.2635ZM4.8638 15.4529V13.9402H15.9447C16.8692 13.9402 17.6213 13.1881 17.6213 12.2635V5.5447L19.1362 5.54517C19.1362 5.54517 19.1362 5.54568 19.1362 5.54671L19.134 15.4552L4.8638 15.4529ZM22.3233 18.6445L8.05317 18.6423V17.1296H19.134C20.0586 17.1296 20.8107 16.3774 20.8107 15.4529V8.73412L22.3256 8.73454C22.3256 8.73454 22.3257 8.73506 22.3257 8.73609L22.3233 18.6445Z"
                              fill="#B5B5B7"
                            />
                          </svg>
                        </IconButton>
                      </TableCell>
                      <TableCell className={table.cell}>
                        <TextField
                          sx={{
                            backgroundColor: applicantStatuses.find(
                              (status) =>
                                status.name == candidate?.response_status
                            )?.color,
                            ".MuiOutlinedInput-input": {
                              padding: "8px 12px",
                              color: "#1A1B22",
                              fontFamily: "YS Text",
                              fontSize: "14px",
                              fontWeight: "400",
                              lineHeight: "20px",
                            },
                          }}
                          onChange={(e) => handleStatusChange(candidate?.id, e)}
                          className={table.input}
                          id="status"
                          value={
                            applicantStatuses.find(
                              (status) =>
                                status.name == candidate?.response_status
                            )?.id
                          }
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
                      <TableCell className={table.cell}>
                        {candidate?.city}
                      </TableCell>
                      <TableCell className={table.cell}>
                        {candidate?.work_format}
                      </TableCell>
                      <TableCell className={table.cell}>
                        {candidate?.edu_status}
                      </TableCell>
                      <TableCell className={table.cell}>
                        {candidate?.work_status}
                      </TableCell>
                      <TableCell className={table.cell}>
                        {candidate?.course}
                      </TableCell>
                      <TableCell className={table.cell} sx={{ width: "200px" }}>
                        {candidate?.graduation_date.toString()}
                      </TableCell>
                    </TableRow>
                  );
                })}
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
        <CompareApplicantsModal
          studentFirst={currentVacancyApplicantsList.find(
            (applicant) => applicant.id === selectedCandidates[0]
          )}
          studentSecond={currentVacancyApplicantsList.find(
            (applicant) => applicant.id === selectedCandidates[1]
          )}
        />
      </BasicModal>
    </>
  );
};

export default CandidateTable;
