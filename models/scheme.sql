DROP DATABASE IF EXISTS music;

CREATE DATABASE  IF NOT EXISTS music;

USE music;

CREATE TABLE IF NOT EXISTS musicmacabi(
  registro VARCHAR(20) PRIMARY KEY,
	gimnasta VARCHAR(100),
	categoria VARCHAR(100),
	implemento VARCHAR(100),
	imagen VARCHAR(255),
  voz VARCHAR(2),
  tiempo DECIMAL(3,2),
  musica VARCHAR(255)
);