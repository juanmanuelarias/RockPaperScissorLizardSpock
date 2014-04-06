var Shape = require('./shape');

var Spock = Object.create(Shape);

Spock.setup = function (ShapeType) {
	this.init({
		shapeType: ShapeType.spock,
		winsTo: [ShapeType.rock, ShapeType.scissor]
	});
}

module.exports = Spock;