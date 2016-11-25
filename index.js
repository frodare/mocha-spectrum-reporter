var mocha = require('mocha');
var Base = mocha.reporters.Base;
var inherits = require('mocha/lib/utils').inherits;
var color = Base.color;
var colors = [];
var scolors = [];

function generateColors() {
	var i;
	for (i = 21; i < 50; i++) {
		var pi3 = Math.floor(Math.PI / 3);
		
		var n = (i * (1.0 / 6));
		
		var r = Math.floor(3 * Math.sin(n) + 3);
		var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);
		var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);
		
		colors.push(36 * r + 6 * g + b + 16);
	}
}

function generateStringColors() {
	var i;
	for (i = 0; i < 42; i++) {
		var pi3 = Math.floor(Math.PI / 3);
		
		var n = (i * (1.0 / 6));
		
		var r = Math.floor(3 * Math.sin(n) + 3);
		var g = Math.floor(3 * Math.sin(n + 2 * pi3) + 3);
		var b = Math.floor(3 * Math.sin(n + 4 * pi3) + 3);
		
		scolors.push(36 * r + 6 * g + b + 16);
	}
}

function colorizeString(s) {
	var i = 0;
	return s.split('').map(function (c) {
		var color = scolors[i % scolors.length];
		if(c){
			i++;
		}
		return '\u001b[38;5;' + color + 'm' + c + '\u001b[0m';
	}).join('');
}

function durationColor(time, str) {
	var colorIndex = Math.round(time/2);
	if(colorIndex >= colors.length){
		colorIndex = colors.length - 1;
	}
	var color = colors[colorIndex];
	return '\u001b[38;5;' + color + 'm' + str + '\u001b[0m';
}

function pad(str) {
	return '        '.substring(str.length) + str;
}

generateStringColors();
generateColors();

function Spectrum(runner) {
	Base.call(this, runner);

	var self = this;
	var indents = 0;
	var n = 0;

	function indent () {
		return Array(indents).join('  ');
	}

	runner.on('start', function () {
		console.log(colorizeString('✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩✩'));
	});

	runner.on('suite', function (suite) {
		++indents;
		if(!suite.title){
			console.log();
			return;
		}
		var s = indent();
		if(indents === 2){
			s += '★ ';
		}else{
			s += '➭ '; 
		}
		s += suite.title;
		console.log(s);
	});

	runner.on('suite end', function () {
		--indents;
		if (indents === 1) {
			console.log();
		}
	});

	runner.on('pending', function (test) {
		var fmt = indent() + color('pending', '       - %s');
		console.log(fmt, test.title);
	});

	runner.on('pass', function(test){
		var fmt;
		fmt = indent();
		fmt += durationColor(test.duration, pad('' + test.duration + 'ms :'));
		fmt += ' ' + color('pass', test.title);
		console.log(fmt);
	});

	runner.on('fail', function(test){
		var fmt = '';
		fmt += ' ' + pad(Base.symbols.err  + ' (' + (++n) + ') : ');
		fmt += test.title;
		console.log(indent() + color('fail', fmt));
	});

	runner.on('end', self.epilogue.bind(self));
}

inherits(Spectrum, Base);

module.exports = Spectrum;