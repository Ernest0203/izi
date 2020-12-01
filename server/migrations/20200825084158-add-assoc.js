'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Orders', 'customerId', {
      type: Sequelize.UUID,
      references: {
        model: 'Customers', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    })
    .then(() => queryInterface.addColumn('Orders', 'paymentId', {
      type: Sequelize.UUID,
      references: {
        model: 'Payments', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }))
    .then(() => queryInterface.addColumn('Products', 'orderId', {
      type: Sequelize.UUID,
      references: {
        model: 'Orders', 
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }))
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Orders', 'customerId')
    .then(() => queryInterface.removeColumn('Orders', 'paymentId'))
    .then(() => queryInterface.removeColumn('Products', 'orderId'))
  }
};
