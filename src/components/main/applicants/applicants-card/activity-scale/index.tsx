import activity from "./index.module.css";

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
  return (
    <div className={activity.scale}>
      <div className={activity.responses}>{responses}</div>
      <div className={activity.testing}>{completedTestTasks}</div>
      <div className={activity.interview}>{interviews}</div>
    </div>
  );
};

export default ActivityScale;
