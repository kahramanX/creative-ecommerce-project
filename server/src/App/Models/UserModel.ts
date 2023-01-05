import { Model, DataTypes } from "sequelize";
import sequelize from "../../Database/dbConnectionForModels";

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

UserModel.sync({ alter: true }).then(async () => {
  console.log("Synced UserModel.");
});

export default UserModel;
