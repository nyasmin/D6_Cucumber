$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "login page",
  "description": "In order to test login page\r\nAs a registered user\r\nI want to specify the login conditions",
  "id": "login-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 20,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 27,
  "name": "Login Page",
  "description": "",
  "id": "login-page;login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User is on SDETTraining.com Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user clicks login button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "login_stepdefination.user_is_on_SDETTraining_com_Home_Page()"
});
formatter.result({
  "duration": 125667681,
  "status": "passed"
});
formatter.match({
  "location": "login_stepdefination.user_clicks_login_button()"
});
formatter.result({
  "duration": 60242,
  "status": "passed"
});
formatter.match({
  "location": "login_stepdefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 53102,
  "status": "passed"
});
});