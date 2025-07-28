const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const authRoutes = require("./auth");
const cartRoutes = require("./carts");

app.use(authRoutes);
app.use(cartRoutes);

mongoose.connect(
  "mongodb+srv://duadasheem:mRdvPdDx8pL84fR7@cluster0.rbyunmm.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
