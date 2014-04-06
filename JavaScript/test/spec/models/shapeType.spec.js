var ShapeType = require('../../../app/models/shapeType');

describe('shape types that exist in our game', function () {
	
	it ('should paper be a type of shape', function () {
		expect(ShapeType.paper).toBe("paper");
	});

	it ('should scissor be a type of shape', function () {
		expect(ShapeType.scissor).toBe("scissor");
	});

	it ('should rock be a type of shape', function () {
		expect(ShapeType.rock).toBe("rock");
	});

	it ('should lizard be a type of shape', function () {
		expect(ShapeType.lizard).toBe("lizard");
	});

	it ('should spock be a type of shape', function () {
		expect(ShapeType.spock).toBe("spock");
	});

});