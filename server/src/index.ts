import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = 8000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

dotenv.config();

app.get("/", (req, res) => {
  res.json({ message: "Made on Earth by human" });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
