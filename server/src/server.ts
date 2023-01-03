import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Sequelize } from "sequelize";

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

const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  dialect: "postgres",
});

// DB CONNECTION
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

sequelize.sync().then(async () => {
  console.log("RE-synced db.");
});

app.use("/api", cors(corsOptions), (req: Request, res: Response) => {
  res.json({
    message: "Its worked!",
  });
});

app.use("*", (req: Request, res: Response) => {
  res.json({ message: "Unused Route", madeBy: "Made on Earth by human" }).end();
});

app.listen(process.env.PORT, () => {
  return console.log(`Server running on http://localhost:${process.env.PORT}`);
});

export { app, sequelize };
