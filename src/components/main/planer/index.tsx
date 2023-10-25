import page from "../index.module.css";
import planer from "./index.module.css";

const Planer: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={`${page.pageElement} ${planer.container}`}>
      <h2>Планер</h2>
    </div>
  );
};

export default Planer;
