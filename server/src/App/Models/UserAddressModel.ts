import { Model, DataTypes, Association } from "sequelize";
import sequelize from "../../Database/dbConnectionForModels";

class UserAddressModel extends Model {}

UserAddressModel.init(
  {
    user_address_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    address_line_1: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    address_line_2: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    postal_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    address_phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Address",
    timestamps: false,
    freezeTableName: true,
  }
);

UserAddressModel.sync({ alter: true }).then(async () => {
  console.log("Synced UserAddressModel.");
});

export default UserAddressModel;
