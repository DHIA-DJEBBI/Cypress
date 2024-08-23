
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am logged in as Director', () => {
    // Ensure user is logged in
    cy.visit('https://app.uat.koors.io/uptotestg22/auth/login');
    cy.viewport(1920,1080);
    cy.get('#email').type('qa+up2testg2@koors.io');
    cy.get('#password').type('uptotest2024');
    cy.get('#btn-cnx').click();
    cy.get('#step-change-role_director').click();
    cy.get('#go-to-prof-role').click();
});

When ('I am on Activity page', () => {

cy.url().should('include', '/activity');
cy.wait(2000);
cy.get('#step-change-role_director').click();
cy.wait(2000);
cy.contains('span', 'Mon compte').should('be.visible').click();
cy.wait(5000);
cy.contains('.H3-Headline' ,"Profil",{timeout:10000}).should('be.visible');
});

And ('I Edit my informations', () => {
    cy.contains('.btn-text', "Modifier mon profil").click();
    cy.wait(2000);
    cy.get(':nth-child(1) > div[style=""] > .form-control').clear().type('Dhia');
    cy.get(':nth-child(2) > div[style=""] > .form-control').clear().type('Djebbi');
    cy.get(':nth-child(1) > :nth-child(2) > .form-control',{timeout:3000}).click();

    cy.get(':nth-child(1) > :nth-child(2) > .form-control',{timeout:3000}).type('1800-10-04'); // Probleme logique de date de naissance...*
    cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > #demo-customized-select',{timeout:3000}).click();
    cy.get('li[data-value="Ingénieur"]',{timeout:3000}).click();
    
    cy.get(':nth-child(2) > :nth-child(2) > .form-control').clear().type("Beja");	
    cy.get('[for="homme"]').click();
    // Supprimer la photo 

    cy.get('[style="padding-top: 16px;"] > .btn-text').click(); // there is the case of chaging the Photo and the Other case of deleting and then Adding a Photo ... 
    cy.get('[style="padding-top: 42px;"] > .btn-Secondary').click(); 
    cy.get('.d-flex.mx-auto > .btn-Primary').click();
    // const Photo 
    const fileName = "Capture_test_lesson.PNG";
    // Use input 
    cy.wait(6000);
    cy.get('input[type="file"]').attachFile(fileName);

    cy.wait(6000);

    cy.get('[style="padding-bottom: 56px;"] > .btn-Primary',{timeout:4000}).click();


});

Then ('i should save screenshot',()=> { 

    
cy.screenshot('before-click');
cy.get('.justify-content-end > .btn-Primary').click();
cy.screenshot('after-click');

    //cy.get('.justify-content-end > .btn-Primary').click();

});















