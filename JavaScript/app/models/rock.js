var Shape = require('./shape');

var Rock = Object.create(Shape);

Rock.setup = function (ShapeType) {
	this.init({
		shapeType: ShapeType.rock,
		winsTo: [ShapeType.scissor, ShapeType.lizard]
	});
}

module.exports = Rock;