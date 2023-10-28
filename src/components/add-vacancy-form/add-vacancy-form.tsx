import React from "react";
import addVacancyForm from "./add-vacancy-form.module.css";
import { Checkbox, FormControlLabel, MenuItem, TextField } from "@mui/material";
import SubmitButton from "../submit-button/submit-button";
import {
  experienceDropDown,
  languagesDropDown,
  currencyDropDown,
  workHoursDropDown,
  typeOfWorkDropDown,
  languageLevelDropDown,
  gradeDropDown,
} from "../../constants/dropDownVariants";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { vacancySchema } from "../../validations/add-vacancy-validations";
import { AddVacancyFormValues } from "../../utils/types";
import { useDispatch } from "../../services/hooks";
import { setCurrentVacancyData } from "../../services/reducers/vacancies";
import { useSelector } from "../../services/hooks";

interface IAddVacancyFormProps {
  value: number;
}

const AddVacancyForm: React.FC<IAddVacancyFormProps> = ({
  value,
}): JSX.Element => {
  const dispatch = useDispatch();
  const isOpened: boolean = useSelector(
    (store) => store.vacancies.isPreviewModalVisible
  );
  const form = useForm<AddVacancyFormValues>({
    defaultValues: {
      name: "",
      experience: "1to3",
      city: "",
      grade: "junior",
      languade: "english",
      languageLevel: "a1",
      salaryFrom: 0,
      salaryTo: 0,
      currency: "rubles",
      typeOfWork: "full",
      workHours: "full",
      isRemote: true,
      aboutVacancy: "",
      duty: "",
      requirmentsMandatory: "",
      requirmentsOptional: "",
      workConditions: "",
      selectionStages: "",
    },
    resolver: yupResolver(vacancySchema),
  });

  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const onSubmit = (data: AddVacancyFormValues) => {
    console.log("Form data submitted:", data);
    return data;
  };

  React.useEffect(() => {
    if (isOpened) {
      dispatch(setCurrentVacancyData(getValues()));
    }
  }, [isOpened, dispatch, getValues]);

  return (
    <form
      className={addVacancyForm.form}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <fieldset className={addVacancyForm.mainFieldset}>
        {value === 0 && (
          <fieldset className={addVacancyForm.mainFieldset}>
            <fieldset className={addVacancyForm.fieldset}>
              <div className={addVacancyForm.inputSection}>
                <label htmlFor={"name"} className={addVacancyForm.label}>
                  Название вакансии
                </label>
                <TextField
                  error={errors.name?.message !== undefined}
                  type="text"
                  {...register("name")}
                  inputProps={{
                    style: {
                      height: "9px",
                      padding: "10px auto 10px 12px",
                      color: "#1A1B22",
                      fontFamily: "YS Text",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                    },
                  }}
                  className={addVacancyForm.input}
                  id="name"
                  variant="outlined"
                />
                <label className={addVacancyForm.error}>
                  {errors.name?.message || " "}
                </label>
              </div>
              <div className={addVacancyForm.inputSection}>
                <label htmlFor={"city"} className={addVacancyForm.label}>
                  Город поиска
                </label>
                <TextField
                  {...register("city")}
                  error={errors.city?.message !== undefined}
                  inputProps={{
                    style: {
                      height: "8px",
                      padding: "10px auto 10px 12px",
                      color: "#1A1B22",
                      fontFamily: "YS Text",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                    },
                  }}
                  className={addVacancyForm.input}
                  id="city"
                  variant="outlined"
                />
                <label className={addVacancyForm.error}>
                  {errors.city?.message || " "}
                </label>
              </div>
              <div className={addVacancyForm.checkboxWrapper}>
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
                  }}
                  control={
                    <Checkbox
                      {...register("isRemote")}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                      defaultChecked
                    />
                  }
                  label="Удаленная работа"
                />
              </div>
            </fieldset>

            <fieldset className={addVacancyForm.fieldset}>
              <div className={addVacancyForm.inputSection}>
                <label htmlFor={"experience"} className={addVacancyForm.label}>
                  Опыт работы
                </label>
                <TextField
                  {...register("experience")}
                  sx={{
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
                  className={addVacancyForm.input}
                  id="experience"
                  defaultValue="1to3"
                  select
                >
                  {experienceDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <label className={addVacancyForm.error}>
                  {errors.experience?.message || " "}
                </label>
              </div>
              <div className={addVacancyForm.inputSection}>
                <label htmlFor={"grade"} className={addVacancyForm.label}>
                  Грейд
                </label>
                <TextField
                  {...register("grade")}
                  sx={{
                    ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        padding: "10px 12px",
                        height: "8px",
                        color: "#1A1B22",
                        fontFamily: "YS Text",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "20px",
                      },
                  }}
                  className={addVacancyForm.input}
                  id="grade"
                  defaultValue="junior"
                  select
                >
                  {gradeDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <label className={addVacancyForm.error}>
                  {errors.grade?.message || " "}
                </label>
              </div>
            </fieldset>

            <fieldset className={addVacancyForm.fieldset}>
              <div className={addVacancyForm.inputSection}>
                <label htmlFor={"language"} className={addVacancyForm.label}>
                  Знание языков
                </label>
                <TextField
                  {...register("languade")}
                  sx={{
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
                  className={addVacancyForm.input}
                  id="language"
                  select
                  defaultValue="english"
                >
                  {languagesDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <label className={addVacancyForm.error}>
                  {errors.languade?.message || " "}
                </label>
              </div>
              <div className={addVacancyForm.inputSection}>
                <label
                  htmlFor={"languageLevel"}
                  className={addVacancyForm.label}
                >
                  Уровень языка
                </label>
                <TextField
                  {...register("languageLevel")}
                  sx={{
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
                  className={addVacancyForm.input}
                  id="languageLevel"
                  defaultValue="a1"
                  select
                >
                  {languageLevelDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <label className={addVacancyForm.error}>
                  {errors.languageLevel?.message || " "}
                </label>
              </div>
            </fieldset>
            <fieldset className={addVacancyForm.fieldset}>
              <div className={addVacancyForm.inputSection}>
                <label htmlFor={"salaryFrom"} className={addVacancyForm.label}>
                  Уровень дохода в месяц
                </label>
                <fieldset className={addVacancyForm.diapason}>
                  <TextField
                    type="number"
                    {...register("salaryFrom")}
                    error={errors.salaryFrom?.message !== undefined}
                    inputProps={{
                      style: {
                        height: "9px",
                        padding: "10px auto 10px 12px",
                        color: "#1A1B22",
                        fontFamily: "YS Text",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "20px",
                      },
                    }}
                    sx={{ width: "320px", marginRight: "12px" }}
                    placeholder="От"
                    id="salaryFrom"
                    variant="outlined"
                  />
                  <label className={addVacancyForm.error}>
                    {errors.salaryFrom?.message || " "}
                  </label>
                  <TextField
                    type="number"
                    {...register("salaryTo")}
                    error={errors.salaryTo?.message !== undefined}
                    inputProps={{
                      style: {
                        height: "9px",
                        padding: "10px auto 10px 12px",
                        color: "#1A1B22",
                        fontFamily: "YS Text",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "20px",
                      },
                    }}
                    sx={{ width: "153px" }}
                    placeholder="До"
                    id="salaryTo"
                    variant="outlined"
                  />
                  <label className={addVacancyForm.error}>
                    {errors.salaryTo?.message || " "}
                  </label>
                </fieldset>
              </div>
              <div className={addVacancyForm.inputSection}>
                <label htmlFor={"currency"} className={addVacancyForm.label}>
                  Валюта
                </label>
                <TextField
                  {...register("currency")}
                  sx={{
                    ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        padding: "8px 12px",
                        color: "#1A1B22",
                        fontFamily: "YS Text",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "20px",
                      },
                    marginTop: "4px",
                  }}
                  id="currency"
                  defaultValue="rubles"
                  select
                >
                  {currencyDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <label className={addVacancyForm.error}>
                  {errors.currency?.message || " "}
                </label>
              </div>
            </fieldset>
            <fieldset className={addVacancyForm.fieldset}>
              <div className={addVacancyForm.inputSection}>
                <label htmlFor={"typeOfWork"} className={addVacancyForm.label}>
                  Тип занятости
                </label>
                <TextField
                  {...register("typeOfWork")}
                  sx={{
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
                  className={addVacancyForm.input}
                  id="typeOfWork"
                  defaultValue="full"
                  select
                >
                  {typeOfWorkDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <label className={addVacancyForm.error}>
                  {errors.typeOfWork?.message || " "}
                </label>
              </div>
              <div
                className={addVacancyForm.inputSection}
                style={{ marginBottom: "7px" }}
              >
                <label htmlFor={"workHours"} className={addVacancyForm.label}>
                  График работы
                </label>
                <TextField
                  {...register("workHours")}
                  sx={{
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
                  className={addVacancyForm.input}
                  id="workHours"
                  defaultValue="full"
                  select
                >
                  {workHoursDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <label className={addVacancyForm.error}>
                  {errors.workHours?.message || " "}
                </label>
              </div>
            </fieldset>
          </fieldset>
        )}
        {value === 1 && (
          <fieldset className={addVacancyForm.fieldsetColumns}>
            <div className={addVacancyForm.column}>
              <div className={addVacancyForm.inputSection}>
                <label
                  htmlFor={"aboutVacancy"}
                  className={addVacancyForm.label}
                >
                  О Вакансии
                </label>
                <TextField
                  {...register("aboutVacancy")}
                  error={errors.aboutVacancy?.message !== undefined}
                  className={addVacancyForm.multiLineInput}
                  id="aboutVacancy"
                  multiline
                  rows={2.9}
                  sx={{
                    "& .MuiInputBase-root::-webkit-scrollbar": {
                      width: "0.1rem",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-thumb": {
                      background: "transparent",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-track": {
                      background: "transparent",
                    },
                  }}
                  InputProps={{
                    style: {
                      padding: "10px 12px",
                      height: "90px",
                      overflowY: "auto",
                      color: "#1A1B22",
                      fontFamily: "YS Text",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      textAlign: "left",
                    },
                  }}
                />
                <label className={addVacancyForm.error}>
                  {errors.aboutVacancy?.message || " "}
                </label>
              </div>
              <div className={addVacancyForm.inputSection}>
                <label htmlFor={"duty"} className={addVacancyForm.label}>
                  Обязанности
                </label>
                <TextField
                  {...register("duty")}
                  error={errors.duty?.message !== undefined}
                  className={addVacancyForm.multiLineInput}
                  id="duty"
                  multiline
                  rows={2.9}
                  sx={{
                    "& .MuiInputBase-root::-webkit-scrollbar": {
                      width: "0.1rem",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-thumb": {
                      background: "transparent",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-track": {
                      background: "transparent",
                    },
                  }}
                  InputProps={{
                    style: {
                      padding: "10px 12px",
                      height: "90px",
                      overflowY: "auto",
                      color: "#1A1B22",
                      fontFamily: "YS Text",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      textAlign: "left",
                    },
                  }}
                />
                <label className={addVacancyForm.error}>
                  {errors.duty?.message || " "}
                </label>
              </div>
              <div className={addVacancyForm.inputSection}>
                <label
                  htmlFor={"workConditions"}
                  className={addVacancyForm.label}
                >
                  Условия
                </label>
                <TextField
                  {...register("workConditions")}
                  className={addVacancyForm.multiLineInput}
                  error={errors.workConditions?.message !== undefined}
                  id="workConditions"
                  multiline
                  rows={2.9}
                  sx={{
                    "& .MuiInputBase-root::-webkit-scrollbar": {
                      width: "0.1rem",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-thumb": {
                      background: "transparent",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-track": {
                      background: "transparent",
                    },
                  }}
                  InputProps={{
                    style: {
                      padding: "10px 12px",
                      height: "90px",
                      overflowY: "auto",
                      color: "#1A1B22",
                      fontFamily: "YS Text",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      textAlign: "left",
                    },
                  }}
                />
                <label className={addVacancyForm.error}>
                  {errors.workConditions?.message || " "}
                </label>
              </div>
            </div>

            <div className={addVacancyForm.column}>
              <div className={addVacancyForm.inputSection}>
                <label
                  htmlFor={"requirmentsMandatory"}
                  className={addVacancyForm.label}
                >
                  Требования обязательные
                </label>
                <TextField
                  {...register("requirmentsMandatory")}
                  error={errors.requirmentsMandatory?.message !== undefined}
                  className={addVacancyForm.multiLineInput}
                  id="requirmentsMandatory"
                  multiline
                  rows={2.9}
                  sx={{
                    "& .MuiInputBase-root::-webkit-scrollbar": {
                      width: "0.1rem",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-thumb": {
                      background: "transparent",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-track": {
                      background: "transparent",
                    },
                  }}
                  InputProps={{
                    style: {
                      padding: "10px 12px",
                      height: "90px",
                      overflowY: "auto",
                      color: "#1A1B22",
                      fontFamily: "YS Text",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      textAlign: "left",
                    },
                  }}
                />
                <label className={addVacancyForm.error}>
                  {errors.requirmentsMandatory?.message || " "}
                </label>
              </div>
              <div className={addVacancyForm.inputSection}>
                <label
                  htmlFor={"requirmentsOptional"}
                  className={addVacancyForm.label}
                >
                  Требования необязательные
                </label>
                <TextField
                  {...register("requirmentsOptional")}
                  error={errors.requirmentsOptional?.message !== undefined}
                  className={addVacancyForm.multiLineInput}
                  id="requirmentsOptional"
                  multiline
                  sx={{
                    "& .MuiInputBase-root::-webkit-scrollbar": {
                      width: "0.1rem",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-thumb": {
                      background: "transparent",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-track": {
                      background: "transparent",
                    },
                  }}
                  rows={2.9}
                  InputProps={{
                    style: {
                      padding: "10px 12px",
                      height: "90px",
                      overflowY: "auto",
                      color: "#1A1B22",
                      fontFamily: "YS Text",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      textAlign: "left",
                    },
                  }}
                />
                <label className={addVacancyForm.error}>
                  {errors.requirmentsOptional?.message || " "}
                </label>
              </div>
              <div className={addVacancyForm.inputSection}>
                <label
                  htmlFor={"selectionStages"}
                  className={addVacancyForm.label}
                >
                  Этапы отбора
                </label>
                <TextField
                  {...register("selectionStages")}
                  error={errors.selectionStages?.message !== undefined}
                  rows={2.9}
                  sx={{
                    "& .MuiInputBase-root::-webkit-scrollbar": {
                      width: "0.1rem",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-thumb": {
                      background: "transparent",
                    },
                    "& .MuiInputBase-root::-webkit-scrollbar-track": {
                      background: "transparent",
                    },
                  }}
                  InputProps={{
                    style: {
                      padding: "10px 12px",
                      height: "90px",
                      overflowY: "auto",
                      color: "#1A1B22",
                      fontFamily: "YS Text",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                      textAlign: "left",
                    },
                  }}
                  className={addVacancyForm.multiLineInput}
                  id="selectionStages"
                  multiline
                />
                <label className={addVacancyForm.error}>
                  {errors.selectionStages?.message || " "}
                </label>
              </div>
            </div>
          </fieldset>
        )}
      </fieldset>
      <div className={addVacancyForm.buttonWrapper}>
        <SubmitButton
          isFullWidth={true}
          text="Сохранить"
          isDisabled={
            !(
              formState.dirtyFields.name &&
              formState.dirtyFields.aboutVacancy &&
              formState.dirtyFields.city &&
              formState.dirtyFields.duty &&
              formState.dirtyFields.requirmentsMandatory &&
              formState.dirtyFields.requirmentsOptional &&
              formState.dirtyFields.salaryFrom &&
              formState.dirtyFields.salaryTo &&
              formState.dirtyFields.selectionStages &&
              formState.dirtyFields.workConditions
            )
          }
        />
      </div>
    </form>
  );
};

export default AddVacancyForm;
