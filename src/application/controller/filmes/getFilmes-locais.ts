import { Request, Response } from "express";
import { GetFilmesLocaisService } from "../../../domain/filmes/service/getFilmesLocais.service";

const service = new GetFilmesLocaisService();

export class FilmesLocaisController {

    async getFilmes(req: Request, res: Response): Promise<Response> {
        const paginaAtual = req.params.pagina;
        const filmesLocais = await service.getFilmesLocais(paginaAtual);
        return res.json(filmesLocais);
    };
}