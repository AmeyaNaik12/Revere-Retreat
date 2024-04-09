const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const aurgRoutes=require("./routed/auth.js")


app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/auth",authRouted);

// Mongoose setup (without deprecated options)
const PORT = 3001;
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Reveria Retreat",
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((err) => console.error(`MongoDB connection error: ${err}`));