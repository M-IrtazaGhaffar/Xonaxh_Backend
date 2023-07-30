const express = require("express");
const connection = require("./Database/database.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { routerUser } = require("./Routes/user.routes.js");
const { routerAdmin } = require("./Routes/admin.routes.js");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

// Modules
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

// DB Connection
mongoose.set("strictQuery", true);
connection();

// Routes
app.use("/user/", routerUser);
app.use("/admin/", routerAdmin);

// IP Address
app.get('/ip', async (req, res) => {
  const ipAddress = req.ip;
  res.send(ipAddress);
})

app.listen(port, () => console.log(`App listening on port ${port}!`));
