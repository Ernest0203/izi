const Sequelize = require('sequelize');
const sequelize = require('../postgres');
const { Orders } = require('./index');

const Model = Sequelize.Model;

class Products extends Model {
  static createProduct() {
    return this.create();
  }
}

Products.init({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    autoIncrement: false,
  },
  orderId: {
    type: Sequelize.UUID,
    references: {
      model: Orders, // name of Source model
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  status: Sequelize.STRING,
  name: Sequelize.STRING,
}, {
  timestamps: true,
  paranoid: true,
  sequelize
});

module.exports = Products;