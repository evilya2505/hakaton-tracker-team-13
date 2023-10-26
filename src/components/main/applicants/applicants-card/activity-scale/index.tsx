import activity from "./index.module.css";
import renderScale from "../../../../../utils/renderActivityScale";
import CustomTooltip from "../tooltip";

interface ActivityScaleProps {
  responses: number;
  completedTestTasks: number;
  interviews: number;
}

const ActivityScale = ({
  responses,
  completedTestTasks,
  interviews,
}: ActivityScaleProps): JSX.Element => {
  let res = renderScale(responses, completedTestTasks, interviews);

  return (
    <div className={activity.scale}>
      <CustomTooltip title="Отклики" placement="top" color="secondary" arrow>
        <div
          className={activity.responses}
          style={{ width: `${res.responses}%` }}
        >
          {!isNaN(res.responses) && res.responses !== 0 ? responses : ""}
        </div>
      </CustomTooltip>
      <CustomTooltip title="Тестовые" placement="top" color="secondary" arrow>
        <div
          className={activity.testing}
          style={{ width: `${res.completedTestTasks}%` }}
        >
          {!isNaN(res.completedTestTasks) && res.completedTestTasks !== 0 ? completedTestTasks : ""}
        </div>
      </CustomTooltip>
      <CustomTooltip
        title="Собеседования"
        placement="top"
        color="secondary"
        arrow
      >
        <div
          className={activity.interview}
          style={{ width: `${res.interviews}%` }}
        >
          {!isNaN(res.interviews) && res.interviews !== 0 ? interviews : ""}
        </div>
      </CustomTooltip>
    </div>
  );
};

export default ActivityScale;
