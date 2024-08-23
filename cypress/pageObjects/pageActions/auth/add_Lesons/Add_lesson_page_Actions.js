import student_list_selectors from "../../../pageElements/auth/add_Student/Student_list_selectors.js";
import "cypress-file-upload";

class Add_lesson_page_Actions {
  Add_lesson() {
    cy.viewport(1920, 1080);
    cy.get(student_list_selectors.Professor_tobe_selectors, { timeout: 4000 }).should("be.visible").click(); // Professor_is_selected
    cy.get(student_list_selectors.Professor_is_selected, { timeout: 4000 })
      .should("be.visible")
      .click(); // Lesson_tobe_Added
    cy.wait(5000);
    cy.get(student_list_selectors.Lesson_tobe_Added, { timeout: 4000 }).should("be.visible").click(); // New_Lesson_select

    cy.wait(3000);

    cy.get(student_list_selectors.New_Lesson_select, { timeout: 7000 }).should("be.visible").click(); // Cours_Selector

    cy.get(student_list_selectors.Cours_Selector, { timeout: 4000 }).should("be.visible").click(); // Title_is_added
    cy.get(student_list_selectors.Title_is_added, { timeout: 4000 }).type("First_Lesson ( Day 1) ");
   
    cy.wait(3000);

    cy.get(student_list_selectors.resume_selector, { timeout: 4000 }).should("be.visible").type("First day of this course");

    //cy.get('#my-courses-container').click();
    // The next line is added to avoid the Prbl of deleting the previous sent text ....
    cy.wait(5000);

    cy.get(".skills-form-professor > :nth-child(2) > .MuiFormControl-root > .jss16 > .MuiInputBase-root", { timeout: 4000 }).type("Test");

    // Test

    //this.ImportPhoto("Capture_test_lesson.PNG");

    cy.wait(5000);

    // Test

    //cy.get(".bg-with-border > .btn-Secondary").attachFile( 'Capture_test_lesson.PNG', {force : true} );   // button.btn-Secondary.large.mt-3
    //cy.get('input[type="file"]').selectFile('D:/Bureau/Capture_test_lesson.PNG');
    // cy.get('.bg-with-border input[type="file"]').selectFile('D:/Bureau/Koors_auto_Cypress/cypress/fixtures/Capture_test_lesson.PNG');
    //cy.get('.bg-with-border > .btn-Secondary').selectFile('D:/Bureau/Koors_auto_Cypress/cypress/fixtures/Capture_test_lesson.PNG', { force: true });
    // LOcalisation de Click

    cy.contains("button", "SÉLECTIONNER UNE PHOTO").click();
    // const Photo
    const fileName = "Capture_test_lesson.PNG";
    // Use input
    cy.get('input[type="file"]').attachFile(fileName);

    //  Content creation for the Lesson ...

    cy.get(":nth-child(2) > .nav-btn-black", { timeout: 4000 }).should("be.visible").click();

    cy.get(".me-3", { timeout: 4000 }).should("be.visible").click();

    cy.get("#title", { timeout: 4000 }).clear().type("chaptre 1 ( day 2 ) ");

    cy.get(".ql-editor > p", { timeout: 4000 }).type("this chaptre is about basics of testing ");

    cy.wait(4000);

    cy.get(
      ':nth-child(3) > .mx-auto > [aria-disabled="false"] > .bg-with-border',
      { timeout: 4000 }
    ).attachFile("template-fr.4a29aaae.xlsx");
    cy.get(
      ':nth-child(1) > .mx-auto > [aria-disabled="false"] > .bg-with-border > .d-flex > :nth-child(2)',
      { timeout: 4000 }
    ).click();

    // An introductory vedio is added for the Lesson X
    cy.wait(4000);
    cy.get(".form-control", { timeout: 4000 }).type(
      "https://www.youtube.com/watch?v=vUg8FEYFilU&list=RDvUg8FEYFilU&index=1"
    );
    cy.get(".btn-Primary", { timeout: 4000 }).click();
    cy.get(":nth-child(2) > .body-md", { timeout: 4000 })
      .should("be.visible")
      .click();

    cy.wait(3000);

    // adding a knowledge questions for the lesson ...

    cy.get("[style='display: flex; align-items: center;']", {
      timeout: 4000,
    }).click();
    cy.get(".me-3 > label", { timeout: 4000 }).click();
    cy.get(
      '[style="padding-top: 45px; padding-bottom: 50px; align-items: center;"] > .btn-Primary',
      { timeout: 4000 }
    ).click();
    cy.get(".btn-Primary", { timeout: 4000 }).click();

    cy.wait(4000);

    cy.get("#textAreaquestionText0", { timeout: 4000 }).type(
      "Haw to execute testing functions in the Sam time ? "
    );
    cy.get("#textAreaResponse00", { timeout: 4000 }).type("use the TestNG ");
    cy.get(
      ':nth-child(2) > .d-flex > [style="margin: 0px;"] > .btn-Secondary',
      { timeout: 4000 }
    ).click();
    cy.get("#textAreaResponse01", { timeout: 4000 }).type(
      " using test.xml for the TestNG "
    );

    cy.get(':nth-child(3) > .d-flex > [style="margin: 0px;"] > .btn-Secondary',{ timeout: 4000 }).click();
    cy.get(".btn-Primary", { timeout: 4000 }).click();
    cy.get(":nth-child(2) > .body-md", { timeout: 4000 }).click();

    cy.wait(2000);

    cy.get(".publish", { timeout: 4000 }).should("be.visible").click();
    cy.get("#textAreacommentPublishProf").type("First Couse");
    cy.get(".row > .d-flex > .btn-Primary").click();
  }

  // Verification function :

  courses_verif() {
  
    cy.wait(2000); 

    const expectedValues = ['Le cours a été envoyé au directeur pour validation.'];
      
      cy.get('.H4-Subtitle')
        .invoke('text')
        .then((text) => {
          // Trim the obtained text
          let trim_Text = text.trim();
      
          // Iterate through the list and compare
          expectedValues.forEach((expectedValue) => {
          // Assert that the trimmed text matches the expected value
            expect(trim_Text).to.equal(expectedValue);
          });
        });
      



    // .should('equal', 'Le cours a été envoyé au directeur pour validation.');
    cy.screenshot('before-click');
    cy.get(".mb-5 > .btn-Primary").click();
    cy.screenshot('after-click');
  }

  /* ImportPhoto(PhotoName) {    // cy.get(".bg-with-border > .btn-Secondary",{timeout:3000}).click();
    cy.get('button.btn-Secondary.large.mt-3').contains('SÉLECTIONNER UNE PHOTO').click();

    // Ensure the file exists in the fixtures folder
        cy.readFile(`cypress/fixtures/${PhotoName}`).should('exist');

    // Attach the file to the "".my-2 > .mt-2 > .mx-auto > [aria-disabled='false'] > .bg-with-border" element
        cy.get(".my-2 > .mt-2 > .mx-auto > [aria-disabled='false'] > .bg-with-border").attachFile(PhotoName);

    // Optionally, wait for any necessary time after attaching the file
        cy.wait(4000);
    }*/
}


export default new Add_lesson_page_Actions();



