"use strict";

var MusicController = require("../controllers/music-controller"),
  express = require("express"),
  router = express.Router();

router
  .get("/", MusicController.getAll)
  .get("/agregar", MusicController.addForm)
  .post("/", MusicController.save)
  .get("/editar/:registro", MusicController.getOne)
  .put("/actualizar/:registro", MusicController.save)
  .delete("/eliminar/:registro", MusicController.delete)
  .use(MusicController.error404);

module.exports = router;
