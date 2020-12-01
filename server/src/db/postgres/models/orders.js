const Sequelize = require('sequelize');
const sequelize = require('../postgres');
const { Customers, Payments } = require('./index');

const Model = Sequelize.Model;

class Orders extends Model {
  static createOrder() {
    //return this.create({});
    return this.findAll();
  }
}

Orders.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    autoIncrement: false,
  },
  customerId: {
    type: Sequelize.UUID,
    references: {
      model: Customers, // name of Target model
      key: 'id', // key in Target model that we're referencing
    },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
  },
  paymentId: {
    type: Sequelize.UUID,
    references: {
      model: Payments, // name of Source model
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
}, {
  timestamps: true,
  paranoid: true,
  sequelize
});

module.exports = Orders;