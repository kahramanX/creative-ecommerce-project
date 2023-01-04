import { Model, DataTypes } from "sequelize";
import sequelize from "../../Database/dbConnectionForModels";

class UserModel extends Model {}

UserModel.init(
  {
    myID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    secondID: {
      type: DataTypes.INTEGER,
      defaultValue: 33,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "instructors",
    timestamps: false,
    freezeTableName: true,
  }
);

UserModel.sync({ alter: true }).then(async () => {
  console.log("Synced UserModel.");
});

export default UserModel;
