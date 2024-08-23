Feature: director Login along with Adding a new student by a wrong List
  Background:
    Given I am in the director login Page
    When I enter the email 'qa+up2testg2@koors.io' and the password 'uptotest2024'

  Scenario: Add a wrong File
  When i add the list with another extention 
  Then an error  about file Type should apear 
  





