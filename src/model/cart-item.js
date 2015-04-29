'use strict';

var _ = require('lodash');

var Item = require('./item.js');
var Promotion = require('./promotion.js');
var promotions = Promotion.loadPromotion();

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

    return promotions[0].getSubtotal(this);
};

module.exports = CartItem;