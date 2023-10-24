import main from './index.module.css';
import Navigation from "./main-navigation";

const Main: React.FC<{}> = (): JSX.Element => {
  return (
    <main className={main.page}>
      <Navigation />
    </main>
  );
};

export default Main;
