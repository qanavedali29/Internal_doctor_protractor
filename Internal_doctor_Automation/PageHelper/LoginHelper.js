var LoginHelper = function()
{
	var driverHelper;
	var loginPageObjects;
	
	var LoginHelper = constructor()
	{
		driverHelper = require('../util/DriverHelper.js');
		loginPageObjects = require('../PageObjects/LoginPageObjects.js');
	};

	this.validPage = function()
	{
		driverHelper.waitForTitle('/login',10000);
		driverHelper.verifyContains(browser.getCurrentUrl(),'/login');
	};

	this.enterUserName = function(username)
	{
		driverHelper.sendKeys(loginPageObjects.userName,username);
	};

	this.enterPassword = function(password)
	{
		driverHelper.sendKeys(loginPageObjects.password,password);
	};
	
	this.clickOnLoginButton = function(locator)
	{
		driverHelper.clickOn(loginPageObjects.loginButton);
	};

	this.verifyErrorMessage = function(errorMessage)
	{
		driverHelper.getText(loginPageObjects.errorMessage).then(function(text)
		{
			driverHelper.verifyContains(text,errorMessage);
		});
	};

	this.verifyValidationMessage = function(errorMessage)
	{
		driverHelper.getAttribute(loginPageObjects.userName,"validationMessage").then(function(text)
		{
			driverHelper.verifyContains(text,errorMessage);
		});
	};
};
module.exports = new LoginHelper();