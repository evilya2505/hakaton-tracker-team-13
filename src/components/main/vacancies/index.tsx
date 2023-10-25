import vacancies from "./index.module.css";
import page from "../index.module.css";

const Vacancies: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={`${page.pageElement} ${vacancies.container}`}>
      <h2>Мои вакансии</h2>
    </div>
  );
};

export default Vacancies;
