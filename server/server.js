const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello developer!");
});

io.on("connection", (socket) => {
  console.log("User connected");
  console.log("ID: ", socket.id);
});

const PORT = 3000;

httpServer.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
