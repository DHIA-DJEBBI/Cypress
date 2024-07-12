import { Given, When ,Then } from "cypress-cucumber-preprocessor/steps";


import Add_student_List from "../../../../pageObjects/pageActions/auth/add_Student/add_Student_List";

When (/^i add  the List of student to the Data base/,()=>{

    Add_student_List.add_students_ByList()} );   

Then (/^i return to the  sudent data List/,()=> { 

    Add_student_List.verif_invitation() } 

);










