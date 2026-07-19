import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import projectRouter from "./routes/projectRoute.js";

await connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-client-opal-nine.vercel.app",
      "https://portfolio-admin-taupe-nu.vercel.app",
    ],
    credentials: true,
  })
);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);


// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio Backend is Running 🚀",
  });
});
app.get("/api/test", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Protected Route Accessed Successfully",
    admin: req.admin,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});