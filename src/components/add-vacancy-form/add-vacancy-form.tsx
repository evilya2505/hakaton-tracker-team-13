import React from "react";
import addVacancyForm from './add-vacancy-form.module.css';
import { Checkbox, FormControlLabel, MenuItem, TextField } from "@mui/material";

//   Посмотреть нормально ли использовать label
//   Посмотреть есть ли в MUI замена <fieldset>
//   По возможности все стили взять из <MUI></MUI>
//   Перенести все переменные в файл constants
//   Узнать у дизайнеров, можно ли добавить несколько возможных вариантов, 
//   если да, то как это отображается и как отменить выбор
//   Поправить позиционирование чекбокса 
//   Кастомизация (шрифты)
//   Добавить кнопки

const AddVacancyForm: React.FC<{}> = (): JSX.Element => {
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
        <fieldset className={addVacancyForm.fieldset}>
            <div className={addVacancyForm.inputSection}>
                <label className={addVacancyForm.label}>Название вакансии</label>
                <TextField className={addVacancyForm.input} id="outlined-basic" variant="outlined" />
            </div>
            <div className={addVacancyForm.inputSection}>
                <label className={addVacancyForm.label}>Город поиска</label>
                <TextField className={addVacancyForm.input}  id="outlined-basic"  variant="outlined" />  
            </div>
            <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} defaultChecked />} label="Удаленная работа" />
        </fieldset>

        <fieldset className={addVacancyForm.fieldset}>
            <div className={addVacancyForm.inputSection}>
            <label className={addVacancyForm.label}>Опыт работы</label>
            <TextField
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
                    <TextField sx={{width: '320px', marginRight: '12px'}} placeholder="От" id="outlined-basic" variant="outlined" />
                    <TextField sx={{width: '153px'}} placeholder="До" id="outlined-basic" variant="outlined" />
                </fieldset>
            </div>
            <div className={addVacancyForm.inputSection}>
                <label className={addVacancyForm.label}>Валюта</label>
                <TextField
                        sx={{marginTop: '4px'}}
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
    </form>
  );
};

export default AddVacancyForm;
