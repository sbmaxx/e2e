e2e
===

Scenario:
* set narrow viewport;
* open http://yandex.ru/images;
* check that is has correct title;
* fill search input with text "bmw", check it;
* click on search button and wait for search page appears;
* check that that title matches "bmw" query;
* scroll to bottom 5 times and after each scroll loader should appear;
* after last scroll check that "more button" is visible;
* fill search input with text "audi", check it;
* click on search button and wait for search page appears;
* click the service label and wait for index page;
* check that index page has correct title and `b-page` mod;
* do browser back and check that we on search page;
* check that no item is currently selected and `pane` is not visible;
* resize the viewport and check that we have selected item, that `pane` is visible, and that the selected item is the first one;
* submit form with another text and wait for new results;
* do **two** mouse moves below `serp-item` and wait for `hovered_yes`;
* check that `snippet` is visible;
* that's all ;).

**Full Test's time**:
* casperjs — 6 seconds
* protractor — 18.5 seconds

Run
====
```
make casperjs
make protractor
```
or just `make` to run both ;).

Before running protractor don't forget to execute `webdriver-manager start`.

Installing casperjs
====
```sudo npm install -g casperjs```
If you want to use **mocha-casperjs** — ```sudo npm install -g mocha-casperjs mocha chai```

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
