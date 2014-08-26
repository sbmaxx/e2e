default: casperjs protractor
	@echo Done

casperjs:
	casperjs test casperjs/index.js
	mocha-casperjs casperjs/mocha.js

protractor:
	protractor protractor/conf.js

.PHONY: casperjs protractor
