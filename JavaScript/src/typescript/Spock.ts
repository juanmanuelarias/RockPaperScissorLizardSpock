import Shapes = require("./Shape");
import Types = require("./ShapeType");

export class Spock extends Shapes.Shape {
    constructor() {
        this.winsTo = [Types.ShapeType.rock, Types.ShapeType.scissor];
        super(Types.ShapeType.spock, this.winsTo);
    }
} 