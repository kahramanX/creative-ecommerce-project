import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Sequelize } from "sequelize";
import routes from "./App/Routes/index";

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
  `${process.env.DB_NAME}`,
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
    console.error("Unable to connect to the database:");
  }
})();

// User Routes
app.use("/api/user", cors(corsOptions), routes.userRoutes);
app.use("/api/address", cors(corsOptions), routes.userAddressRoutes);

/* app.use("*", (req: Request, res: Response) => {
  res.json({ message: "Unused Route", madeBy: "Made on Earth by human" }).end();
}) */

sequelize.sync({ alter: true }).then(async () => {
  console.log("RE-synced db.");
});

app.listen(process.env.PORT, () => {
  return console.log(`Server running on http://localhost:${process.env.PORT}`);
});

export { app, sequelize };
