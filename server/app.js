require("dotenv").config();
const express = require("express");

const app = express();

const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");

const PORT = process.env.PORT || 4000;

const db = new Database(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.connect().catch((err) =>
  console.error("Error connecting to database:", err)
);

app.use(cors());
app.use(morgan("dev"));
app.use("/assets/userFiles", express.static(__dirname + "/assets/userFiles"));
app.use(
  "/assets/userAvatars",
  express.static(__dirname + "/assets/userAvatars")
);

app.get("/server-status", (req, res) => {
    res.status(200).json({ message: "Server is up and running!" });
  });

  process.on("SIGINT", async () => {
    try {
      await db.disconnect();
      console.log("Disconnected from database.");
      process.exit(0);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  });

  app.listen(PORT, () => console.log(`Server up and running on port ${PORT}!`));