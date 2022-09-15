import { Router } from "express";
import { FilmesController } from "./getFilmes";
import { FilmesLocaisController } from "./getFilmes-locais";

const filmeRoute = Router();
const getFilmes = new FilmesController();
const getFilmesLocais = new FilmesLocaisController();

filmeRoute.get('/filmes', getFilmes.getFilmes);
filmeRoute.get('/filmes-locais/:pagina', getFilmesLocais.getFilmes);
filmeRoute.get('/search', getFilmesLocais.getSearch);

export {filmeRoute}