var DriverTestCase = function()
{
	var applicationProperties;
	this.setUp = function()
	{
		applicationProperties=require('../ApplicationProperties/ApplicationProperties.js');
		browser.ignoreSynchronization = true;
		browser.driver.manage().window().maximize();
		browser.get(applicationProperties.applicationUrl);
		//browser.ignoreSynchronization USED FOR NON_AJAX APPLICATION
	};
};
module.exports = new DriverTestCase();