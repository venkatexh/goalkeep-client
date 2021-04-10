export const loggedUser = (user = null, action) => {
  switch (action.type) {
    case "LOGIN":
      sessionStorage.setItem("loggedUser", JSON.stringify(action.payload));
      return JSON.parse(sessionStorage.getItem("loggedUser"));
    default:
      return user;
  }
};
