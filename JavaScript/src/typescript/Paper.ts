import Shapes = require("./Shape");
import Types = require("./ShapeType");

export class Paper extends Shapes.Shape {
    constructor() {
        this.winsTo = [Types.ShapeType.rock, Types.ShapeType.spock];
        super(Types.ShapeType.paper, this.winsTo);
    }
} 