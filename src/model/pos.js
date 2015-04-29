'use strict';

var _ = require('lodash');
var Item = require('./item.js');

function Pos() {

}

Pos.prototype.scan = function(barcodeInfo) {
    var cartItem = {};
    var items = Item.loadAllItems();

    var infoArray = barcodeInfo.split('-');
    var barcode = infoArray[0];
    var count = parseInt(infoArray[1]) || 1;

    cartItem.item = _.find(items, {barcode: barcode});
    cartItem.count = count;

    return cartItem;
};

module.exports = Pos;