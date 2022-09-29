import { Request, Response } from "express";
import { GetFilmesLocaisService } from "../../../domain/filmes/service/getFilmesLocais.service";
import { Search } from "../../../domain/filmes/service/search.service";

const service = new GetFilmesLocaisService();
const search = new Search()

export class FilmesLocaisController {

    async getFilmes(req: Request, res: Response): Promise<Response> {
        const paginaAtual = req.params.pagina;
        const filmesLocais = await service.getFilmesLocais(paginaAtual);
        return res.json(filmesLocais);
    };

    async getSearch(req: Request, res: Response): Promise<Response> {
        const data = req.body;
        const getSearch = await search.search(data);
        return res.json(getSearch);
    };
}