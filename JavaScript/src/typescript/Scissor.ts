import Shapes = require("./Shape");
import Types = require("./ShapeType");

export class Scissor extends Shapes.Shape {
    constructor() {
        this.winsTo = [];
        this.winsTo.push(Types.ShapeType.paper);
        this.winsTo.push(Types.ShapeType.lizard);
        super(Types.ShapeType.scissor, this.winsTo);
    }
}  