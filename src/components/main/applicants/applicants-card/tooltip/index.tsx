import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const AwardsTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--main-blue-bg)",
    color: "var(--main-black-900)",
    maxWidth: 169,
    weight: 400,
    fontSize: 11,
    paddingTop: 12,
    paddingBottom: 12,
  },
}));

export default AwardsTooltip;