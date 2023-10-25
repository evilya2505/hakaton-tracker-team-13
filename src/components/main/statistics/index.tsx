import page from "../index.module.css";
import statistics from "./index.module.css";

const Statistics: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={`${page.pageElement} ${statistics.container}`}>
      <h2>Статистика</h2>
    </div>
  );
};

export default Statistics;
