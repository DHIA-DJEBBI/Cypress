import selectorsLogin from "../../../pageElements/auth/login/login";
class Login_Action {

    visitLogin(){
        cy.visit("https://app.uat.koors.io/uptotestg22/auth/login");
    }
    set_Acsess_data(email,password){

        cy.get(selectorsLogin.inputEmail).type(email);
        cy.get(selectorsLogin.inputpassworld).type(password);
        cy.get(selectorsLogin.btnLogin).click();

        // if (email) {
        //     cy.get(selectorsLogin.inputEmail).type(email);
        //   }
        //   if (password) {
        //     cy.get(selectorsLogin.inputpassworld).type(password);
        //   }
        //   cy.get(selectorsLogin.btnLogin).click();
        
         }

verif_error_login(errorMsg){

    cy.get(selectorsLogin.error_login_path).should("have.text",errorMsg);


}

    verif_login() {
        cy.url().should("contains","/activity");
    }

}


export default new Login_Action();




