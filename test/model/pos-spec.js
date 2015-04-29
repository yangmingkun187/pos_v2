'use strict';

var Pos = require('../../src/model/pos.js');
var CartItem = require('../../src/model/cart-item.js');
var expect = require('chai').expect;

describe('pos', function () {

    describe('scan', function () {

        it('should return correct cartItem', function () {

            var barcode = ['ITEM000001'];

            var pos = new Pos();
            var cartItem = pos.scan(barcode);
            var expectCartItem = new CartItem('ITEM000001', 1);

            expect(cartItem).to.deep.equal([expectCartItem]);
        });

        it('should return correct cartItem deal with barcodeInfo', function () {

            var barcode = ['ITEM000003-2'];

            var pos = new Pos();
            var cartItem = pos.scan(barcode);
            var expectCartItem = new CartItem('ITEM000003', 2);

            expect(cartItem).to.deep.equal([expectCartItem]);
        });

        it('should return correct cartItem deal with same barcode', function () {

            var barcodeInfos = [
                'ITEM000001',
                'ITEM000001',
                'ITEM000001'
            ];
            var pos = new Pos();
            var cartItem = pos.scan(barcodeInfos);
            var expectCartItem = new CartItem('ITEM000001', 3);

            expect(cartItem).to.deep.equal([expectCartItem]);
        });
    });
});