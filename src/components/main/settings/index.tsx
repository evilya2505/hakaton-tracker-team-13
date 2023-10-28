import PageInDevelop from "../../page-in-developing";
import page from "../index.module.css";
const Settings: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={`${page.pageElement}`}>
      <h2>Настройки</h2>
      <PageInDevelop />
    </div>
  );
};

export default Settings;
