const student_selectors =  { 
    Incon_Student_preselect : "#step-Etudiants-navbar_director",
    etudiants_selector : ".btn-Primary.large.icon-left",

    add_Student_Selector : ".flex-end > .btn-Primary",
    enter_Name_Selector :":nth-child(1) > .form-control",
    enter_Username_Selector :".mt-4 > :nth-child(2) > .form-control",
    enter_Email_data :":nth-child(3) > .form-control",
    Etudiant_Click :".mt-4 > .d-flex > .btn-Primary",



    email_status :".mt-4 > :nth-child(3) > span", // cy.get('.mt-4 > :nth-child(3) > span')


    email_existing_verif:".mb-5 > .btn-Primary",
    status_student:".text-end",
    

}

export default  student_selectors; 