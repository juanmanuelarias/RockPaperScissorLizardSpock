var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Shapes = require("./Shape");
var Types = require("./ShapeType");

var Rock = (function (_super) {
    __extends(Rock, _super);
    function Rock() {
        this.winsTo = [];
        this.winsTo.push(2 /* scissor */);
        this.winsTo.push(4 /* lizard */);
        _super.call(this, 1 /* rock */, this.winsTo);
    }
    return Rock;
})(Shapes.Shape);
exports.Rock = Rock;
