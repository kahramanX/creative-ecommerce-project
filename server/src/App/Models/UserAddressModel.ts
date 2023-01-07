import { Model, DataTypes } from "sequelize";
import sequelize from "../../Database/dbConnectionForModels";

class UserAddressModel extends Model {}

UserAddressModel.init(
  {
    address_line_1: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    address_line_2: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    district: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    postal_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    address_phone: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Address",
    timestamps: false,
    freezeTableName: true,
  }
);

export default UserAddressModel;
