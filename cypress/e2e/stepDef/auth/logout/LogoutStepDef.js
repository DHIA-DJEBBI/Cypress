import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import Login_Action from "../../../../pageObjects/pageActions/auth/login/login";

import Logout_Actions from "../../../../pageObjects/pageActions/auth/logout/logout_Actions";

Given("I am in the director login Page", () => {
  Login_Action.visitLogin();
});
When(
  "I enter the email {string} and the password {string}",
  (email, password) => {
    Login_Action.set_Acsess_data(email, password);
  }
);

Then("I log out from the Application", () => {
  Logout_Actions.log_out_koors();
});





