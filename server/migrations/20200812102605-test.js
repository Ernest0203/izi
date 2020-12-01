'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        //field: "created_at"
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
        //field: "updated_at"
      },
      deletedAt: {
        type: Sequelize.DATE,
        onDelete : Sequelize.literal('CURRENT_TIMESTAMP'),
        //field: "deleted_at"
      }
    })
    .then(() => queryInterface.createTable('Customers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        //field: "created_at"
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
        //field: "updated_at"
      },
      deletedAt: {
        type: Sequelize.DATE,
        onDelete : Sequelize.literal('CURRENT_TIMESTAMP'),
        //field: "deleted_at"
      }
    }))
    .then(() => queryInterface.createTable('Products', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      status: Sequelize.STRING,
      name: Sequelize.STRING,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        //field: "created_at"
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
        //field: "updated_at"
      },
      deletedAt: {
        type: Sequelize.DATE,
        onDelete : Sequelize.literal('CURRENT_TIMESTAMP'),
        //field: "deleted_at"
      }
    }))
    .then(() => queryInterface.createTable('Payments', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      status: Sequelize.STRING,
      amount: Sequelize.DECIMAL,
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        //field: "created_at"
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        onUpdate : Sequelize.literal('CURRENT_TIMESTAMP'),
        //field: "updated_at"
      },
      deletedAt: {
        type: Sequelize.DATE,
        onDelete : Sequelize.literal('CURRENT_TIMESTAMP'),
        //field: "deleted_at"
      }
    }))
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders')
      .then(queryInterface.dropTable('Customers'))
      .then(queryInterface.dropTable('Products'))
      .then(queryInterface.dropTable('Payments'))
  }
};
