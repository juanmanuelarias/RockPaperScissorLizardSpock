var Shapes = require('../../../src/typescript/Scissor');
var Types = require('../../../src/typescript/ShapeType');

describe('play with scissor using typescript', function () {
    it('should scissor defeat paper', function () {
        var scissor = new Shapes.Scissor();
        expect(scissor.defeat(0 /* paper */)).toBe(true);
    });

    it('should scissor dont defeat rock', function () {
        var scissor = new Shapes.Scissor();
        expect(scissor.defeat(1 /* rock */)).toBe(false);
    });

    it('should scissor defeat lizard', function () {
        var scissor = new Shapes.Scissor();
        expect(scissor.defeat(4 /* lizard */)).toBe(true);
    });

    it('should scissor dont defeat spock', function () {
        var scissor = new Shapes.Scissor();
        expect(scissor.defeat(3 /* spock */)).toBe(false);
    });
});
