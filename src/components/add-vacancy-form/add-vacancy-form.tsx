import React from "react";
import addVacancyForm from "./add-vacancy-form.module.css";
import { Checkbox, FormControlLabel, MenuItem } from "@mui/material";
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
import { AddVacancyFormValues, TCity, TVacancy } from "../../utils/types";
import { useDispatch } from "../../services/hooks";
import { setCurrentVacancyData } from "../../services/reducers/vacancies";
import { useSelector } from "../../services/hooks";
import mainApi from "../../utils/MainApi";
import { TLangLevel } from "../../utils/types";
import InlineInput from "../inputs/inlineInput";
import DropDownInput from "../inputs/dropDownInput";
import MultilineInput from "../inputs/multilineInput";

interface IAddVacancyFormProps {
  value: number;
  defaultValues: TVacancy | null;
}

const AddVacancyForm: React.FC<IAddVacancyFormProps> = ({
  value,
  defaultValues,
}): JSX.Element => {
  const dispatch = useDispatch();
  const isOpened: boolean = useSelector(
    (store) => store.vacancies.isPreviewModalVisible
  );
  const cities: TCity[] = useSelector((store) => store.cities.cities);
  const form = useForm<AddVacancyFormValues>({
    defaultValues: {
      name: defaultValues?.title,
      experience: "LOW",
      city: defaultValues?.city,
      grade: "JR",
      languade: "english",
      languageLevel: "a1",
      salaryFrom: defaultValues?.min_wage,
      salaryTo: defaultValues?.max_wage,
      currency: "RUB",
      typeOfWork: "full",
      workHours: "FD",
      isRemote: true,
      aboutVacancy: defaultValues?.description,
      duty: defaultValues?.responsibility,
      requirmentsMandatory: defaultValues?.requirements,
      requirmentsOptional: defaultValues?.optional_requirements,
      workConditions: defaultValues?.conditions,
      selectionStages: defaultValues?.selection_stages,
    },
    resolver: yupResolver(vacancySchema),
  });

  const { register, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const onSubmit = (data: AddVacancyFormValues) => {
    const language: TLangLevel = { id: 0, level: 1, language: "Английский язык" };

    mainApi
      .addVacancy({
        title: data.name,
        city: data.city,
        expirience: data.experience,
        grade: data.grade,
        created: new Date(),
        min_wage: data.salaryFrom,
        max_wage: data.salaryTo,
        work_format: data.workHours,
        isRemote: data.isRemote,
        description: data.aboutVacancy,
        responsibility: data.duty,
        requirements: data.requirmentsMandatory,
        optional_requirements: data.requirmentsOptional,
        conditions: data.workConditions,
        selection_stages: data.selectionStages,
        is_active: true,
        is_archive: false,
        currency: data.currency,
        language: [language],
      })
    // return data;
    console.log(data);
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
        {(value === 0 || value === 3) && (
          <fieldset className={addVacancyForm.mainFieldset} style={{marginBottom: "29px"}}>
            <fieldset className={addVacancyForm.fieldset}>
              <InlineInput placeholder="" type="default" register={register} title="Название вакансии" errorMessage={errors.name?.message} id="name"/>
              <DropDownInput type="default" defaultValue={3} register={register} title="Город поиска" errorMessage={errors.city?.message} id="city">
              {cities.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.id}
                      value={option.id}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
              </DropDownInput>

              <div className={addVacancyForm.checkboxWrapper}>
                <FormControlLabel
                  sx={{
                    ".MuiFormControlLabel-root": {
                      marginBottom: "8px",
                      color: "#1A1B22",
                      fontFamily: "YS Text",
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "20px",
                    },
                    ".MuiCheckbox-root": {
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
              <DropDownInput type="default" defaultValue={"LOW"} register={register} title="Опыт работы" errorMessage={errors.experience?.message} id="experience">
              {experienceDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
              </DropDownInput>
              <DropDownInput type="default" defaultValue={"JR"} register={register} title="Грейд" errorMessage={errors.grade?.message} id="grade">
              {gradeDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
              </DropDownInput>
            </fieldset>

            <fieldset className={addVacancyForm.fieldset}>
              <DropDownInput type="default" defaultValue={"english"} register={register} title="Знание языков" errorMessage={errors.languade?.message} id="language">
              {languagesDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
              </DropDownInput>
              <DropDownInput type="default" defaultValue={"a1"} register={register} title="Уровень языка" errorMessage={errors.languageLevel?.message} id="languageLevel">
              {languageLevelDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
              </DropDownInput>
            </fieldset>
            <fieldset className={addVacancyForm.fieldset}>
              <div className={addVacancyForm.inputSection}>
                <label htmlFor={"salaryFrom"} className={addVacancyForm.label}>
                  Уровень дохода в месяц
                </label>
                <fieldset className={addVacancyForm.diapason}>
                <InlineInput placeholder="От" type="default" register={register} title="" errorMessage={errors.salaryFrom?.message} id="salaryFrom"/>
                <InlineInput placeholder="До" type="salaryTo" register={register} title="" errorMessage={errors.salaryTo?.message} id="salaryTo"/>
                </fieldset>
              </div>

              <DropDownInput type="currency"  defaultValue={"RUB"} register={register} title="Валюта" errorMessage={errors.currency?.message} id="currency">
              {currencyDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
              </DropDownInput>

            </fieldset>
            <fieldset className={addVacancyForm.fieldset}>
            <DropDownInput type="default"  defaultValue={"full"} register={register} title="Тип занятости" errorMessage={errors.typeOfWork?.message} id="typeOfWork">
            {typeOfWorkDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
              </DropDownInput>
              <DropDownInput type="default" defaultValue={"FD"} register={register} title="График работы" errorMessage={errors.workHours?.message} id="workHours">
              {workHoursDropDown.map((option) => (
                    <MenuItem
                      className={addVacancyForm.dropDownList}
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
              </DropDownInput>
            </fieldset>
          </fieldset>
        )}
        {(value === 1 || value === 3) && (
          <fieldset className={addVacancyForm.fieldsetColumns}>
            <div className={addVacancyForm.column}>
              <MultilineInput register={register} title="О Вакансии" id="aboutVacancy" errorMessage={errors.aboutVacancy?.message} />
              <MultilineInput register={register} title="Обязанности" id="duty" errorMessage={errors.duty?.message} />
              <MultilineInput register={register} title="Условия" id="requirmentsMandatory" errorMessage={errors.workConditions?.message} />
            </div>
            <div className={addVacancyForm.column}>
              <MultilineInput register={register} title="Требования обязательные" id="requirmentsMandatory" errorMessage={errors.requirmentsMandatory?.message} />
              <MultilineInput register={register} title="Требования необязательные" id="requirmentsOptional" errorMessage={errors.requirmentsOptional?.message} />
              <MultilineInput register={register} title="Этапы отбора" id="selectionStages" errorMessage={errors.selectionStages?.message} />
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
