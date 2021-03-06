var Scissor = require('../../../src/objects/scissor');
var ShapeType = require('../../../src/objects/shapeType');

describe('play with scissor using only objects', function () {
	
	it ('should scissor defeat paper', function () {
		var scissor = Object.create(Scissor);
		scissor.setup(ShapeType);
		expect(scissor.defeat(ShapeType.paper)).toBe(true);
	});

	it ('should scissor dont defeat rock', function () {
		var scissor = Object.create(Scissor);
		scissor.setup(ShapeType);
		expect(scissor.defeat(ShapeType.rock)).toBe(false);
	});

	it ('should scissor defeat lizard', function () {
		var scissor = Object.create(Scissor);
		scissor.setup(ShapeType);
		expect(scissor.defeat(ShapeType.lizard)).toBe(true);
	});

	it ('should scissor dont defeat spock', function () {
		var scissor = Object.create(Scissor);
		scissor.setup(ShapeType);
		expect(scissor.defeat(ShapeType.spock)).toBe(false);
	});

});