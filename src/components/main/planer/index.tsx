import page from "../index.module.css";
import planer from "./index.module.css";
import PageInDevelop from "../../page-in-developing";

const Planer: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={`${page.pageElement} ${planer.container}`}>
      <h2>Планер</h2>
      <PageInDevelop />
    </div>
  );
};

export default Planer;
