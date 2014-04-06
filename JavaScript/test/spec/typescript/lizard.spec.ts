import Shapes = require('../../../src/typescript/Lizard');
import Types = require('../../../src/typescript/ShapeType');

declare var describe, it, expect;

describe('play with lizard using typescript', function () {

    it('should lizard defeat paper', function () {
        var lizard = new Shapes.Lizard();
        expect(lizard.defeat(Types.ShapeType.paper)).toBe(true);
    });

    it('should lizard dont defeat rock', function () {
        var lizard = new Shapes.Lizard();
        expect(lizard.defeat(Types.ShapeType.rock)).toBe(false);
    });

    it('should lizard defeat spock', function () {
        var lizard = new Shapes.Lizard();
        expect(lizard.defeat(Types.ShapeType.spock)).toBe(true);
    });

    it('should lizard dont defeat scissor', function () {
        var lizard = new Shapes.Lizard();
        expect(lizard.defeat(Types.ShapeType.scissor)).toBe(false);
    });

});