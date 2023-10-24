import { Button } from "@mui/material";
import mainButtons from "./index.module.css";

const MainButtons: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={mainButtons.container}>
      <Button>Настройки</Button>
      <Button>Выход</Button>
    </div>
  );
};

export default MainButtons;
