export const allGoals = (goals = [], action) => {
  switch (action.type) {
    case "ALL_GOALS":
      return action.payload;
    default:
      return goals;
  }
};
