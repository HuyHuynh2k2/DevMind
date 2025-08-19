import express from "express";
import cors from "cors";
import owner_info from "./routes/home.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json(owner_info);
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
