e2e
===

**Full Test's time**:
* casperjs — 6 seconds
* protractor — 18.5 seconds

Run
====
```
make casperjs
make protractor
```
or just `make to run both ;)`

Before running protractor don't forget to execute `webdriver-manager start`.


protractor installation workarounds
====
```bash
wget http://download.oracle.com/otn-pub/java/jdk/8u20-b26/jdk-8u20-macosx-x64.dmgs
sudo npm install -g protractor
sudo rm /usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone*
sudo rm -rf /usr/local/lib/node_modules/protractor/selenium/chromedriver*
sudo webdriver-manager update
wget http://chromedriver.storage.googleapis.com/2.10/chromedriver_win32.zip
unzip chromedriver_win32.zip
wget http://selenium-release.storage.googleapis.com/2.42/selenium-server-standalone-2.42.2.jar
sudo chromedriver /usr/local/lib/node_modules/protractor/selenium/
sudo selenium-server-standalone-2.42.2.jar /usr/local/lib/node_modules/protractor/selenium
```
