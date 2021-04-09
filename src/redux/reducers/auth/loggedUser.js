export const loggedUser = (user = null, action) => {
  switch (action.type) {
    case "LOGGED_USER":
      return action.payload;
    default:
      return user;
  }
};
