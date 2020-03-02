var DashBoardPageObjects = function()
{
    this.profileDropwond = "css=div[ng-if^='$ctrl.user.profile.data.picture']";
    this.logoutLink = "css=p[ng-click^='$ctrl.logout()']";
};
module.exports = new DashBoardPageObjects();