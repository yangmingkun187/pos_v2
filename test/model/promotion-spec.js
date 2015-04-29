'use strict';
var expect = require('chai').expect;

var Promotion = require('../../src/model/promotion.js');
var CartItem = require('../../src/model/cart-item.js');

describe('Promotion', function() {

    describe('getSubtotal', function() {

        it('should return correct subtotal', function() {

            var cartItem = new CartItem('ITEM000000', 3);

            var promotion = new Promotion("BUY_TWO_GET_ONE_FREE", ['ITEM000000']);
            var subtotal = promotion.getSubtotal(cartItem);

            expect(subtotal).to.equal(6);
        });

        it('should return correct subtotal', function() {

            var cartItem = new CartItem('ITEM000000', 1);

            var promotion = new Promotion("BUY_TWO_GET_ONE_FREE", ['ITEM000000']);
            var subtotal = promotion.getSubtotal(cartItem);

            expect(subtotal).to.equal(3);
        });

        it('should return correct subtotal', function() {

            var cartItem = new CartItem('ITEM000000', 10);

            var promotion = new Promotion("BUY_TWO_GET_ONE_FREE", ['ITEM000000']);
            var subtotal = promotion.getSubtotal(cartItem);

            expect(subtotal).to.equal(21);
        });
    });
});