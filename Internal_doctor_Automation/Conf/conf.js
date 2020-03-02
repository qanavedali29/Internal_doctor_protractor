var HtmlReporter = require('../node_modules/protractor-beautiful-reporter');
exports.config = 
{
	directConnect: true,
	capabilities: 
	{
		'browserName': 'chrome',
		chromeOptions:
		{
			args: ["--headless", "--disable-gpu"]
		}
		//'browserName': 'firefox',
	},
	
	// Framework to use. Jasmine is recommended.
	framework: 'jasmine2',

	specs:['../Scripts/*.js'],
	
	onPrepare: function() 
	{
		jasmine.getEnv().addReporter(new HtmlReporter({
		baseDirectory: 'Reports',
		screenshotsSubfolder: 'images',
		docName: 'Internal_Doctor_Automation_Report.html',
		docTitle: 'Internal Doctor Automation Report',
		jsonsSubfolder: 'jsons',
		excludeSkippedSpecs: false,
		takeScreenShotsForSkippedSpecs: true,
		takeScreenShotsOnlyForFailedSpecs: true,
		gatherBrowserLogs: false ,
		preserveDirectory: false,
		clientDefaults:
		{
			showTotalDurationIn: "header",                  
			totalDurationFormat: "hms"            
		}
		}).getJasmine2Reporter());
	},

	jasmineNodeOpts: 
	{
		onComplete: null,
		isVerbose: false,
		showColors: true,
		includeStackTrace: true,
		defaultTimeoutInterval: 80000
	}
}