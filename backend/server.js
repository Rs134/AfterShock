import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Only create real OpenAI client if API key exists
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
      // Real OpenAI request
      const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      });
      reply = response.choices[0].message.content;
    } else {
      // MOCK response for development
      console.log("Using mock OpenAI response (no API key)");
      reply = `🤖 [Mock reply] You said: "${message}"`;
    }

    res.json({ reply });
  } catch (err) {
    console.error("OpenAI API error:", err);
    res.status(500).json({ reply: "OpenAI API error" });
  }
});

const PORT = 5007;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
