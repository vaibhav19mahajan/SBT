const express = require('express');
const bp = require("body-parser");
const cors = require("cors");
const PORT = require("./config/config").PORT;
const userRouter = require("./router/user.router");
const mongoose = require('./connect');
const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(cors());
app.use("/api/user", userRouter);

var server = app.listen(PORT, () => {
    console.log(`Middleware staterd at port: ${PORT}`);
    mongoose.connect();
});

module.exports = server;