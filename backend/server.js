import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

// ✅ Simpler and more reliable CORS configuration
const allowedOrigins = [
  "https://aftershock-frontend.onrender.com",
  "http://localhost:5173",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // respond OK to preflight
  }
  next();
});

app.use(bodyParser.json());

// --- OpenAI client setup ---
const client = process.env.OPENAI_API_KEY
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null;

// --- Chat endpoint ---
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ reply: "Invalid message" });
  }

  try {
    if (client) {
      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are AirBag, a compassionate and structured chatbot designed to help individuals who have experienced car accidents. Your role is to provide emotional support, coping strategies, and practical guidance for recovering after a traumatic event.",
          },
          { role: "user", content: message },
        ],
      });

      const reply = response.choices[0].message.content;
      return res.json({ reply });
    } else {
      return res.status(500).json({ reply: "Missing API key configuration" });
    }
  } catch (err) {
    console.error("OpenAI API error:", err);
    res.status(500).json({ reply: "OpenAI API error" });
  }
});

// --- Root route for verification ---
app.get("/", (req, res) => {
  res.send("✅ AfterShock API is running. Use POST /api/chat to talk to the bot.");
});

const PORT = process.env.PORT || 5007;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
