import express from "express";
import connectMongodb from "../db/db.js";
import cors from "cors";


const app = express();
const PORT = 8000;

app.use(cors());
app.get("/", async (req, res) => {
  try {
    const db = await connectMongodb();
    const users = await db.collection("shoes").find().toArray(); 
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
