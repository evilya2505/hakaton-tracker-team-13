import applicants from "./index.module.css";
import ApplicantsCard from "./applicants-card";
import { useEffect } from "react";

const Applicants: React.FC<{}> = (): JSX.Element => {
  // type applicantsCardList = {

  // };

  // export type LoginFormValues = {
  //   email: string;
  //   password: string;
  // };

  // useEffect(() => {
  //   for (let index = 0; index < 12; index++) {
  //     applicantsCardList.append(<ApplicantsCard />);
  //   }
  //   console.log(applicantsCardList);
  // }, []);

  return (
    <div className={applicants.container}>
      <h2 className={applicants.title}>Соискатели</h2>
      <ul className={applicants.list}>
        <li>
          <ApplicantsCard />
        </li>
        <li>
          <ApplicantsCard />
        </li>
        <li>
          <ApplicantsCard />
        </li>
        <li>
          <ApplicantsCard />
        </li>
        <li>
          <ApplicantsCard />
        </li>
        <li>
          <ApplicantsCard />
        </li>
        <li>
          <ApplicantsCard />
        </li>
        <li>
          <ApplicantsCard />
        </li>
      </ul>
    </div>
  );
};

export default Applicants;
