Feature: Login to welcometojungle account

Scenario: Login as a inqom candidate to the welcometojungle account

Given I go to the concerned URL
When I fill the valid credentials as "Adresse email" and "Mot de passe"
And I click on the "Se connecter" button
Then I am successfully logged in to the application