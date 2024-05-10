const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("Hello developer! API is working!");
});

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
