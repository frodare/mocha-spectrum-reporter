# mocha-spectrum-reporter 
[![npm version](https://badge.fury.io/js/mocha-spectrum-reporter.svg)](https://badge.fury.io/js/mocha-spectrum-reporter)

Add some color to your test results with this _spec-like_ mocha reporter.  This reporter is based after Mocha's built-in `spec` reporter with the intention to better emphasize slow tests. It adds the test duration to every test result with a color based on the test duration.  Fast running tests (~1-4ms) are violet. As test take longer their color moves through the color spectrum until reaching red (~50ms).

Install with NPM:

`npm install --save-dev mocha-spectrum-reporter`

Then call mocha with:

`mocha --reporter mocha-spectrum-reporter test`

###Screenshot
![Screenshot](http://i.imgur.com/rL7cRR0.png)
