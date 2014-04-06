var Shape = {
	init: function init(obj){
		winsTo = obj.winsTo;
		shapeType = obj.shapeType;
	},
	defeat: function defeat (shapeType) {
		for (var i = 0; i < winsTo.length; i++) {
			if (winsTo[i] === shapeType){
				return true;
			}
		};
		return false;
	}
}

module.exports = Shape;