var Rock = require('../../../src/objects/rock');
var ShapeType = require('../../../src/objects/shapeType');

describe('play with rock using only objects', function () {
	
	it ('should rock defeat scissor', function () {
		var rock = Object.create(Rock);
		rock.setup(ShapeType);
		expect(rock.defeat(ShapeType.scissor)).toBe(true);
	});

	it ('should rock dont defeat paper', function () {
		var rock = Object.create(Rock);
		rock.setup(ShapeType);
		expect(rock.defeat(ShapeType.paper)).toBe(false);
	});

	it ('should rock defeat lizard', function () {
		var rock = Object.create(Rock);
		rock.setup(ShapeType);
		expect(rock.defeat(ShapeType.lizard)).toBe(true);
	});

	it ('should rock dont defeat spock', function () {
		var rock = Object.create(Rock);
		rock.setup(ShapeType);
		expect(rock.defeat(ShapeType.spock)).toBe(false);
	});

});