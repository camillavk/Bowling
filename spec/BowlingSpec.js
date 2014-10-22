describe('Bowling', function() {

	var bowling

	beforeEach(function() {
		bowling = new Bowling
	});

	describe('game starts with', function() {

		it('ten frames', function() {
			expect(bowling.frameNumber).toEqual(10)
		});

	});

});