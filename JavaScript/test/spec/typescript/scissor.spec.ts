import Shapes = require('../../../src/typescript/Scissor');
import Types = require('../../../src/typescript/ShapeType');

declare var describe, it, expect;

describe('play with scissor using typescript', function () {

    it('should scissor defeat paper', function () {
        var scissor = new Shapes.Scissor();
        expect(scissor.defeat(Types.ShapeType.paper)).toBe(true);
    });

    it('should scissor dont defeat rock', function () {
        var scissor = new Shapes.Scissor();
        expect(scissor.defeat(Types.ShapeType.rock)).toBe(false);
    });

    it('should scissor defeat lizard', function () {
        var scissor = new Shapes.Scissor();
        expect(scissor.defeat(Types.ShapeType.lizard)).toBe(true);
    });

    it('should scissor dont defeat spock', function () {
        var scissor = new Shapes.Scissor();
        expect(scissor.defeat(Types.ShapeType.spock)).toBe(false);
    });

});

