import { Model, DataTypes } from "sequelize";
import sequelize from "../../Database/dbConnectionForModels";
import UserAddressModel from "./UserAddressModel";

class UserModel extends Model {}

UserModel.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "User",
    timestamps: false,
    freezeTableName: true,
  }
);

UserModel.hasOne(UserAddressModel, {
  foreignKey: {
    allowNull: false,
  },
});
UserAddressModel.belongsTo(UserModel);

export default UserModel;
