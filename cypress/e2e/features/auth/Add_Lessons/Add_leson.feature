
Feature: director Login along with Adding a new lesson
    Background:
        Given I am in the director login Page
        When I enter the email 'qa+uptotestG2@koors.io' and the password '123456789SF'

    Scenario: Add new leson for students


        When I add the New lesson
        Then I scheck if the Lesson is added or not 

































