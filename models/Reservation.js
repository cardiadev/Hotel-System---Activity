'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reservation.hasMany(models.Clients,{
        foreignKey: 'idCategoria'
      })
    }
  }
  Reservation.init({
    checkin: DataTypes.DATE,
    checkout: DataTypes.DATE,
    payment_method: DataTypes.INTEGER,
    client: DataTypes.INTEGER,
    employee: DataTypes.INTEGER,
    room: DataTypes.INTEGER,
    survey: DataTypes.INTEGER,
    amenities: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};