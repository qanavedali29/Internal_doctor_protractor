describe("Internal Doctor POC",function()
{
	var driverTestCase;
	var loginHelper;
	var dashboardHelper;
	var applicationProperties;
	
	var Login = constructor()
	{
		driverTestCase = require('../Util/DriverTestCase.js');
		loginHelper = require('../PageHelper/LoginHelper.js');
		dashboardHelper = require('../PageHelper/DashboardHelper.js');
		applicationProperties = require('../ApplicationProperties/ApplicationProperties.js');
		driverTestCase.setUp();
	};

	it('Valid User Login',function()
	{
		loginHelper.validPage();
		console.log("\n\nExecuting Verify User Login Testcase :\n\nUser is at Login page");

		loginHelper.enterUserName(applicationProperties.validUserName);
		console.log("User is able to enter valid username");

		loginHelper.enterPassword(applicationProperties.validPassword);
		console.log("User is able to enter valid password");

		loginHelper.clickOnLoginButton();
		console.log("User is able to click on login button");

		dashboardHelper.validPage();
		console.log("User is at Dashboard page");

		dashboardHelper.mouseHoverOnProfile();
		console.log("User is able to hover mouse on the profile icon");

		dashboardHelper.clickOnLogout();
		console.log("User is able to click on logout");

		loginHelper.validPage();
		console.log("User is at Login page");
	});

	it('Invalid User Login: Valid Email Address & invalid Password',function()
	{
		loginHelper.validPage();
		console.log("\n\nExecuting Invalid User Login: Valid Email Address & invalid Password Testcase :\n\nUser is at Login page");

		loginHelper.enterUserName(applicationProperties.validUserName);
		console.log("User is able to enter valid username");

		loginHelper.enterPassword(applicationProperties.inValidPassword);
		console.log("User is able to enter valid password");

		loginHelper.clickOnLoginButton();
		console.log("User is able to click on login button");

		loginHelper.verifyErrorMessage('The email address or the password you inputted is incorrect.');
		console.log("User is able to get an error message");

		loginHelper.validPage();
		console.log("User is at Login page");
	});

	it('Invalid User Login: Invalid Email Address & valid Password',function()
	{
		loginHelper.validPage();
		console.log("\n\nExecuting Invalid User Login: invalid Email Address & valid Password Testcase :\n\nUser is at Login page");

		loginHelper.enterUserName(applicationProperties.inValidUserName);
		console.log("User is able to enter valid username");

		loginHelper.enterPassword(applicationProperties.validPassword);
		console.log("User is able to enter valid password");

		loginHelper.clickOnLoginButton();
		console.log("User is able to click on login button");

		loginHelper.verifyErrorMessage('The email address or the password you inputted is incorrect');
		console.log("User is able to get an error message");

		loginHelper.validPage();
		console.log("User is at Login page");
	});

	it('Invalid User Login: Invalid Email Address & invalid Password',function()
	{
		loginHelper.validPage();
		console.log("\n\nExecuting Invalid User Login: invalid Email Address & invalid Password Testcase :\n\nUser is at Login page");

		loginHelper.enterUserName(applicationProperties.inValidUserName);
		console.log("User is able to enter valid username");

		loginHelper.enterPassword(applicationProperties.inValidPassword);
		console.log("User is able to enter valid password");

		loginHelper.clickOnLoginButton();
		console.log("User is able to click on login button");

		loginHelper.verifyErrorMessage('The email address or the password you inputted is incorrect');
		console.log("User is able to get an error message");

		loginHelper.validPage();
		console.log("User is at Login page");
	});

	it('Invalid User Login: Required/ mandatory fields',function()
	{
		loginHelper.validPage();
		console.log("\n\nExecuting Invalid User Login: Required/ mandatory fields Testcase :\n\nUser is at Login page");

		loginHelper.enterUserName("");
		console.log("User is able to enter valid username");

		loginHelper.enterPassword("");
		console.log("User is able to enter valid password");

		loginHelper.clickOnLoginButton();
		console.log("User is able to click on login button");

		loginHelper.verifyValidationMessage('Please fill out this field');
		console.log("User is able to get an error message");

		loginHelper.validPage();
		console.log("User is at Login page");
	});
});