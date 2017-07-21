package com.fanniemae.stepdefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class login_stepdefination {

	@Given("^User is on SDETTraining\\.com Home Page$")
	public void user_is_on_SDETTraining_com_Home_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
		System.out.println("Code to implement Given");
		
	}

	@When("^user clicks login button$")
	public void user_clicks_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		System.out.println("Code to implement When");
	}

	@Then("^user is on login page$")
	public void user_is_on_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		System.out.println("Code to implement Then");
	}

	
	
}
