import express from "express";
import cors from "cors";
import owner_info from "./routes/home.js";
import problems from "./routes/neetcodeData.js";
import { PythonShell } from "python-shell";

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

app.get("/api/home", (req, res) => {
  res.json(owner_info);
});

app.get("/api/neetcode", (req, res) => {
  res.json(problems);
});

// Chat route
app.post("/api/chat", (req, res) => {
  const conversation = req.body.conversation;

  if (!conversation)
    return res.status(400).json({ error: "conversation required" });

  const pyshell = new PythonShell("python/deepseek_api.py", {
    mode: "json",
    pythonPath:
      "/Library/Frameworks/Python.framework/Versions/3.13/bin/python3",
    pythonOptions: ["-u"],
  });

  pyshell.send({ conversation });

  let responded = false;

  pyshell.on("message", (message) => {
    if (!responded) {
      responded = true;
      res.json(message);
    }
  });

  pyshell.end((err) => {
    if (err && !responded) {
      console.error(err);
      res.status(500).json({ error: "Python error" });
    }
  });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
