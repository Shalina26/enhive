export const renderLoginPage = (request, response) => {
  response.render("auth/login");
};

export const renderRegisterPage = (request, response) => {
  response.render("auth/register");
};
