var DashBoardHelper = function()
{
	var driverHelper;
	var dashBoardPageObjects;
	
	var DashBoardHelper = constructor()
	{
		driverHelper = require('../util/DriverHelper.js');
		dashBoardPageObjects = require('../PageObjects/DashBoardPageObjects.js');
	};

	this.validPage = function()
	{
		driverHelper.waitForTitle('/dashboard',10000);
		driverHelper.verifyContains(browser.getCurrentUrl(),'/dashboard');
	};

	this.mouseHoverOnProfile = function()
	{
		driverHelper.mouseOver(dashBoardPageObjects.profileDropwond);
	};

	this.clickOnLogout = function()
	{
		driverHelper.clickOn(dashBoardPageObjects.logoutLink);
	};
}

module.exports = new DashBoardHelper();