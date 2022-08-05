import { Request, Response } from "express";
import { GetFilmesService } from "../service/getFilmesService";

const service = new GetFilmesService();

export class filmesController {

    async getFilmes(req: Request, res: Response): Promise<Response> {
        const filmes = await service.getFilmes();
        const dataFilmes = filmes.map((item: any) => {
            return ({
                title: item.title,
                movie_banner: item.movie_banner,
                description: item.description,
                director: item.director,
                producer: item.producer,
            }
            )

        })
        
        return res.json(dataFilmes);
    };

}