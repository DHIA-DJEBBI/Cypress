import { Given, When ,Then } from "cypress-cucumber-preprocessor/steps";
import Add_coupon_page_Actions from  "../../../../pageObjects/pageActions/auth/Add_coupon/Add_coupon_PageAtion";


When (/^I add the new copon/, ()=>  Add_coupon_page_Actions.Add_coupon()


);


Then (/^I scheck if it is added or not/,

);


