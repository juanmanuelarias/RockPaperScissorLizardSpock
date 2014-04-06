var Lizard = require('../../../src/objects/lizard');
var ShapeType = require('../../../src/objects/shapeType');

describe('play with lizard using only objects', function () {
	
	it ('should lizard defeat paper', function () {
		var lizard = Object.create(Lizard);
		lizard.setup(ShapeType);
		expect(lizard.defeat(ShapeType.paper)).toBe(true);
	});

	it ('should lizard dont defeat rock', function () {
		var lizard = Object.create(Lizard);
		lizard.setup(ShapeType);
		expect(lizard.defeat(ShapeType.rock)).toBe(false);
	});

	it ('should lizard defeat spock', function () {
		var lizard = Object.create(Lizard);
		lizard.setup(ShapeType);
		expect(lizard.defeat(ShapeType.spock)).toBe(true);
	});

	it ('should lizard dont defeat scissor', function () {
		var lizard = Object.create(Lizard);
		lizard.setup(ShapeType);
		expect(lizard.defeat(ShapeType.scissor)).toBe(false);
	});

});