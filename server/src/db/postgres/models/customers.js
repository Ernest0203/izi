const Sequelize = require('sequelize');
const sequelize = require('../postgres');

const Model = Sequelize.Model;

class Customers extends Model {
  static createCustomer() {
    return this.create();
  }
}

Customers.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    autoIncrement: false,
  },
}, {
  timestamps: true,
  paranoid: true,
  sequelize
});

module.exports = Customers;