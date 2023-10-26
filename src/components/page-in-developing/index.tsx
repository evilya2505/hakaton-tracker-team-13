import pageInDevelop from './index.module.css';
import developIllustration from "../../images/Illustration.svg";

const PageInDevelop: React.FC<{}> = (): JSX.Element => {
  return (
    <div className={pageInDevelop.container}>
      <h2>Страница находится в разработке</h2>
      <img src={developIllustration} alt="Страница в разработке" />
    </div>
  );
};

export default PageInDevelop;
