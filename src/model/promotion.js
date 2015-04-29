'use strict';

var Items = require('./item');
var _ = require('lodash');

function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes;
}

Promotion.loadPromotion = function() {
    return [
        new Promotion('BUY_TWO_GET_ONE_FREE', [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ])
    ];
};

Promotion.prototype.isPromotion = function (cartItem) {
    return _.some(this.barcodes, function(barcode) {
        return barcode === cartItem.barcode;
    });
};

Promotion.prototype.getSubtotal = function (cartItem) {
    var subtotal = 0;

    var isPromotion = this.isPromotion(cartItem);

    if(isPromotion) {
        var realCount = cartItem.count - parseInt(cartItem.count/3);
        subtotal = cartItem.item.price * realCount;
    } else {
        subtotal = cartItem.item.price * cartItem.count;
    }

    return subtotal;
};

module.exports = Promotion;