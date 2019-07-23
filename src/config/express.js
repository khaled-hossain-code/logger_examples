const express = require("express");
const app = express();
const morgan = require('morgan');
const { logger } = require("./logger");
const accessLogger = require("./accessLog");

const handler = func => (req, res) => {
  try {
    logger.info("server.handler.begun");
    const payload = {
      user: 123,
      path: req.originalUrl
    };

    logger.info(payload)
    func(req, res);
  } catch (e) {
    logger.info("server.handler.failed");
    res.send("Oh no, something did not go well!");
  }
};

app.use(morgan('dev'))
app.use(accessLogger);

app.get(
  "/success",
  handler((req, res) => {
    res.send("Yay!");
  })
);
app.get(
  "/error",
  handler((req, res) => {
    throw new Error("Doh!");
  })
);

module.exports = app;
