import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Sequelize } from "sequelize";
import UserModel from "./App/Models/UserModel";

const app = express();

// THIS CODES FIX THAT CORS ERROR
app.use(cors());

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
  methods: ["GET", "DELETE", "POST", "PUT", "PATCH"],
  allowedHeaders: ["Content-Type"],
};

dotenv.config();

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

const sequelize = new Sequelize(
  `test_db`,
  `${process.env.DB_USERNAME}`,
  `${process.env.DB_PASSWORD}`,
  {
    port: Number(process.env.DB_PORT),
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

// DB CONNECTION
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

app.get("/api", cors(corsOptions), (req: Request, res: Response) => {
  UserModel.create({ firstName: "test", lastName: "test mk" })
    .then((success) => {
      res.json({
        message: "Its worked!",
        data: success,
      });
      console.log("----BAŞARILI----");
    })
    .catch((err) => {
      console.log(err);
      console.log("----BAŞARISIZ----");
    });
});

app.use("*", (req: Request, res: Response) => {
  res.json({ message: "Unused Route", madeBy: "Made on Earth by human" }).end();
});

app.listen(process.env.PORT, () => {
  return console.log(`Server running on http://localhost:${process.env.PORT}`);
});

sequelize.sync({ alter: true }).then(async () => {
  console.log("RE-synced db.");
});

export { app, sequelize };
