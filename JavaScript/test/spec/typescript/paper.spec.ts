import Shapes = require('../../../src/typescript/Paper');
import Types = require('../../../src/typescript/ShapeType');

declare var describe, it, expect;

describe('play with paper using typescript', function () {
	
	it ('should paper defeat rock', function () {
        var paper = new Shapes.Paper();
		expect(paper.defeat(Types.ShapeType.rock)).toBe(true);
	});

	it ('should paper dont defeat scissor', function () {
        var paper = new Shapes.Paper();
        expect(paper.defeat(Types.ShapeType.scissor)).toBe(false);
	});

	it ('should paper defeat spock', function () {
        var paper = new Shapes.Paper();
        expect(paper.defeat(Types.ShapeType.spock)).toBe(true);
	});

	it ('should paper dont defeat lizard', function () {
        var paper = new Shapes.Paper();
        expect(paper.defeat(Types.ShapeType.lizard)).toBe(false);
	});

});