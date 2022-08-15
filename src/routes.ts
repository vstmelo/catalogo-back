import { Router } from "express";
import { FilmesController } from "./controller/filmesController";
import { FilmesLocaisController } from "./controller/filmesLocaisController";


const getFilmes = new FilmesController();
const getFilmesLocais = new FilmesLocaisController();

const route = Router();

route.get('/filmes', getFilmes.getFilmes);
route.get('/filmes-locais/:pagina', getFilmesLocais.getFilmes);

export {route} 