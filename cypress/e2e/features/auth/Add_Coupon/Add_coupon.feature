Feature: Add coupon for Koors
    Background:
        Given I am in the director login Page
        When I enter the email 'qa+up2testg2@koors.io' and the password 'uptotest2024'

    Scenario: Add a new copon  


        When I add the new copon 
        Then I scheck if it is added or not 


















