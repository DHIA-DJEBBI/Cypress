

class Add_coupon_page_Actions { 

   Add_coupon(){ 
    cy.viewport(1920, 1080);
    cy.get('#step-Coupons-navbar_director',{timeout:3000}).click(); 
    cy.get('.mb-3 > .btn-Primary').click(); 
    cy.get('.btn-Secondary',{timeout:3000}).click(); 
    cy.get(':nth-child(1) > label',{timeout:3000}).click();
    cy.get('#promo-value',{timeout:3000}).type("200"); // Reduction du coupon est non limité...( ne doit pas depasser 100 % / 2 chiffre max ... ).
    
    
    cy.get('#grouped-select',{timeout:3000}).click();
    cy.get('.MuiList-root > .d-flex',{timeout:3000}).click(); // Choice of the lesson takes too much time AND/OR the link to the data Base is not performed...
    
    // MOve the Mose to do the click and avoid the Wait for the lesson to be visible... 

    cy.get('.container-fluid > :nth-child(1)').trigger('mouseover', { force: true }).click({ force: true });

    // to check the element 

    cy.get('.container-fluid > :nth-child(1)').click({ force: true });

    cy.wait(5000); 

    cy.get('.me-3 > .form-control',{timeout:3000}).type("2024-02-07"); // The format provided by the Template is not the one required for the element...
    
    cy.get('.select-input > .form-control',{timeout:3000}).type("01:00:33"); //Format mentionned in the front End is not the one required by the Database ( HH:MM:SS not HH:MM AM)
    
    cy.get('.mt-4 > label',{timeout:3000}).should("be.visible").click();
    
    cy.get(':nth-child(4) > .flex-row > .me-3 > .form-control',{timeout:3000}).type("2024-01-07"); //Date de fin doit etre par obligation apres date de creation de coupon !!! 
    cy.get(':nth-child(4) > .flex-row > :nth-child(2) > .select-input > .form-control',{timeout:3000}).type("01:00:20");
    
    cy.get('.publish > span').click(); 


   } 










}

export default new  Add_coupon_page_Actions();


