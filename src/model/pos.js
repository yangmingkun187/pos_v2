var _ = require('lodash');
var Item = require('./item.js');

function Pos() {

}

Pos.prototype.scan = function(barcode) {
    var cartItem;
    var items = Item.loadAllItems();

    var cartItem = _.find(items, {barcode: barcode});

    return cartItem;
};

module.exports = Pos;