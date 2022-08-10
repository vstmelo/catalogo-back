import { Router } from "express";
import { FilmesController } from "./controller/filmesController";
import { FilmesLocaisController } from "./controller/filmesLocaisController";
import { GetFilmesLocaisService } from "./service/getFilmesLocaisService";
import { GetFilmesService } from "./service/getFilmesService";

const getFilmes = new FilmesController();
const getFilmesLocais = new FilmesLocaisController();

const route = Router();

route.get('/filmes', getFilmes.getFilmes);
route.get('/filmes-locais', getFilmesLocais.getFilmes);

export {route} 