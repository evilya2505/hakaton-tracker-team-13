import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import applicantsCard from "./index.module.css";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { applicant } from "../../../../constants/applicantsList";
import ageRender from "../../../../utils/ageRender";

const BootstrapButton = styled(Button)({
  textTransform: "none",
});

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

interface ApplicantsCardProps {
  applicant: applicant;
  onClick: () => void;
}

const ApplicantsCard = ({
  applicant,
  onClick,
}: ApplicantsCardProps): JSX.Element => {
  return (
    <div className={applicantsCard.card} onClick={onClick}>
      <div className={applicantsCard.description}>
        <div className={applicantsCard.info}>
          <img
            src={applicant.avatar}
            className={applicantsCard.img}
            alt="Фото"
          />
          <div className={applicantsCard.profile}>
            <div className={applicantsCard.applicant}>
              <LightTooltip
                title="Победитель хакатона"
                placement="top-start"
                TransitionComponent={Zoom}
              >
                <div className={applicantsCard.awards}>
                  {applicant.isWinner ? "🏆" : applicant.responses > 9 && "🔥"}
                </div>
              </LightTooltip>
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
        <BootstrapButton className={applicantsCard.hide} variant="outlined">
          Скрыть
        </BootstrapButton>
        <BootstrapButton className={applicantsCard.add} variant="contained">
          Добавить
        </BootstrapButton>
      </div>
    </div>
  );
};

export default ApplicantsCard;
