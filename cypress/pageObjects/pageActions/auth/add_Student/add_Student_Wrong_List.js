import student_list_selectors from "../../../pageElements/auth/add_Student/Student_list_selectors.js";

import 'cypress-file-upload';

class add_Student_Wrong_List{

    add_student_Wrong_List(){ 

        cy.viewport(1500,1320);

        cy.get(student_list_selectors.menu_student_Click,{timeout:2000}).should('be.visible').click();

        cy.get(student_list_selectors.Ajouter_un_etudiant_Btn,{timeout:2000}).should('be.visible').click();

        cy.get(student_list_selectors.Importer_une_List_selector,{timeout:2000}).should('be.visible').click();

        cy.get(student_list_selectors.Telecharger_template_selector,{timout:2000}).should('be.visible').click();

        cy.wait(3000);

        cy.get("input[type='file']").selectFile( 'D:/Bureau/template-fr.4a29aaae.docm', {force : true} );

    }



    Verif_Error_File_Type(){

        let error_msg_file = cy.get('.error-input').invoke('text').then ((text)=> { 

            let wrong_file_msg = text;
            
            
            cy.log("the File added is with a wrong extention ( .xlsx/.xls ) : " + wrong_file_msg)} );



        
    }




}
export default new add_Student_Wrong_List() ;










