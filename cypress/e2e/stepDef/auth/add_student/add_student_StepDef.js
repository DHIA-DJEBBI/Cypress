import { Given, When ,Then } from "cypress-cucumber-preprocessor/steps";

import Add_Student from "../../../../pageObjects/pageActions/auth/add_Student/add_Student";



When (/^director adds a student with the information (.*) , (.*) and the email/,(name,prenom)=>{

  Add_Student.enter_data(name,prenom)} );


When (/^I click to add student by giving (.*) and the (.*) along with the (.*)/,
(name,prenom,mail)=>Add_Student.enter_data_1(name,prenom,mail));

Then (/^I do the verification of my Add/,()=>Add_Student.student_Verif());










