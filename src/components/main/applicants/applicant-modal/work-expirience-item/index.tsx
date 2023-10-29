import workExpItem from "./index.module.css";
import { TWorkExp } from "../../../../../utils/types";
import { formatDate } from "../../../../../utils/formatDate";

interface WorkExpProps {
  workExp: TWorkExp;
}

const WorkExpItem = ({ workExp }: WorkExpProps): JSX.Element => {
  return (
    <li className={workExpItem.experienceItem}>
      <div className={workExpItem.experienceTime}>
        <p>
          {formatDate(workExp.date_start)} –<br />
          {formatDate(workExp.date_end)}
        </p>
        <p className={workExpItem.duration}>1 год</p>
      </div>
      <div className={workExpItem.experienceDescription}>
        <p className={workExpItem.subtitle}>{workExp.company}</p>
        <p className={workExpItem.subtitle}>{workExp.title}</p>
        <p className={workExpItem.subtitle}>Обязанности:</p>
        <p>{workExp.description}</p>
      </div>
    </li>
  );
};

export default WorkExpItem;
