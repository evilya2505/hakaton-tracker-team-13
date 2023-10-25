import React from "react";
import addVacancyForm from './add-vacancy-form.module.css';
import { Checkbox, FormControlLabel, MenuItem, TextField } from "@mui/material";
import SubmitButton from "../submit-button/submit-button";

//   Посмотреть нормально ли использовать label
//   Посмотреть есть ли в MUI замена <fieldset>
//   По возможности все стили взять из <MUI></MUI>
//   Перенести все переменные в файл constants
//   Узнать у дизайнеров, можно ли добавить несколько возможных вариантов, 
//   если да, то как это отображается и как отменить выбор
//   Поправить позиционирование чекбокса 
//   Кастомизация (шрифты)
//   padding у select

interface IAddVacancyFormProps {
    value: number;
}

const AddVacancyForm: React.FC<IAddVacancyFormProps> = ({value}): JSX.Element => {
    const experience = [
        {
            value: '1to3',
            label: 'От 1 года до 3 лет',
        },
    ];

    const languages = [
        {
            value: 'english',
            label: 'Английский язык',
        },
    ];


    const grade = [
        {
            value: 'junior',
            label: 'Junior',
        },
    ];

    const languageLevel = [
        {
            value: 'a1',
            label: 'A1(Базовый)',
        },
    ];

    const currency = [
        {
            value: 'rubles',
            label: '\u20bd Рубль',
        },
    ];

    const typeOfWork = [
        {
            value: 'full',
            label: 'Полная занятость',
        },
    ];


    const workHours = [
        {
            value: 'full',
            label: 'Полный день',
        },
    ];

  return (
    <form className={addVacancyForm.form}>
        <fieldset className={addVacancyForm.mainFieldset}>
        {value == 0 && 
        <fieldset className={addVacancyForm.mainFieldset}>
            <fieldset className={addVacancyForm.fieldset}>
                <div className={addVacancyForm.inputSection}>
                    <label className={addVacancyForm.label}>Название вакансии</label>
                    <TextField inputProps={{style: {height: "9px", padding: "10px auto 10px 12px"}}} className={addVacancyForm.input} id="outlined-basic" variant="outlined" />
                </div>
                <div className={addVacancyForm.inputSection}>
                    <label className={addVacancyForm.label}>Город поиска</label>
                    <TextField inputProps={{style: {height: "9px", padding: "10px auto 10px 12px"}}}
                    className={addVacancyForm.input}  id="outlined-basic"  variant="outlined" />  
                </div>
                <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} defaultChecked />} label="Удаленная работа" />
            </fieldset>

            <fieldset className={addVacancyForm.fieldset}>
                <div className={addVacancyForm.inputSection}>
                <label className={addVacancyForm.label}>Опыт работы</label>
                <TextField
                        sx={{
                            ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                                padding: "10px 12px",
                            },
                            }}
                        className={addVacancyForm.input} 
                        id="outlined-select-currency"
                        defaultValue="1to3"
                        select
                        >
                        {experience.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                </TextField>
                </div>
                <div className={addVacancyForm.inputSection}>
                    <label className={addVacancyForm.label}>Грейд</label>
                    <TextField
                            sx={{
                                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                                  padding: "10px 12px",
                                },
                              }}
                            className={addVacancyForm.input} 
                            id="outlined-select-currency"
                            defaultValue="junior"
                            select
                            >
                            {grade.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                </div>
            </fieldset>
            
            <fieldset className={addVacancyForm.fieldset}>
                <div className={addVacancyForm.inputSection}>
                <label className={addVacancyForm.label}>Знание языков</label>
                    <TextField
                            sx={{
                                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                                  padding: "10px 12px",
                                },
                              }}
                            className={addVacancyForm.input} 
                            id="outlined-select-currency"
                            select
                            defaultValue="english"
                            >
                            {languages.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                </div>
                <div className={addVacancyForm.inputSection}>
                    <label className={addVacancyForm.label}>Уровень языка</label>
                    <TextField
                           sx={{
                            ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                              padding: "10px 12px",
                            },
                          }}
                            className={addVacancyForm.input} 
                            id="outlined-select-currency"
                            defaultValue="a1"
                            select
                            >
                            {languageLevel.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                </div>
            </fieldset>
            <fieldset className={addVacancyForm.fieldset}>
                <div className={addVacancyForm.inputSection}>
                    <label className={addVacancyForm.label}>Уровень дохода в месяц</label>
                    <fieldset className={addVacancyForm.diapason}>
                        <TextField 
                        inputProps={{style: {height: "9px", padding: "10px auto 10px 12px"}}}
                        sx={{width: '320px', marginRight: '12px'}} placeholder="От" id="outlined-basic" variant="outlined" />
                        <TextField 
                        inputProps={{style: {height: "9px", padding: "10px auto 10px 12px"}}}
                        sx={{width: '153px'}} placeholder="До" id="outlined-basic" variant="outlined" />
                    </fieldset>
                </div>
                <div className={addVacancyForm.inputSection}>
                    <label className={addVacancyForm.label}>Валюта</label>
                    <TextField
                           sx={{
                            ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                              padding: "10px 12px",
                            },
                            marginTop: '4px'
                          }}
                            id="outlined-select-currency"
                            defaultValue="rubles"
                            select
                            >
                            {currency.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                </div>
            </fieldset>
            <fieldset className={addVacancyForm.fieldset}>
                <div className={addVacancyForm.inputSection}>
                    <label className={addVacancyForm.label}>Тип занятости</label>
                    <TextField
                            sx={{
                                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                                  padding: "10px 12px",
                                },
                              }}
                            className={addVacancyForm.input} 
                            id="outlined-select-currency"
                            defaultValue="full"
                            select
                            >
                            {typeOfWork.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                </div>
                <div className={addVacancyForm.inputSection}>
                    <label className={addVacancyForm.label}>График работы</label>
                    <TextField
                            sx={{
                                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
                                  padding: "10px 12px",
                                },
                              }}
                            className={addVacancyForm.input} 
                            id="outlined-select-currency"
                            defaultValue="full"
                            select
                            >
                            {workHours.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                    </TextField>
                </div>
            </fieldset>
        </fieldset>}
            {value == 1 &&             
            <fieldset className={addVacancyForm.fieldsetColumns}>
                <div className={addVacancyForm.column}>
                    <div className={addVacancyForm.inputSection}>
                        <label className={addVacancyForm.label}>О Вакансии</label>
                        <TextField
                        className={addVacancyForm.multiLineInput}
                        id="outlined-multiline-static"
                        multiline
                        rows={3}
                        />
                    </div>
                    <div className={addVacancyForm.inputSection}>
                        <label className={addVacancyForm.label}>Обязанности</label>
                        <TextField
                        className={addVacancyForm.multiLineInput}
                        id="outlined-multiline-static"
                        multiline
                        rows={3}
                        />
                    </div>
                    <div className={addVacancyForm.inputSection}>
                        <label className={addVacancyForm.label}>Условия</label>
                        <TextField
                        className={addVacancyForm.multiLineInput}
                        id="outlined-multiline-static"
                        multiline
                        rows={3}
                        />
                    </div>
                </div>

                <div className={addVacancyForm.column}>
                <div className={addVacancyForm.inputSection}>
                    <label className={addVacancyForm.label}>Требования обязательные</label>
                    <TextField
                    className={addVacancyForm.multiLineInput}
                    id="outlined-multiline-static"
                    multiline
                    rows={3}
                    />
                </div>
                <div className={addVacancyForm.inputSection}>
                    <label className={addVacancyForm.label}>Требования необязательные</label>
                    <TextField
                    className={addVacancyForm.multiLineInput}
                    id="outlined-multiline-static"
                    multiline
                    rows={3}
                    />
                </div>
                <div className={addVacancyForm.inputSection}>
                    <label className={addVacancyForm.label}>Этапы отбора</label>
                    <TextField
                    className={addVacancyForm.multiLineInput}
                    id="outlined-multiline-static"
                    multiline
                    rows={3}
                    />
                </div>
                </div>


            </fieldset>}
            <div className={addVacancyForm.buttonWrapper}>
                <SubmitButton isFullWidth={true} text="Сохранить" isDisabled={true}/>
            </div>
        </fieldset>
    </form>
  );
};

export default AddVacancyForm;
