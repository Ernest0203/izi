const Sequelize = require('sequelize');
const sequelize = require('../postgres');

const Model = Sequelize.Model;

class Payments extends Model {
  static createPayment() {
    return this.create();
  }
}

Payments.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    autoIncrement: false,
  },
  status: Sequelize.STRING,
  amount: Sequelize.DECIMAL,
}, {
  timestamps: true,
  paranoid: true,
  sequelize
});

module.exports = Payments;