import { Request, Response } from "express";
import { GetFilmesLocaisService } from "../../../domain/filmes/service/getFilmesLocais.service";

const service = new GetFilmesLocaisService();

export class SearchController {


    async search(req: Request, res: Response):Promise<void> {
        const { query, page, itemsPerPage  } = req.query

        const contracts = await service.getFilmesLocais({
            query: query? query.toString(): '',
            page: page ?  parseInt(page.toString()): undefined,
            itemsPerPage: itemsPerPage ? parseInt(itemsPerPage.toString()): undefined

        })
        res.status(201).json(contracts)
    }
} 