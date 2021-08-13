"use strict";

const MusicModel = require("../models/music-model");
class MusicController {}

MusicController.getAll = (req, res, next) => {
  MusicModel.getAll((err, rows) => {
    if (err) {
      let locals = {
        title: "Error al consultar la base de datos",
        description: "Error de sintaxis SQL",
        error: err,
      };

      res.render("error", locals);
    } else {
      let locals = {
        title: "Lista de Músicas",
        data: rows,
      };
      res.render("index", locals);
    }
  });
};

MusicController.getOne = (req, res, next) => {
  let registro = req.params.registro;
  console.log(registro);
  MusicModel.getOne(registro, (err, rows) => {
    console.log(err, "---", rows);
    if (err) {
      let locals = {
        title: `Error al buscar el registro con el id: ${registro}`,
        description: "Error de sintaxis SQL",
        error: err,
      };

      res.render("error", locals);
    } else {
      let locals = {
        title: "Editar música",
        data: rows,
      };
      res.render("edit-music", locals);
    }
  });
};
function sanitaze(data) {
  return sanitamodule(data);
}
MusicController.save = (req, res, next) => {
  let music = {
    registro: sanitaze(req.body.registro),
    gimnasta: req.body.gimnasta,
    categoria: req.body.categoria,
    implemento: req.body.implemento,
    imagen: req.body.imagen,
    voz: req.body.voz,
    tiempo: req.body.tiempo,
    musica: req.body.musica,
  };

  console.log(music);
  MusicModel.save(music, (err) => {
    if (err) {
      let locals = {
        title: `Error al salvar el registro con el id: ${music.registro}`,
        description: "Error de sintaxis SQL",
        error: err,
      };

      res.render("error", locals);
    } else {
      res.redirect("/");
    }
  });
};
MusicController.delete = (req, res, next) => {
  let registro = req.params.registro;
  console.log(registro);
  MusicModel.delete(registro, (err, rows) => {
    console.log(err, "---", rows);
    if (err) {
      let locals = {
        title: `Error al eliminar el registro con el id: ${registro}`,
        description: "Error de sintaxis SQL",
        error: err,
      };

      res.render("error", locals);
    } else {
      res.redirect("/");
    }
  });
};

MusicController.addForm = (req, res, next) =>
  res.render("add-music", { title: "Agregar música" });

MusicController.error404 = (req, res, next) => {
  let error = new Error(),
    locals = {
      titlte: "Error 404",
      description: "Recurso no encontrado",
      error: "error",
    };

  error.status = 404;
  res.render("error", locals);

  next();
};
module.exports = MusicController;
