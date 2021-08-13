"use strict";

const conn = require("./music-connection");
class MusicModel {}

MusicModel.getAll = (cb) => conn.query("SELECT*FROM musicmacabi", cb);
MusicModel.getOne = (id, cb) =>
  conn.query("SELECT * FROM musicmacabi WHERE registro = ?", id, cb);

MusicModel.save = (data, cb) => {
  conn.query(
    "SELECT * FROM musicmacabi WHERE registro = ?",
    data.registro,
    (err, rows) => {
      //console.log(`Número de registros: ${rows.length}`);

      if (err) {
        return err;
      } else {
        return rows.length === 1
          ? conn.query(
              "UPDATE musicmacabi SET ? WHERE registro= ?",
              [data, data.registro],
              cb
            )
          : conn.query("INSERT INTO musicmacabi SET ?", data, cb);
      }
    }
  );
};
MusicModel.delete = (id, cb) => {
  conn.query("DELETE FROM musicmacabi WHERE registro = ?", id, cb);
};

module.exports = MusicModel;
