import { Router } from "express";
import { FilmesController } from "./getFilmes";
import { FilmesLocaisController } from "./getFilmes-locais";

const filmeRoute = Router();
const getFilmes = new FilmesController();
const getFilmesLocais = new FilmesLocaisController();

filmeRoute.get('/films', getFilmes.getFilmes);
filmeRoute.get('/films-local/:pagina', getFilmesLocais.getFilmes);
filmeRoute.get('/search/:query', getFilmesLocais.getSearch);

export {filmeRoute}