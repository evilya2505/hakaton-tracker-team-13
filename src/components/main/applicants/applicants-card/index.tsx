import applicantsCard from "./index.module.css";
import { applicant } from "../../../../constants/applicantsList";
import ageRender from "../../../../utils/ageRender";
import AwardsTooltip from "./awards-tooltip";
import ActivityScale from "./activity-scale";
import { TogglingButton } from "./toggling-button";
import { formatDate } from "../../../../utils/formatDate";
import { useState } from "react";
import { TApplicant } from "../../../../utils/types";
import avatar from '../../../../images/avatar.png';

interface ApplicantsCardProps {
  applicant: TApplicant;
}

const ApplicantsCard = ({ applicant }: ApplicantsCardProps): JSX.Element => {
  // const [isAdded, setIsAdded] = useState(applicant.response_status === 'Кандидат');
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className={applicantsCard.card}>
      <div className={applicantsCard.description}>
        <div className={applicantsCard.info}>
          <img
            src={applicant.avatar_url ? applicant.avatar_url : avatar}
            className={applicantsCard.img}
            alt="Фото"
          />
          <div className={applicantsCard.profile}>
            <div className={applicantsCard.applicant}>
              <AwardsTooltip
                isWinner={applicant.is_winner}
                more10Responses={applicant.response_count > 9}
              />
              <h4 className={applicantsCard.name}>
                {applicant.first_name} {applicant.last_name}
              </h4>
            </div>
            <p className={applicantsCard.tag}>
              {applicant.city}, {ageRender(applicant.age)}
            </p>
          </div>
        </div>
        <ActivityScale
          responses={applicant.response_count}
          completedTestTasks={applicant.test_task_count}
          interviews={applicant.interview_count}
        />
        <ul className={applicantsCard.infoList}>
          <li className={applicantsCard.infoItem}>
            <span className={applicantsCard.span}>Курс: </span>
            {applicant.course}
          </li>
          <li className={applicantsCard.infoItem}>
            <span className={applicantsCard.span}>Дата окончания: </span>
            {formatDate(applicant.graduation_date)}
          </li>
          <li className={applicantsCard.infoItem}>
            <span className={applicantsCard.span}>Формат работы: </span>
            {applicant.work_format}
          </li>
        </ul>
      </div>
      {/* <CustomButton
        className={applicantsCard.add}
        variant="contained"
        onClick={handleAdd}
      >
        Добавить
      </CustomButton> */}
      <TogglingButton isAdded={isAdded} setIsAdded={setIsAdded}/>
    </div>
  );
};

export default ApplicantsCard;
