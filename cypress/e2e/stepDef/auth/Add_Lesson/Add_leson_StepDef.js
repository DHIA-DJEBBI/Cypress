import { Given, When ,Then } from "cypress-cucumber-preprocessor/steps";

import Add_lesson_page_Actions from "../../../../pageObjects/pageActions/auth/add_Lesons/Add_lesson_page_Actions";

When (/^I add the New lesson/,()=>Add_lesson_page_Actions.Add_lesson());

Then (/^I scheck if the Lesson is added or not/,()=> Add_lesson_page_Actions.courses_verif());


















