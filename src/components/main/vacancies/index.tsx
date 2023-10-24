import { Container } from "@mui/material";
import vacancies from "./index.module.css";

const Vacancies: React.FC<{}> = (): JSX.Element => {
  return (
    <Container className={vacancies.container}>
      <h2>Вакансии</h2>
    </Container>
  );
};

export default Vacancies;
