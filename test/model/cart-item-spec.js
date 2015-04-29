'use strict';

var expect = require('chai').expect;
var CartItem = require('../../src/model/cart-item.js');

describe('cartItem', function() {

    describe('toString', function () {

        it('should return correct cartItem string', function () {

            var item = 'ITEM000001';

            var cartItem = new CartItem(item, 3);
            var text = cartItem.toString();

            expect(text).to.equal('名称：雪碧，数量：3瓶，单价：3.00(元)，小计：6.00(元)');
        });
    });

    describe('toPromotionString', function() {

        it('should return correct promotion string', function() {

            var item = 'ITEM000001';

            var cartItem = new CartItem(item, 3);
            var text = cartItem.toPromotionString();

            expect(text).to.equal('名称：雪碧，数量：1瓶');
        });
    });

    describe('getTotalString', function() {

        it('should return correct total', function() {

            var cartItem = new CartItem('ITEM000001', 3);
            var text = cartItem.getTotalString();

            expect(text).to.equal('总计：21.00(元)\n' + '节省：4.00(元)');

        });
    });
});