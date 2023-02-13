Feature: Upload a file to the welcometojungle account

Scenario: Upload a profile photo on the settings page

Given I am logged in to the application
When I upload a profile photo on the settings page of the account
Then The profile photo is successfully uploaded