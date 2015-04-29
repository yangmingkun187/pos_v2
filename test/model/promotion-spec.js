'use strict';
var expect = require('chai').expect;

var Promotion = require('../../src/model/promotion.js');
var CartItem = require('../../src/model/cart-item.js');

describe('Promotion', function() {

    describe('getPromotion', function() {

        it('should return correct subtotal', function() {

            var cartItem = new CartItem('ITEM000000', 3);

            var promotion = new Promotion("BUY_TWO_GET_ONE_FREE", ['ITEM000000']);
            var subtotal = promotion.getPromotion(cartItem);

            expect(subtotal).to.deep.equal({subtotal: 6, savedCount: 1});
        });

        it('should return correct subtotal', function() {

            var cartItem = new CartItem('ITEM000000', 1);

            var promotion = new Promotion("BUY_TWO_GET_ONE_FREE", ['ITEM000000']);
            var subtotal = promotion.getPromotion(cartItem);

            expect(subtotal).to.deep.equal({subtotal: 3, savedCount: 0});
        });

        it('should return correct subtotal', function() {

            var cartItem = new CartItem('ITEM000000', 10);

            var promotion = new Promotion("BUY_TWO_GET_ONE_FREE", ['ITEM000000']);
            var subtotal = promotion.getPromotion(cartItem);

            expect(subtotal).to.deep.equal({subtotal: 21, savedCount: 3});
        });

        it('should return no promotion', function() {
            var cartItem = new CartItem('ITEM000004', 10);

            var promotion = new Promotion("BUY_TWO_GET_ONE_FREE", ['ITEM000000']);
            var subtotal = promotion.getPromotion(cartItem);

            expect(subtotal).to.deep.equal({subtotal: 20, savedCount: 0});

        });
    });
});