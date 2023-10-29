import tooltip from "./index.module.css";
import CustomTooltip from "../tooltip";
import { awardsList } from "../../../../../constants/awardsList";
import { TAwardsProps } from "../../../../../utils/types";

const AwardsTooltip = ({
  isWinner,
  more10Responses,
}: TAwardsProps): JSX.Element => {
  return (
    <>
      {isWinner && (
        <CustomTooltip
          title={awardsList.winner.title}
          placement="top"
          // TransitionComponent={Zoom}
          color="secondary"
          arrow
        >
          <div className={tooltip.awards}>{awardsList.winner.emoji}</div>
        </CustomTooltip>
      )}
      {more10Responses && (
        <CustomTooltip
          title={awardsList.more10Responses.title}
          placement="top"
          // TransitionComponent={Zoom}
          color="secondary"
          arrow
        >
          <div className={tooltip.awards}>
            {awardsList.more10Responses.emoji}
          </div>
        </CustomTooltip>
      )}
    </>
  );
};

export default AwardsTooltip;
