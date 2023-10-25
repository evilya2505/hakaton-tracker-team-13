import applicants from "./index.module.css";
import ApplicantsCard from "./applicants-card";
import page from "../index.module.css";
import { cardsList } from "../../../constants/cardsList";

interface IApplicantsProps {
  openUserModal: () => void;
}

const Applicants: React.FC<IApplicantsProps> = ({
  openUserModal,
}): JSX.Element => {
  return (
    <div className={`${page.pageElement} ${applicants.container}`}>
      <h2 className={applicants.title}>Соискатели</h2>
      <ul className={applicants.list}>
        {cardsList.map(
          (element: { name: string; city: string; age: string }, index) => {
            return (
              <li key={index} onClick={openUserModal}>
                <ApplicantsCard
                  name={element.name}
                  city={element.city}
                  age={element.age}
                />
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Applicants;
