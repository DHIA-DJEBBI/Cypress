import student_list_selectors from "../../../pageElements/auth/add_Student/Student_list_selectors.js";

import 'cypress-file-upload';



class Add_student_List { 


    add_students_ByList (){

        cy.viewport(1500,1320);

        cy.get(student_list_selectors.menu_student_Click,{timeout:2000}).should('be.visible').click();

        cy.get(student_list_selectors.Ajouter_un_etudiant_Btn,{timeout:2000}).should('be.visible').click();

        cy.get(student_list_selectors.Importer_une_List_selector,{timeout:2000}).should('be.visible').click();

        cy.get(student_list_selectors.Telecharger_template_selector,{timout:2000}).should('be.visible').click();

        cy.wait(3000);

        // Ajout du template ( Import template...)

       /*cy.get('.m-2 > .btn-Secondary',{timout:2000}).click({ force: true }); 
       cy.get('.m-2 > .btn-Secondary',{timout:2000}).click({ force: true }); */


         // cy.get('.m-2 > .btn-Secondary')  // .bg-with-border 

        cy.wait(4000);
 
     
    //  cy.get('.bg-with-border') 

 cy.get("input[type='file']").selectFile( 'D:/Bureau/template-fr.4a29aaae.xlsx', {force : true} );

 // cy.get("input[type='file']").attachFile('template-fr.4a29aaae.xlsx');





  // Autre methode de selection des Elements a partir du path (Path Locl / Path Projet ???!!! )




          
        cy.get(student_list_selectors.Icon_Click,{timout:2000}).should('be.visible').click();

        cy.get(student_list_selectors.Continue_Btn,{timout:2000}).should('be.visible').click(); 

        cy.get(student_list_selectors.Envoyer_les_Invitation_btn,{timout:2000}).should('be.visible').click();

    

    

    }

    verif_invitation(){ 

        cy.get(student_list_selectors.Confirm_Invitation_Sent,{timout:2000}).should('be.visible').click();
        
        cy.wait(3000);
        let invi_msg = cy.get('.H4-Subtitle').invoke('text').then ((text)=> { 
            const trim_Text= text.trim();
            let invi_nbr = parseInt(trim_Text[0]);
            cy.log('Invitation numbers are :  ' + invi_nbr);
         } );

        

        cy.get(student_list_selectors.List_return_to_Base_Data,{timout:2000}).should('be.visible').click();


    }

    


}


export default new  Add_student_List();