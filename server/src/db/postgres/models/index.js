const Orders = require('./orders');
const Payments = require('./payments');
const Products = require('./products');
const Customers = require('./customers');

Orders.belongsTo(Customers, {foreignKey: 'customerId'});
Orders.hasMany(Products);
Payments.hasOne(Orders, { foreignKey: 'paymentId' });

module.exports.Orders = Orders;
module.exports.Payments = Payments;
module.exports.Products = Products;
module.exports.Customers = Customers;
