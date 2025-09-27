import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./database/index.js";

// Load environment variables
dotenv.config({ path: "./.env" });

// Use PORT from .env or fallback
const PORT = process.env.PORT || 3000;

// Connect DB, then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
