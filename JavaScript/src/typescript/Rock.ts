import Shapes = require("./Shape");
import Types = require("./ShapeType");

export class Rock extends Shapes.Shape {
    constructor() {
        this.winsTo = [];
        this.winsTo.push(Types.ShapeType.scissor);
        this.winsTo.push(Types.ShapeType.lizard);
        super(Types.ShapeType.rock, this.winsTo);
    }
} 