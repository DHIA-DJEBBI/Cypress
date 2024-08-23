
Feature: director Login along with Adding a new lesson
    Background:
        Given I am in the director login Page
        When I enter the email 'qa+up2testg2@koors.io' and the password 'uptotest2024'

    Scenario: Add new leson for students


        When I add the New lesson
        Then I scheck if the Lesson is added or not 

































