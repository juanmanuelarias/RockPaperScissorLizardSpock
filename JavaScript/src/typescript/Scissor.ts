import Shapes = require("Shape");
import Types = require("ShapeType");

class Scissor extends Shapes.Shape {
    constructor() {
        winsTo: Array<Types.ShapeType>(Types.ShapeType.paper);
        super(Types.ShapeType.scissor, this.winsTo);
    }
}  