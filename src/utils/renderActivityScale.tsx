function renderScale(
  responses: number,
  completedTestTasks: number,
  interviews: number
) {
  const sum = responses + completedTestTasks + interviews;
  return {
    responses: Number((responses / sum) * 100),
    completedTestTasks: Number((completedTestTasks / sum) * 100),
    interviews: Number((interviews / sum) * 100),
  };
}

export default renderScale;