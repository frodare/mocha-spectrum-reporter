
function createSpec(ms) {
	it('has a test that can run around ' + ms + 'ms', function (done) {
		setTimeout(done, ms);	
	});
}

describe('Example Object', function() {
	var j, i;
	for(j = 0; j < 2; j++) {
		describe('Testing Suite ' + j, function () {
			for(i = 0; i < 10; i++) {
				createSpec(Math.round(i * 6));
			}
			it('can fail', function () {
				throw new Error('Test Failure');
			});
			xit('skip');
		});
	}
});