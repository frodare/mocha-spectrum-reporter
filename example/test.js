describe('Example Object', function() {
	for(let j = 0; j < 2; j++) {
		describe('Suite ' + j, function () {
			for(let i = 0; i < 10; i++) {
				it('test ' + i, (done) => setTimeout(done, 0 + (i*4.5)));
			}
			it('can be slow', function (done) {
				setTimeout(function() {
					done();
				}, 100);
			});
			it('can fail', function () {
				throw new Error('Test Failure');
			});
			xit('skip');
		});
	}
});