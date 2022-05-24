const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
require("dotenv").config({ path: ".env" });
const authFilter = require("./middleware/auth-filter");
const socketServer = require("../server/services/socketService").socketServer;
const httpServer = require("http").Server(app);

//
app.use(express.json({ limit: "2MB" }));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(authFilter());
app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

const expressServer = httpServer.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

socketServer(expressServer);
