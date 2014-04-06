var Shapes = require('../../../src/typescript/Lizard');
var Types = require('../../../src/typescript/ShapeType');

describe('play with lizard using typescript', function () {
    it('should lizard defeat paper', function () {
        var lizard = new Shapes.Lizard();
        expect(lizard.defeat(0 /* paper */)).toBe(true);
    });

    it('should lizard dont defeat rock', function () {
        var lizard = new Shapes.Lizard();
        expect(lizard.defeat(1 /* rock */)).toBe(false);
    });

    it('should lizard defeat spock', function () {
        var lizard = new Shapes.Lizard();
        expect(lizard.defeat(3 /* spock */)).toBe(true);
    });

    it('should lizard dont defeat scissor', function () {
        var lizard = new Shapes.Lizard();
        expect(lizard.defeat(2 /* scissor */)).toBe(false);
    });
});
