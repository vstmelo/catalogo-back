import { Request, Response } from "express";
import { GetFilmesService } from "../service/getFilmesService";

const service = new GetFilmesService();

export class filmesController {

    async getFilmes(req: Request, res: Response): Promise<Response> {
        const filmes = await service.getFilmes();
        return res.json(filmes);
    };

}