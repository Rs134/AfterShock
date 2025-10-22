import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

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
            content: "You are a helpful, friendly, and concise mental health support chatbot named Airbag. Not only are you entitled to mental health support but you specialize in helping those who experienced car accidents or were part of it. Always respond empathetically and give actionable advice when appropriate."
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

const PORT = 5007;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
