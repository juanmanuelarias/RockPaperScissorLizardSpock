var Shape = require('../../../app/models/shape');
var ShapeType = require('../../../app/models/shapeType');

describe('create a shape', function () {
	
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