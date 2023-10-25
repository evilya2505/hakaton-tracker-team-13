import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import img from "../../../../images/img.jpg";
import applicantsCard from "./index.module.css";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

const BootstrapButton = styled(Button)({
  textTransform: "none",
});

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

interface ApplicantsCardProps {
  name: string;
  awards: string;
  city: string;
  age: string;
  onClick: () => void;
}

const ApplicantsCard = ({
  name,
  awards,
  age,
  city,
  onClick,
}: ApplicantsCardProps): JSX.Element => {
  return (
    <div className={applicantsCard.card} onClick={onClick}>
      <div className={applicantsCard.description}>
        <div className={applicantsCard.info}>
          <img src={img} className={applicantsCard.img} alt="Фото" />
          <div className={applicantsCard.profile}>
            <div className={applicantsCard.applicant}>
              <LightTooltip title="Победитель хакатона" placement="top-start" TransitionComponent={Zoom}>
                <div className={applicantsCard.awards}>{awards}</div>
              </LightTooltip>
              <h4 className={applicantsCard.name}>{name}</h4>
            </div>
            <p className={applicantsCard.tag}>
              {city}, {age}
            </p>
          </div>
        </div>
        <div className={applicantsCard.activity}>
          <div className={applicantsCard.activityResponse}>40</div>
          <div className={applicantsCard.activityTesting}>14</div>
          <div className={applicantsCard.activityInterview}>10</div>
        </div>
        <div className={applicantsCard.education}>
          <div className={applicantsCard.educationItem}>
            <span className={applicantsCard.span}>Курс: </span>Дизайнер
            интерфейсов
          </div>
          <div className={applicantsCard.educationItem}>
            <span className={applicantsCard.span}>Дата окончания: </span>июнь
            2023
          </div>
          <div className={applicantsCard.educationItem}>
            <span className={applicantsCard.span}>Формат работы: </span>
            удаленный
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
