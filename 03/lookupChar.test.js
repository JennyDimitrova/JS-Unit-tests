const expect = require('chai').expect;
const assert = require('chai').assert;
const lookupChar = require('./lookupChar');

// describe('charTests', () => {
//     it('returns undefined', () => {
//         expect(lookupChar(Number(1), 1)).to.be.undefined;
//     });

//     it('returns undefined with wrong index', () => {
//         expect(lookupChar('string', 1.1)).to.be.undefined;
//     });

//     it('returns incorrect with empty string', () => {
//         expect(lookupChar('', 0)).to.equal("Incorrect index");
//     });

//     it('returns incorrect with negative index', () => {
//         expect(lookupChar('string', -1)).to.equal("Incorrect index");
//     });

//     it('returns incorrect with outOfBounds index', () => {
//         expect(lookupChar('string', 100)).to.equal("Incorrect index");
//     });

//     it('returns correct', () => {
//         expect(lookupChar('string', 0)).to.equal("s");
//     });

//     it('returns correct', () => {
//         expect(lookupChar('string', 0)).to.equal("s");
//     });
//     // it('returns correct 2 ', () => {
//     //     expect(lookupChar('string', 1)).to.equal("t");
//     // });
// });

describe('Tests for char-look-up function', () => {
    it('pushing function, expected undefined', () => {
        assert(lookupChar(function (){}, 3)).to.be.undefined;
    })

    it ('pushing invalid type for index', () => {
        assert(lookupChar('abracadabra', '56a')).to.be.undefined;
    })

    it ('pushing invalid index', () => {
        assert(lookupChar('abracadabra', 223)).to.equal("Incorrect index");
    })

    it ('must work properly', () => {
    assert(lookupChar('abracadabra', 0,)).to.equal("a");
    })
    
    it ('must work properly', () => {
        simpleFunction('abra', 3, "a");
    })
    it ('index out of bounds', ()=>{
        simpleFunction('abra', 5, 'Incorrect index');
    })
    it('', () => {
        expect(undefined).to.equal(charLookUp());
    })
    it('', () => {
        assert.isUndefined(charLookUp(1,2))
        assert.isUndefined(charLookUp('ab',2.2))
        assert.isUndefined(charLookUp('abc','a'))
    })
})
function simpleFunction(a,b, expected){
    expect(expected).to.equal(charLookUp(a,b));
}