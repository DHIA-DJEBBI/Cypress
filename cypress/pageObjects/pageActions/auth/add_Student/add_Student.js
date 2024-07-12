import student_selectors from "../../../pageElements/auth/add_Student/student_selectors";


class Add_Student {


        
    enter_data(nom,prenom){

        cy.viewport(1500,1320);


        const mail = random_Email();

        cy.wait(4000);
        cy.get(student_selectors.Incon_Student_preselect,{timeout:2000}).should('be.visible').click(); 

        cy.get(student_selectors.etudiants_selector).should('be.visible').click();
        cy.wait(4000); // Click Add etudiant 

        //  cy.get(student_selectors.add_Student_Selector).should('be.visible').click(); 
        
        cy.get(student_selectors.enter_Name_Selector).should('be.visible').type(nom);
        cy.get(student_selectors.enter_Username_Selector).should('be.visible').type(prenom);
        cy.get(student_selectors.enter_Email_data).should('be.visible').type(mail);
        cy.get(student_selectors.Etudiant_Click).should('be.visible').click();
        cy.get(student_selectors.email_existing_verif).should('be.visible').click();



     }
     enter_data_1 ( nom, prenom , mail ){ 
      cy.viewport(1500,1320);
      cy.wait(4000);

      cy.get(student_selectors.Incon_Student_preselect,{timeout:2000}).should('be.visible').click(); 

      cy.get(student_selectors.etudiants_selector).should('be.visible').click();
      cy.wait(4000); // Click Add etudiant 

      //  cy.get(student_selectors.add_Student_Selector).should('be.visible').click(); 
      
      cy.get(student_selectors.enter_Name_Selector).should('be.visible').type(nom);
      cy.get(student_selectors.enter_Username_Selector).should('be.visible').type(prenom);
      cy.get(student_selectors.enter_Email_data).should('be.visible').type(mail);

// Add student click in the Valid status ...

    // cy.get(student_selectors.Etudiant_Click).should('be.visible').click();



     }


    student_Verif() {

        //let error_msg =  cy.get( student_selectors.email_status).text();

        let error_msg = cy.get(student_selectors.email_status).invoke("text")
        .then(text => {
            error_msg = text;
          switch (error_msg) {
            case "L'email est invalide" :
              cy.log("L'email tapper est invalide");  // Try it by Assert Equal ( Should ) 
              break;
            case "L'email":
              cy.log("Correct the email");
              break;
            default:

             // Do nothing

             break;
          }
        })
      

}
}



function getRandomChar(charSet) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
  }

function random_Email (){
    let charSet = "znefcaopkdfvqimu_czovjpdcq";

    let random_data = "";

    for (let i = 0; i < 8; i++) {
        random_data += getRandomChar(charSet);
    }

    return ( "qa+"+random_data+"@koors.io")
    

}



export default new  Add_Student();




