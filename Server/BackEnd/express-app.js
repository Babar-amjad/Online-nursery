const dotenv = require("dotenv").config();
const connectDB = require("./config/connectDB");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const taskRoutes = require("./Routes/taskRoute");
const userRoutes = require("./Routes/userRoute");
//const CourseRoutes = require("./Routes/CourseRoute");
const dietRoutes = require("./Routes/DietRoute");
const exerciseRoutes = require("./Routes/ExerciseRoute");

const app = express();

const PORT = process.env.PORT || 5500;

//Connection to DataBase Call here
connectDB();

// Allow requests from url'
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log(`Run Server on ${PORT}`);
});

app.use(express.json());

app.use("/tasks", taskRoutes);
app.use("/", userRoutes);
//app.use("/", CourseRoutes);
app.use("/", userRoutes);
app.use("/", dietRoutes);
app.use("/", exerciseRoutes);
