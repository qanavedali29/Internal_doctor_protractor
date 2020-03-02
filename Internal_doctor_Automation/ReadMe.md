		**Internal_doctor_Automation Automation**

**Folder Structure:**
	*ApplicationProperties:*
		This file contains URL, browser and user credentials which would be the same throughout the application.

	*Conf:*
		This file contains configuration for reports and browser steps.
	
	*PageHelper:*
		It contains all helper file having all methods which are used in their related scripts.
	
	*PageObjects:*
		It contains JS file having all identifiers to related to the pages.
	
	*Scripts:*
		This folder contains all JS file having test cases.
	
	*Util:*
		This folder contains file having method which are being used in helper file.
	
	*Reports:*
		This folder contains report file.
	
	*Steps to execute test case:*
		Install node js and protractor in system
			https://www.guru99.com/download-install-node-js.html
		Open command prompt
		Go to Project location where "paclage.json" is available.
		Type "npm i" command and hit Enter. //this command will install required pakages in current folder
		To run all test case
			Type "npm test" command and hit Enter.	//test is available under pakage.json file
	
	*Update test/testsuites:*
		Go to conf/conf.js
		update 'specs' section.