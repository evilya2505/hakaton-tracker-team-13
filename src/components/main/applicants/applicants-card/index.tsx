import applicantsCard from "./index.module.css";
import { applicant } from "../../../../constants/applicantsList";
import ageRender from "../../../../utils/ageRender";
import AwardsTooltip from "./awards-tooltip";
import ActivityScale from "./activity-scale";
import { TogglingButton } from "./toggling-button";
import { formatDate } from "../../../../utils/formatDate";
import { useState } from "react";

interface ApplicantsCardProps {
  applicant: applicant;
}

const ApplicantsCard = ({ applicant }: ApplicantsCardProps): JSX.Element => {
  const [isAdded, setIsAdded] = useState(applicant.responseStatus === 'Кандидат');

  return (
    <div className={applicantsCard.card}>
      <div className={applicantsCard.description}>
        <div className={applicantsCard.info}>
          <img
            src={applicant.avatar}
            className={applicantsCard.img}
            alt="Фото"
          />
          <div className={applicantsCard.profile}>
            <div className={applicantsCard.applicant}>
              <AwardsTooltip
                isWinner={applicant.isWinner}
                more10Responses={applicant.responses > 9}
              />
              <h4 className={applicantsCard.name}>
                {applicant.firstName} {applicant.lastName}
              </h4>
            </div>
            <p className={applicantsCard.tag}>
              {applicant.city}, {ageRender(applicant.age)}
            </p>
          </div>
        </div>
        <ActivityScale
          responses={applicant.responses}
          completedTestTasks={applicant.completedTestTasks}
          interviews={applicant.interviews}
        />
        <ul className={applicantsCard.infoList}>
          <li className={applicantsCard.infoItem}>
            <span className={applicantsCard.span}>Курс: </span>
            {applicant.course}
          </li>
          <li className={applicantsCard.infoItem}>
            <span className={applicantsCard.span}>Дата окончания: </span>
            {formatDate(applicant.graduationDate)}
          </li>
          <li className={applicantsCard.infoItem}>
            <span className={applicantsCard.span}>Формат работы: </span>
            {applicant.workFormat}
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
