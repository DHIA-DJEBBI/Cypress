import selectorsLogin from "../../../pageElements/auth/login/login";

class Logout_Actions {

log_out_koors(){
    //Login_Action.visitLogin();
    //cy.viewport(55, 75);
    cy.scrollTo(100, 1069);
    



    cy.get(selectorsLogin.log_Out_XPATH).click();
    cy.get(selectorsLogin.log_out_selector).click();

}


}
export default new Logout_Actions();
