"use strict";

var express = require("express"),
  favicon = require("serve-favicon"),
  bodyParser = require("body-parser"),
  morgan = require("morgan"),
  restFul = require("express-method-override")("_method"),
  routes = require("./routes/music-router"),
  faviconURL = `${__dirname}/public/img/logo_Ritmica_Macabi.jpg`,
  publicDir = express.static(`${__dirname}/public`),
  viewsDir = `${__dirname}/views`,
  port = process.env.PORT || 3000,
  app = express();

//view engine setup

app.set("views", viewsDir);
app.set("view engine", "pug");

//port setup

app.set("port", port);

//middlewares

app.use(favicon(faviconURL));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(restFul);
app.use(morgan("dev"));
app.use(publicDir);
app.use(routes);

module.exports = app;
