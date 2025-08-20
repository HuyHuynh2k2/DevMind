import express from "express";
import cors from "cors";
import owner_info from "./routes/home.js";
import problems from "./routes/neetcodeData.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/home", (req, res) => {
  res.json(owner_info);
});

app.get("/api/neetcode", (req, res) => {
  res.json(problems);
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
