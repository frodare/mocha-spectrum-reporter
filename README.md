# mocha-spectrum-reporter 
[![npm version](https://badge.fury.io/js/mocha-spectrum-reporter.svg)](https://badge.fury.io/js/mocha-spectrum-reporter)

A colorful spec-like mocha reporter to better emphasize slow tests.  This reporter is based after the built-in `spec` reporter.  However, it adds the duration to every test result with a color based on the test duration.  Fast running tests (~1-4ms) are violet. As test take longer their color moves through the color spectrum until reaching red (~50ms).

Install with NPM:

`npm install --save-dev mocha-spectrum-reporter`

Then call mocha with:

`mocha --reporter mocha-spectrum-reporter test`
