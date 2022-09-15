import { Request, Response } from "express";
import { GetFilmesService } from "../../../domain/filmes/service/getFilmesService";

const service = new GetFilmesService();

export class FilmesController {

    async getFilmes(req: Request, res: Response): Promise<Response> {
        const filmes = await service.getFilmes();
        return res.json(filmes);
    };
}