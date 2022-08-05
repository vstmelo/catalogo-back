import { Router } from "express";
import { filmesController } from "./controller/filmesController";

const getFilmes = new filmesController();

const route = Router();

route.get('/filmes', getFilmes.getFilmes);

export {route}