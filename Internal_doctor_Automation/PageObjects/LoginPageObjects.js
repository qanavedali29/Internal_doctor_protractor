var LoginPageObjects = function()
{
    this.userName = "css=input[ng-model='lc.user.username']";
    this.password = "model=lc.user.password";
    this.loginButton = "xpath=//button[text()='Login']";
    this.errorMessage = "css=div[class^='biomark-popup-error']>p";
};
module.exports = new LoginPageObjects();