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
import { applicantStatuses } from "../../../../../constants/applicantStatuses";
import SearchBar from "../../../../search-form/search-form";
import VacancyDropDown from "../vacancy-drop-down";
import FiltersMenu from "../../../../filters-menu/filters-menu";
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
            startIcon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M8.75001 11.5626C8.50137 11.5626 8.26291 11.6614 8.08709 11.8372C7.91128 12.013 7.81251 12.2514 7.81251 12.5001V13.9845L6.13594 12.3102C5.87406 12.0497 5.66644 11.7399 5.5251 11.3986C5.38375 11.0573 5.3115 10.6914 5.31251 10.322V7.65165C5.93802 7.4305 6.46521 6.99534 6.80091 6.42308C7.13661 5.85081 7.25919 5.1783 7.147 4.5244C7.03481 3.8705 6.69506 3.27731 6.18781 2.84968C5.68056 2.42204 5.03846 2.1875 4.37501 2.1875C3.71155 2.1875 3.06945 2.42204 2.5622 2.84968C2.05495 3.27731 1.7152 3.8705 1.60301 4.5244C1.49082 5.1783 1.6134 5.85081 1.9491 6.42308C2.2848 6.99534 2.81199 7.4305 3.43751 7.65165V10.322C3.43587 10.9377 3.55634 11.5476 3.79195 12.1165C4.02757 12.6853 4.37364 13.2018 4.81016 13.636L6.48438 15.3126H5.00001C4.75137 15.3126 4.51291 15.4114 4.33709 15.5872C4.16128 15.763 4.06251 16.0014 4.06251 16.2501C4.06251 16.4987 4.16128 16.7372 4.33709 16.913C4.51291 17.0888 4.75137 17.1876 5.00001 17.1876H8.75001C8.99865 17.1876 9.2371 17.0888 9.41292 16.913C9.58873 16.7372 9.68751 16.4987 9.68751 16.2501V12.5001C9.68751 12.2514 9.58873 12.013 9.41292 11.8372C9.2371 11.6614 8.99865 11.5626 8.75001 11.5626ZM4.37501 4.06259C4.56043 4.06259 4.74168 4.11757 4.89585 4.22059C5.05002 4.3236 5.17019 4.47002 5.24114 4.64132C5.3121 4.81263 5.33067 5.00113 5.29449 5.18299C5.25832 5.36484 5.16903 5.53189 5.03792 5.663C4.90681 5.79411 4.73976 5.8834 4.5579 5.91957C4.37605 5.95575 4.18755 5.93718 4.01624 5.86622C3.84493 5.79527 3.69852 5.67511 3.5955 5.52093C3.49249 5.36676 3.43751 5.18551 3.43751 5.00009C3.43751 4.75145 3.53628 4.51299 3.71209 4.33717C3.88791 4.16136 4.12637 4.06259 4.37501 4.06259ZM16.5625 12.3485V9.67821C16.5641 9.0625 16.4437 8.45257 16.2081 7.88372C15.9724 7.31487 15.6264 6.79838 15.1899 6.36415L13.5156 4.68759H15C15.2486 4.68759 15.4871 4.58882 15.6629 4.413C15.8387 4.23719 15.9375 3.99873 15.9375 3.75009C15.9375 3.50145 15.8387 3.26299 15.6629 3.08718C15.4871 2.91136 15.2486 2.81259 15 2.81259H11.25C11.0014 2.81259 10.7629 2.91136 10.5871 3.08718C10.4113 3.26299 10.3125 3.50145 10.3125 3.75009V7.50009C10.3125 7.74873 10.4113 7.98718 10.5871 8.163C10.7629 8.33882 11.0014 8.43759 11.25 8.43759C11.4986 8.43759 11.7371 8.33882 11.9129 8.163C12.0887 7.98718 12.1875 7.74873 12.1875 7.50009V6.01571L13.8641 7.69227C14.1257 7.95252 14.3331 8.262 14.4745 8.60287C14.6158 8.94373 14.6882 9.30921 14.6875 9.67821V12.3485C14.062 12.5697 13.5348 13.0048 13.1991 13.5771C12.8634 14.1494 12.7408 14.8219 12.853 15.4758C12.9652 16.1297 13.3049 16.7229 13.8122 17.1505C14.3195 17.5781 14.9616 17.8127 15.625 17.8127C16.2885 17.8127 16.9306 17.5781 17.4378 17.1505C17.9451 16.7229 18.2848 16.1297 18.397 15.4758C18.5092 14.8219 18.3866 14.1494 18.0509 13.5771C17.7152 13.0048 17.188 12.5697 16.5625 12.3485ZM15.625 15.9376C15.4396 15.9376 15.2583 15.8826 15.1042 15.7796C14.95 15.6766 14.8298 15.5302 14.7589 15.3589C14.6879 15.1875 14.6693 14.999 14.7055 14.8172C14.7417 14.6353 14.831 14.4683 14.9621 14.3372C15.0932 14.2061 15.2603 14.1168 15.4421 14.0806C15.624 14.0444 15.8125 14.063 15.9838 14.134C16.1551 14.2049 16.3015 14.3251 16.4045 14.4792C16.5075 14.6334 16.5625 14.8147 16.5625 15.0001C16.5625 15.2487 16.4637 15.4872 16.2879 15.663C16.1121 15.8388 15.8736 15.9376 15.625 15.9376Z" fill="#1D6BF3"/>
          </svg>}
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
                      <TableCell size="small">{index+1}</TableCell>
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
