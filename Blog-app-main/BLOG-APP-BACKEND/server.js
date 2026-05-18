import exp from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import { userRoute } from "./APIs/UserAPI.js";
import cookieParser from "cookie-parser";
import { adminRoute } from "./APIs/AdminAPI.js";
import { authorRoute } from "./APIs/AuthorAPI.js";
import { commonRouter } from "./APIs/CommonAPI.js";
import cors from "cors";

config();

const app = exp();

// ✅ Removed trailing slash from Vercel URL
app.use(cors({
  origin: ["http://localhost:5173", "https://blog-app-bice-three-91.vercel.app"],
  credentials: true
}));

app.use(exp.json());
app.use(cookieParser());

app.use("/user-api", userRoute);
app.use("/author-api", authorRoute);
app.use("/admin-api", adminRoute);
app.use("/common-api", commonRouter);

const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB connection success");
    app.listen(process.env.PORT, () =>
      console.log(`server started on port ${process.env.PORT}`)
    );
  } catch (err) {
    console.log("Err in DB connection", err);
  }
};

connectDB();

// Invalid path handler
app.use((req, res, next) => {
  res.status(404).json({ message: `${req.url} is invalid path` });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.log("Error name:", err.name);
  console.log("Error message:", err.message);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // Mongoose cast error
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // Custom thrown errors (from authService etc.)
  if (err.status) {
    return res.status(err.status).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // Raw MongoServerError duplicate key (fallback)
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;
  if (errCode === 11000 && keyValue) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  // Default server error
  res.status(500).json({
    message: "error occurred",
    error: "Server side error",
  });
});