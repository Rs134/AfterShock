import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express(); // ✅ ← You need this line before using `app.use()`

// --- CORS setup ---
const allowedOrigins = [
  "https://aftershock-frontend.onrender.com",
  "http://localhost:5173"
];

const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"), false);
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// ✅ Apply CORS globally before routes
app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));


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
    let reply;

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

      reply = response.choices[0].message.content;
    }

    res.json({ reply });
  } catch (err) {
    console.error("OpenAI API error:", err);
    res.status(500).json({ reply: "OpenAI API error" });
  }
});

// --- Optional root route for testing ---
app.get("/", (req, res) => {
  res.send("✅ AfterShock API is running. Use POST /api/chat to talk to the bot.");
});

const PORT = process.env.PORT || 5007;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
