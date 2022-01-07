const expect = require('chai').expect;
const isOddOrEven = require('./evenOdd');

describe('function tests',  () => {
    it('not string returns undefined', () => {
        expect(isOddOrEven(Number(1))).to.be.undefined;
    });

    it('array returns undefined', () => {
        expect(isOddOrEven([1, 1])).to.be.undefined;
    });

    it('even string', () => {
        expect(isOddOrEven('string')).to.equal('even');
    });

    it('odd string', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
    });
});

// Returning undefined
// Returning even
// Returning odd