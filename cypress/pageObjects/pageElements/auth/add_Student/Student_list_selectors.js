




const  student_list_Selectors = { 

    menu_student_Click : "#step-Etudiants-navbar_director",
    Ajouter_un_etudiant_Btn : ".btn-Primary.large.icon-left",
    Importer_une_List_selector :":nth-child(1) > .row > .w-100 > .unselected",     //".btn-Tabs unselected me-3 d-flex align-items-center"
    Telecharger_template_selector :".btn-text",
    Icon_Click:"label",                                                     // cy.get('label')
    Continue_Btn :".w-100 > .btn-Primary",                                 // .w-100 > .btn-Primary
    Envoyer_les_Invitation_btn : ".mx-4 > .btn-Primary",                   // cy.get('.mx-4 > .btn-Primary')
    Confirm_Invitation_Sent :".col-md-12 > .btn-Primary",                // cy.get('.col-md-12 > .btn-Primary')
    List_return_to_Base_Data:".mb-5 > .btn-Primary",                    // cy.get('.mb-5 > .btn-Primary')



}

export default student_list_Selectors ;







