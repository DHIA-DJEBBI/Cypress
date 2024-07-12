Feature: director Login with valid and invalid credentials

  Background:
   Given I am in the director login Page


  Scenario: successful director Login
    When I enter the email 'qa+uptotestG2@koors.io' and the password '123456789SF'
    Then I am on Activity Page


# Scenario Outline: director login with invalid credentials
#     Given I am in the director login Page
#     When I enter the email '<email>' and the password '<password>'
#     Then I will be receiving an error message '<errorMsg>'

# Examples:
#       | email                    | password    | errorMsg                                         |
#       | qa+uptotestg2@koors.io   | abc123++    | E-mail ou mot de passe incorrecte                |
#       | qa+uptotestg2@koors.io   |             | E-mail ou mot de passe incorrecte                |
#       |                          | 123456789SF | E-mail ou mot de passe incorrecte                |
#       |                          |             | E-mail ou mot de passe incorrecte                |








