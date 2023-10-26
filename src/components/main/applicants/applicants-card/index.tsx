import applicantsCard from "./index.module.css";
import { applicant } from "../../../../constants/applicantsList";
import ageRender from "../../../../utils/ageRender";
import { SyntheticEvent } from "react";
import Zoom from "@mui/material/Zoom";
import AwardsTooltip from "./tooltip"
import CustomButton from "./button"

interface ApplicantsCardProps {
  applicant: applicant;
}

const ApplicantsCard = ({ applicant }: ApplicantsCardProps): JSX.Element => {
  function handleHide(e: SyntheticEvent) {
    e.stopPropagation();
  }

  function handleAdd(e: SyntheticEvent) {
    e.stopPropagation();
  }
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
              {(applicant.isWinner || applicant.responses > 9) && (
                <AwardsTooltip
                  title="Победитель хакатона"
                  placement="top"
                  // TransitionComponent={Zoom}
                  color="secondary"
                  arrow
                >
                  <div className={applicantsCard.awards}>
                    {applicant.isWinner
                      ? "🏆"
                      : "🔥"}
                  </div>
                </AwardsTooltip>
              )}
              <h4 className={applicantsCard.name}>
                {applicant.firstName} {applicant.lastName}
              </h4>
            </div>
            <p className={applicantsCard.tag}>
              {applicant.city}, {ageRender(applicant.age)}
            </p>
          </div>
        </div>
        <div className={applicantsCard.activity}>
          <div className={applicantsCard.activityResponse}>
            {applicant.responses}
          </div>
          <div className={applicantsCard.activityTesting}>
            {applicant.completedTestTasks}
          </div>
          <div className={applicantsCard.activityInterview}>
            {applicant.interviews}
          </div>
        </div>
        <div className={applicantsCard.education}>
          <div className={applicantsCard.educationItem}>
            <span className={applicantsCard.span}>Курс: </span>
            {applicant.course}
          </div>
          <div className={applicantsCard.educationItem}>
            <span className={applicantsCard.span}>Дата окончания: </span>
            {applicant.graduationDate}
          </div>
          <div className={applicantsCard.educationItem}>
            <span className={applicantsCard.span}>Формат работы: </span>
            {applicant.workFormat}
          </div>
        </div>
      </div>
      <div className={applicantsCard.buttons}>
        <CustomButton
          className={applicantsCard.hide}
          variant="outlined"
          onClick={handleHide}
        >
          Скрыть
        </CustomButton>
        <CustomButton
          className={applicantsCard.add}
          variant="contained"
          onClick={handleAdd}
        >
          Добавить
        </CustomButton>
      </div>
    </div>
  );
};

export default ApplicantsCard;
