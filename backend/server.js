import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://aftershock.onrender.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message || typeof message !== "string") {
    return res.status(400).json({ reply: "Invalid message" });
  }

  try {
    let reply;
    if (client) {
      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are AirBag, a compassionate and structured chatbot designed to help individuals who have experienced car accidents.",
          },
          { role: "user", content: message },
        ],
      });
      reply = response.choices[0].message.content;
    }
    res.json({ reply });
  } catch (err) {
    console.error("OpenAI API error:", err);
    res.status(500).json({ reply: "OpenAI API error" });
  }
});

app.get("/", (req, res) => {
  res.send("AfterShock backend is running successfully!");
});

const PORT = process.env.PORT || 5007;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
