var Mocha = require('mocha');
var spectrum = require('../index.js');

var mocha = new Mocha({
	reporter: spectrum,
	watch: true
});

mocha.addFile('./test.js');

mocha.run(function(failures){
	process.on('exit', function () {
		console.log('EXIT: ' + failures);
	});
});
