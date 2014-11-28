
Feature: Filtering recipe votes
  As a Chef
  I want to have data about my recipes
  So that I know what my clients enjoy the most

  Scenario: Reading logfile
    Given I have a logfile called "testlog.txt"
    When I open it
    Then I should see the content of the file

  Scenario: Process logfile
    Given I have data from that file
    Then I should see the array of recipe data