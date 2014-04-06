var Shape = require('./shape');

var Paper = Object.create(Shape);

Paper.setup = function (ShapeType) {
	this.init({
		shapeType: ShapeType.paper,
		winsTo: [ShapeType.rock, ShapeType.spock]
	});
}

module.exports = Paper;