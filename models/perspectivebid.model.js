const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Perspective_Bid = sequelize.define('Perspective_Bid', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pers_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  perspective: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Perspective_Bid;
