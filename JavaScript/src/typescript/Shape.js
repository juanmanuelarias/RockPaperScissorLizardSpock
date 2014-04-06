var Shape = (function () {
    function Shape(shapeType, winsTo) {
        this.shapeType = shapeType;
        this.winsTo = winsTo;
    }
    Shape.prototype.defeat = function (shapeType) {
        for (var i = 0; i < this.winsTo.length; i++) {
            if (this.winsTo[i] === shapeType) {
                return true;
            }
        }
        return false;
    };
    return Shape;
})();
exports.Shape = Shape;
