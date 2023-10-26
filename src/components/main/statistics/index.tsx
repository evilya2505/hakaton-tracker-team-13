import page from "../index.module.css";
import statistics from "./index.module.css";
import PageInDevelop from "../../page-in-developing";

const Statistics: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={`${page.pageElement} ${statistics.container}`}>
      <h2>Статистика</h2>
      <PageInDevelop />
    </div>
  );
};

export default Statistics;
