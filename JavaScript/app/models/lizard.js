var Shape = require('./shape');

var Lizard = Object.create(Shape);

Lizard.setup = function (ShapeType) {
	this.init({
		shapeType: ShapeType.lizard,
		winsTo: [ShapeType.paper, ShapeType.spock]
	});
}

module.exports = Lizard;