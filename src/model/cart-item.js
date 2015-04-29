'use strict';

var _ = require('lodash');

var Item = require('./item.js');

function CartItem(barcode, count) {
    this.barcode = barcode;
    this.count = count;

    var items = Item.loadAllItems();
    this.item = _.find(items, {barcode: barcode});
}

CartItem.prototype.toString = function () {

    return '名称：' + this.item.name +
        '，数量：' + this.count + this.item.unit +
        '，单价：' + this.item.price.toFixed(2) + '(元)' +
        '，小计：' + this.getSubtotal().toFixed(2) + '(元)';
};

CartItem.prototype.getSubtotal = function() {
    return this.count * this.item.price;
};

module.exports = CartItem;