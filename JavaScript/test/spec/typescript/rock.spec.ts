import Shapes = require('../../../src/typescript/Rock');
import Types = require('../../../src/typescript/ShapeType');

declare var describe, it, expect;

describe('play with rock using typescript', function () {

    it('should rock defeat scissor', function () {
        var rock = new Shapes.Rock();
        expect(rock.defeat(Types.ShapeType.scissor)).toBe(true);
    });

    it('should rock dont defeat paper', function () {
        var rock = new Shapes.Rock();
        expect(rock.defeat(Types.ShapeType.paper)).toBe(false);
    });

    it('should rock defeat lizard', function () {
        var rock = new Shapes.Rock();
        expect(rock.defeat(Types.ShapeType.lizard)).toBe(true);
    });

    it('should rock dont defeat spock', function () {
        var rock = new Shapes.Rock();
        expect(rock.defeat(Types.ShapeType.spock)).toBe(false);
    });

});