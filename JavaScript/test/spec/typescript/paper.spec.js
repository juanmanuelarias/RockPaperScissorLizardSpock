var Shapes = require('../../../src/typescript/Paper');
var Types = require('../../../src/typescript/ShapeType');

describe('play with paper using typescript', function () {
    it('should paper defeat rock', function () {
        var paper = new Shapes.Paper();
        expect(paper.defeat(1 /* rock */)).toBe(true);
    });

    it('should paper dont defeat scissor', function () {
        var paper = new Shapes.Paper();
        expect(paper.defeat(2 /* scissor */)).toBe(false);
    });

    it('should paper defeat spock', function () {
        var paper = new Shapes.Paper();
        expect(paper.defeat(3 /* spock */)).toBe(true);
    });

    it('should paper dont defeat lizard', function () {
        var paper = new Shapes.Paper();
        expect(paper.defeat(4 /* lizard */)).toBe(false);
    });
});
