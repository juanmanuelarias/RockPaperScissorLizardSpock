import Types = require("./ShapeType");

export class Shape {
    shapeType: Types.ShapeType;
    winsTo: Array<Types.ShapeType>;

    constructor(shapeType: Types.ShapeType, winsTo: Array<Types.ShapeType>) {
        this.shapeType = shapeType;
        this.winsTo = winsTo;
    }

    defeat(shapeType: Types.ShapeType) {
        for (var i = 0; i < this.winsTo.length; i++) {
            if (this.winsTo[i] === shapeType) {
                return true;
            }
        }
        return false;
    }
} 