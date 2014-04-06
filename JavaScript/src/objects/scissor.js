var Shape = require('./shape');

var Scissor = Object.create(Shape);

Scissor.setup = function (ShapeType) {
	this.init({
		shapeType: ShapeType.scissor,
		winsTo: [ShapeType.paper, ShapeType.lizard]
	});
}

module.exports = Scissor;