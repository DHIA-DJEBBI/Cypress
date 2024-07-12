import { Given, Then } from "cypress-cucumber-preprocessor/steps";

import Login_Action from "../../../../pageObjects/pageActions/auth/login/login";

Given("I am in the director login Page", () => {
  Login_Action.visitLogin();
});
When(
  "I enter the email {string} and the password {string}",
  (email, password) => {
    Login_Action.set_Acsess_data(email, password);
  }
);
Then("I am on Activity Page", () => {
  Login_Action.verif_login();
});
Then("I will be receiving an error message {string}", (errorMsg) => {
  Login_Action.verif_error_login(errorMsg);
});
