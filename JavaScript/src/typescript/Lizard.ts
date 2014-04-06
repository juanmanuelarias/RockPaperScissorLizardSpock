import Shapes = require("./Shape");
import Types = require("./ShapeType");

export class Lizard extends Shapes.Shape {
    constructor() {
        this.winsTo = [Types.ShapeType.paper, Types.ShapeType.spock];
        super(Types.ShapeType.lizard, this.winsTo);
    }
} 