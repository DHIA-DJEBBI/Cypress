Feature: director Login along with Adding a new student

  Background:
    Given I am in the director login Page
    When I enter the email 'qa+up2testg2@koors.io' and the password 'uptotest2024'
  #Scenario: login with Valid Data
  # When director adds a student with the information Djebbi , Dhia and the email


  Scenario Outline: successful student Add
    When I click to add student by giving '<name>' and the prenom '<prenom>' along with the email '<mail>'
    Then I do the verification of my Add

    Examples:
      | name  | prenom  | mail                     |
      | dhia  | Djebbi  | dhiadjebbi1D2D@gmail.com |
      | Djebi | dorayed | dorayeddjebbi@gmail.com  |










