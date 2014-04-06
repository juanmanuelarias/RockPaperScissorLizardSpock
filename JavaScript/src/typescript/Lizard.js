var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Shapes = require("./Shape");
var Types = require("./ShapeType");

var Lizard = (function (_super) {
    __extends(Lizard, _super);
    function Lizard() {
        this.winsTo = [0 /* paper */, 3 /* spock */];
        _super.call(this, 4 /* lizard */, this.winsTo);
    }
    return Lizard;
})(Shapes.Shape);
exports.Lizard = Lizard;
