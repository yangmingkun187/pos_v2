'use strict';

var Pos = require('../../src/model/pos.js');
var expect = require('chai').expect;

describe('pos', function () {

    describe('scan', function () {

        it('should return correct cartItem', function () {

            var barcode = ['ITEM000001'];

            var pos = new Pos();
            var cartItem = pos.scan(barcode);

            expect(cartItem).to.deep.equal([{
                item: {barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00},
                count: 1
            }]);
        });

        it('should return correct cartItem deal with barcodeInfo', function () {

            var barcode = ['ITEM000003-2'];

            var pos = new Pos();
            var cartItem = pos.scan(barcode);

            expect(cartItem).to.deep.equal([{
                item: {barcode: 'ITEM000003', name: '荔枝', unit: '斤', price: 15.00},
                count: 2
            }]);
        });
        //
        //it('should return correct cartItem deal with same barcode', function() {
        //
        //    var barcodeInfos = [
        //        'ITEM000001',
        //        'ITEM000001',
        //        'ITEM000001',
        //    ];
        //    var pos = new Pos();
        //    var cartItem = pos.scan(barcodeInfos);
        //
        //    expect(cartItem).to.deep.equal()
        //});
    });

});