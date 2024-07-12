import { Given, When ,Then } from "cypress-cucumber-preprocessor/steps";

import add_Student_Wrong_List from "../../../../pageObjects/pageActions/auth/add_Student/add_Student_Wrong_List";

When(/^i add the list with another extention/, () => {
  add_Student_Wrong_List.add_student_Wrong_List();
});

Then(/^an error  about file Type should apear/, () => {
  add_Student_Wrong_List.Verif_Error_File_Type();
});



