import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { And } from "cypress-cucumber-preprocessor/steps";

Given ('I am in the KOORS APP',()=> { 
    cy.visit('https://app.uat.koors.io/uptotestg22/auth/login');
cy.viewport(1920,1080);
cy.get('#email').type('qa+up2testg2@koors.io');
cy.get('#password').type('uptotest2024');
cy.get('#btn-cnx').click();

});


When ('I am in the main Page',()=> {

    cy.get('#step-TitleFormations-navbar_director', { timeout: 3000 }).should('have.text', 'Formations');


}) ;
And ('I create a new member as Administrateur',()=> { 
    cy.get('#step-team-navbar_director',{timeout:3000}).click();
    cy.get('[style="margin-left: 5px;"] > .btn-Primary',{timeout:3000}).click(); 

    cy.get('[for="anyLevel"]',{timeout:6000}).click();

    cy.get(':nth-child(3) > .form-control',{timeout:3000}).type(generateRandomEmail());
    
    // Maybe a prb =>  the Accepted Mail is in format ( xxxxxxx.com )


    function generateRandomEmail() {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let email = '';
        
        // Generate a random username with a length between 6 and 12 characters
        const usernameLength = Math.floor(Math.random() * 7) + 6;  // Math.random() generate a random number between 0 and 1 , max value is 14 ...  
        for (let i = 0; i < usernameLength; i++) {
            email += characters.charAt(Math.floor(Math.random() * characters.length)); // characters.length gives a value between 0 and 12 ,Math.random() gives a value between 0 and 1 , Math.floor => Arrondis de valeur ( nearest Value )  
        }
        
        // Append the Gmail domain...

        email += '@gmail.com';
        
        return email;
    }


    cy.get('.flex-column > .d-flex > .btn-Primary',{timeout:3000}).should('be.visible').click();

    

}) ;

Then ('I should get the message of Administrateur creation',()=> { 
    
    
    cy.wait(4000);
    
    let msg_creation;

cy.get('.H4-Subtitle',{timeout:4000}).invoke('text').then((text) => {
    msg_creation = text.trim();
    cy.log(msg_creation);    // Administrator member is created ...    
  });


  cy.get('.mb-5 > .btn-Primary',{timeout:4000}).click(); 

  
let administrator_Text ;
cy.get('.px-2 > :nth-child(3)')
  .invoke('text')
  .then((text) => {
    administrator_Text = text.split("(")[1].split(")")[0].trim();

    cy.log('team members defined as Administrator are '+ administrator_Text);       
  });


});








