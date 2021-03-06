var Shape = require('../../../src/objects/shape');
var ShapeType = require('../../../src/objects/shapeType');

describe('play with shape using only objects', function () {
	
	it ('should rock defeat scissor', function () {
		var rock = Object.create(Shape);
		rock.init({
			shapeType: ShapeType.rock,
			winsTo: [ShapeType.scissor]
		});

		expect(rock.defeat(ShapeType.scissor)).toBe(true);
	});

	it ('should rock dont defeat paper', function () {
		var rock = Object.create(Shape);
		rock.init({
			shapeType: ShapeType.rock,
			winsTo: [ShapeType.scissor]
		});

		expect(rock.defeat(ShapeType.paper)).toBe(false);
	});

});