var Shapes = require('../../../src/typescript/Spock');
var Types = require('../../../src/typescript/ShapeType');

describe('play with using typescript', function () {
    it('should spock defeat rock', function () {
        var spock = new Shapes.Spock();
        expect(spock.defeat(1 /* rock */)).toBe(true);
    });

    it('should spock dont defeat paper', function () {
        var spock = new Shapes.Spock();
        expect(spock.defeat(0 /* paper */)).toBe(false);
    });

    it('should spock defeat scissor', function () {
        var spock = new Shapes.Spock();
        expect(spock.defeat(2 /* scissor */)).toBe(true);
    });

    it('should spock dont defeat lizard', function () {
        var spock = new Shapes.Spock();
        expect(spock.defeat(4 /* lizard */)).toBe(false);
    });
});
