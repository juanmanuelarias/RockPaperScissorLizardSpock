var Shapes = require('../../../src/typescript/Rock');
var Types = require('../../../src/typescript/ShapeType');

describe('play with rock using typescript', function () {
    it('should rock defeat scissor', function () {
        var rock = new Shapes.Rock();
        expect(rock.defeat(2 /* scissor */)).toBe(true);
    });

    it('should rock dont defeat paper', function () {
        var rock = new Shapes.Rock();
        expect(rock.defeat(0 /* paper */)).toBe(false);
    });

    it('should rock defeat lizard', function () {
        var rock = new Shapes.Rock();
        expect(rock.defeat(4 /* lizard */)).toBe(true);
    });

    it('should rock dont defeat spock', function () {
        var rock = new Shapes.Rock();
        expect(rock.defeat(3 /* spock */)).toBe(false);
    });
});
