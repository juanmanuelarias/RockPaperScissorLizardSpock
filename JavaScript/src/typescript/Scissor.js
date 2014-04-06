var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Shapes = require("Shape");
var Types = require("ShapeType");

var Scissor = (function (_super) {
    __extends(Scissor, _super);
    function Scissor() {
        winsTo:
        Array(0 /* paper */);
        _super.call(this, 2 /* scissor */, this.winsTo);
    }
    return Scissor;
})(Shapes.Shape);
