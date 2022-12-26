import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

const app = express();

// THIS CODES FIX THAT CORS ERROR
app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

dotenv.config();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// app.use("/api", router);

app.get("/api", (req: Request, res: Response) => {
  res.json({
    message: "Made on Earth by human",
  });
});

app.use("*", (req: Request, res: Response) => {
  res.json({ message: "Unused Route" });
});

app.listen(process.env.PORT, () => {
  return console.log(`Server running on http://localhost:${process.env.PORT}`);
});
