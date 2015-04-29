var Pos = require('../../src/model/pos.js');
var expect = require('chai').expect;

describe('pos', function() {

    describe('scan', function() {

        it('should return correct cartItem', function() {

            var barcode = 'ITEM000001';

            var pos = new Pos();
            var cartItem = pos.scan(barcode);

            expect(cartItem).to.deep.equal({barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00});
        });
    });
});