const { Orders, Customers, Products, Payments } = require('../db/postgres/models/index');

module.exports.create = async (req, res) => {
  const data = await Orders.createOrder();
  res.json(data);
}
