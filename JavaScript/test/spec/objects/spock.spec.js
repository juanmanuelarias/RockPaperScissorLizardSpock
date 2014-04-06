var Spock = require('../../../src/objects/spock');
var ShapeType = require('../../../src/objects/shapeType');

describe('play with using only objects', function () {
	
	it ('should spock defeat rock', function () {
		var spock = Object.create(Spock);
		spock.setup(ShapeType);
		expect(spock.defeat(ShapeType.rock)).toBe(true);
	});

	it ('should spock dont defeat paper', function () {
		var spock = Object.create(Spock);
		spock.setup(ShapeType);
		expect(spock.defeat(ShapeType.paper)).toBe(false);
	});

	it ('should spock defeat scissor', function () {
		var spock = Object.create(Spock);
		spock.setup(ShapeType);
		expect(spock.defeat(ShapeType.scissor)).toBe(true);
	});

	it ('should spock dont defeat lizard', function () {
		var spock = Object.create(Spock);
		spock.setup(ShapeType);
		expect(spock.defeat(ShapeType.lizard)).toBe(false);
	});

});