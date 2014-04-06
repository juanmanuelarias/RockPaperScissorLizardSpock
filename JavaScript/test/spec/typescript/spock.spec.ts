import Shapes = require('../../../src/typescript/Spock');
import Types = require('../../../src/typescript/ShapeType');

declare var describe, it, expect;

describe('play with using typescript', function () {

    it('should spock defeat rock', function () {
        var spock = new Shapes.Spock();
        expect(spock.defeat(Types.ShapeType.rock)).toBe(true);
    });

    it('should spock dont defeat paper', function () {
        var spock = new Shapes.Spock();
        expect(spock.defeat(Types.ShapeType.paper)).toBe(false);
    });

    it('should spock defeat scissor', function () {
        var spock = new Shapes.Spock();
        expect(spock.defeat(Types.ShapeType.scissor)).toBe(true);
    });

    it('should spock dont defeat lizard', function () {
        var spock = new Shapes.Spock();
        expect(spock.defeat(Types.ShapeType.lizard)).toBe(false);
    });

});