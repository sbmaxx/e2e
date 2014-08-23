e2e
===

protractor
====
```bash
sudo npm install -g protractor
JDK http://download.oracle.com/otn-pub/java/jdk/8u20-b26/jdk-8u20-macosx-x64.dmgs
sudo rm /usr/local/lib/node_modules/protractor/selenium/selenium-server-standalone-2.42.2.jar
sudo webdriver-manager update
webdriver-manager start
protractor conf.js
```

```
10:27:08.860 INFO - Started SocketListener on 0.0.0.0:4444
10:27:08.860 INFO - Started org.openqa.jetty.jetty.Server@7106e68e
10:27:18.042 INFO - Executing: org.openqa.selenium.remote.server.handler.GetAllSessions@54eeb418)
10:27:18.044 INFO - Done: org.openqa.selenium.remote.server.handler.GetAllSessions@54eeb418
10:27:26.671 INFO - Executing: [new session: Capabilities [{browserName=opera}]])
10:27:26.688 INFO - Creating a new session for Capabilities [{browserName=opera}]
10:27:37.677 INFO - Executing: org.openqa.selenium.remote.server.handler.GetAllSessions@636fa9fa)
10:27:37.677 INFO - Done: org.openqa.selenium.remote.server.handler.GetAllSessions@636fa9fa
10:27:38.292 INFO - Executing: org.openqa.selenium.remote.server.handler.GetAllSessions@fc1114a)
10:27:38.292 INFO - Done: org.openqa.selenium.remote.server.handler.GetAllSessions@fc1114a
10:28:30.130 WARN - Exception thrown
java.util.concurrent.ExecutionException: org.openqa.selenium.WebDriverException: java.lang.reflect.InvocationTargetException
Build info: version: '2.42.2', revision: '6a6995d', time: '2014-06-03 17:42:03'
System info: host: 'mbp.local', ip: '192.168.1.200', os.name: 'Mac OS X', os.arch: 'x86_64', os.version: '10.9.4', java.version: '1.8.0_20'
Driver info: driver.version: unknown
	at java.util.concurrent.FutureTask.report(FutureTask.java:122)
	at java.util.concurrent.FutureTask.get(FutureTask.java:192)
	at org.openqa.selenium.remote.server.DefaultSession.execute(DefaultSession.java:176)
	at org.openqa.selenium.remote.server.DefaultSession.<init>(DefaultSession.java:112)
	at org.openqa.selenium.remote.server.DefaultSession.createSession(DefaultSession.java:89)
	at org.openqa.selenium.remote.server.DefaultDriverSessions.newSession(DefaultDriverSessions.java:110)
	at org.openqa.selenium.remote.server.handler.NewSession.handle(NewSession.java:57)
	at org.openqa.sele10:28:30.136 WARN - Exception: No response in a timely fashion


UnknownError: The driver executable does not exist: /usr/local/lib/node_modules/protractor/selenium/chromedriver
    at new bot.Error (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/atoms/error.js:109:18)
    at Object.bot.response.checkResponse (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/atoms/response.js:106:9)
    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/webdriver.js:134:24
    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1243:15
    at webdriver.promise.ControlFlow.runInNewFrame_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/promise.js:1539:20)
    at notify (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/promise.js:362:12)
    at notifyAll (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/promise.js:331:7)
    at resolve (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/promise.js:309:7)
    at fulfill (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/promise.js:429:5)
    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/goog/base.js:1243:15
    at webdriver.promise.ControlFlow.runInNewFrame_ (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/promise.js:1539:20)
    at notify (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/promise.js:362:12)
    at notifyAll (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/promise.js:331:7)
    at resolve (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/promise.js:309:7)
    at fulfill (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/promise.js:429:5)
    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/promise.js:617:49
    at /usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/lib/webdriver/http/http.js:96:5
    at IncomingMessage.<anonymous> (/usr/local/lib/node_modules/protractor/node_modules/selenium-webdriver/http/index.js:122:7)
    at IncomingMessage.EventEmitter.emit (events.js:117:20)
    at _stream_readable.js:920:16
    at process._tickCallback (node.js:415:13)
==== async task ====

```
