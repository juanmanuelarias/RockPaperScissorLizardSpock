var Paper = require('../../../src/objects/paper');
var ShapeType = require('../../../src/objects/shapeType');

describe('play with paper using only objects', function () {
	
	it ('should paper defeat rock', function () {
		var paper = Object.create(Paper);
		paper.setup(ShapeType);
		expect(paper.defeat(ShapeType.rock)).toBe(true);
	});

	it ('should paper dont defeat scissor', function () {
		var paper = Object.create(Paper);
		paper.setup(ShapeType);
		expect(paper.defeat(ShapeType.scissor)).toBe(false);
	});

	it ('should paper defeat spock', function () {
		var paper = Object.create(Paper);
		paper.setup(ShapeType);
		expect(paper.defeat(ShapeType.spock)).toBe(true);
	});

	it ('should paper dont defeat lizard', function () {
		var paper = Object.create(Paper);
		paper.setup(ShapeType);
		expect(paper.defeat(ShapeType.lizard)).toBe(false);
	});

});