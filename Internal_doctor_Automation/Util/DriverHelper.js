var DriverHelper = function()
{
	this.EC = protractor.ExpectedConditions;
	
	this.byLocator = function(locator)
	{
		var result = null
		if (locator.startsWith("//"))
		{
            result = by.xpath(locator);
		}		
		else if (locator.startsWith("css=")) 
		{
            result = by.css(locator.replace("css=", ""));
        }
		else if (locator.startsWith("id")) 
		{
            result = by.id(locator.replace("id=", ""));
        }
		else if (locator.startsWith(".")) 
		{
            result = by.name(locator.replace(".", ""));
        }
		else if (locator.startsWith("link=")) 
		{
            result = by.linkText(locator.replace("link=", ""));
        }
        else if(locator.startsWith("xpath"))
		{
			result = by.xpath(locator.replace("xpath=", ""));
		}
		else if(locator.startsWith("model"))
		{
			result = by.model(locator.replace("model=", ""));
        }
        else 
		{
            result = by.xpath(locator);
        }
        return result
	};
			
	this.waitForElementVisible = function(locator,timeout)
	{
		timeout = timeout*1000;
		browser.wait(this.EC.visibilityOf(element(this.byLocator(locator)), timeout));
	};
	
	this.waitForElementNotVisible = function(locator,timeout)
	{
		timeout = timeout*1000;
		browser.wait(this.EC.invisibilityOf(element(this.byLocator(locator)), timeout));
	};
	
	this.clickOn = function(locator)
	{
		this.waitForElementVisible(locator,5);
		element(this.byLocator(locator)).click();
	};
	
	this.verifyContains = function(string1,string2)
	{
		expect(string1).toContain(string2);
	};
	
	this.clearTextField = function(locator)
	{
		this.waitForElementVisible(locator,5);
		element(this.byLocator(locator)).clear();
	};
	
	this.sendKeys = function(locator,stringText)
	{
		this.waitForElementVisible(locator,5);
		this.clearTextField(locator);
		element(this.byLocator(locator)).sendKeys(stringText);
	};
	
	this.uploadFile = function(locator,filePath,fileName)
	{
		element(this.byLocator(locator)).sendKeys(filePath+"\\"+fileName);
	};
	
	this.acceptAlert = function()
	{
		browser.switchTo().alert().accept();
	};
	
	this.mouseOver = function(locator)
	{
		this.waitForElementVisible(locator,5);
		var element1 = element(this.byLocator(locator));
		browser.actions().mouseMove(element1).perform();
	};

	this.waitForTitle = function(title, timeout)
	{
		browser.wait(this.EC.urlContains(title), timeout);
	};
		
	this.getText = function(locator)
	{
		this.waitForElementVisible(locator,5);
		return element(this.byLocator(locator)).getText();
	};

	this.getAttribute = function(locator,attribute)
	{
		this.waitForElementVisible(locator,5);
		return element(this.byLocator(locator)).getAttribute(attribute);
	};
};
module.exports = new DriverHelper();