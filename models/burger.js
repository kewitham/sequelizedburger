'use strict';
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', {
    id: DataTypes.INTEGER,
    burger_name: DataTypes.STRING,
    devoured: {type: DataTypes.BOOLEAN, defaultValue: false},
    date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burger;
};