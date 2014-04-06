var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Shapes = require("./Shape");
var Types = require("./ShapeType");

var Paper = (function (_super) {
    __extends(Paper, _super);
    function Paper() {
        this.winsTo = [1 /* rock */, 3 /* spock */];
        _super.call(this, 0 /* paper */, this.winsTo);
    }
    return Paper;
})(Shapes.Shape);
exports.Paper = Paper;
