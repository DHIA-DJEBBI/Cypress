Feature: director Login along with Adding a new student
  Background:
    Given I am in the director login Page
    When I enter the email 'qa+up2testg2@koors.io' and the password 'uptotest2024'

  Scenario: Add students by List
  When i add  the List of student to the Data base
  Then i return to the  sudent data List


  
  










