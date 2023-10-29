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
          {formatDate(workExp.workStart)} –<br />
          {formatDate(workExp.workEnd)}
        </p>
        <p className={workExpItem.duration}>1 год</p>
      </div>
      <div className={workExpItem.experienceDescription}>
        <p className={workExpItem.subtitle}>{workExp.companyName}</p>
        <p className={workExpItem.subtitle}>{workExp.position}</p>
        <p className={workExpItem.subtitle}>Обязанности:</p>
        <p>{workExp.resp}</p>
      </div>
    </li>
  );
};

export default WorkExpItem;
