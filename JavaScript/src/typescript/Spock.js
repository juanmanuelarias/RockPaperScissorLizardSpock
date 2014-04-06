var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Shapes = require("./Shape");
var Types = require("./ShapeType");

var Spock = (function (_super) {
    __extends(Spock, _super);
    function Spock() {
        this.winsTo = [1 /* rock */, 2 /* scissor */];
        _super.call(this, 3 /* spock */, this.winsTo);
    }
    return Spock;
})(Shapes.Shape);
exports.Spock = Spock;
