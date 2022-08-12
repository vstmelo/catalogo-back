"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const filmesController_1 = require("./controller/filmesController");
const filmesLocaisController_1 = require("./controller/filmesLocaisController");
const getFilmes = new filmesController_1.FilmesController();
const getFilmesLocais = new filmesLocaisController_1.FilmesLocaisController();
const route = (0, express_1.Router)();
exports.route = route;
route.get('/filmes', getFilmes.getFilmes);
route.get('/filmes-locais', getFilmesLocais.getFilmes);