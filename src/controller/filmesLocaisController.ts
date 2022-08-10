import { Request, Response } from "express";
import { GetFilmesLocaisService } from "../service/getFilmesLocaisService";

const service = new GetFilmesLocaisService();

export class FilmesLocaisController {

    async getFilmes(req: Request, res: Response): Promise<Response> {
        const filmesLocais = await service.getFilmesLocais();
        return res.json(filmesLocais);
    };
}