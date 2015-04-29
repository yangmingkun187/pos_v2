'use strict';

var _ = require('lodash');
var Item = require('./item.js');
var CartItem = require('./cart-item.js');

function getCartItem(barcodeInfo) {
    var items = Item.loadAllItems();

    var infoArray = barcodeInfo.split('-');
    var barcode = infoArray[0];
    var count = parseInt(infoArray[1]) || 1;

    var item = _.find(items, {barcode: barcode});

    return new CartItem(item.barcode, count);
}

function Pos() {

}

Pos.prototype.scan = function(barcodeInfos) {
    var cartItems = [];

    _.forEach(barcodeInfos, function(barcodeInfo) {
        var currentCartItem = getCartItem(barcodeInfo);

        var existCartItem = _.find(cartItems, function(cartItem) {
            return cartItem.item.barcode === currentCartItem.item.barcode;
        });

        if(!existCartItem) {
            cartItems.push(currentCartItem);
        } else {
            existCartItem.count += currentCartItem.count;
        }
    });
    return cartItems;
};

module.exports = Pos;