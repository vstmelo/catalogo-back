import { api } from "../api";
import { filmeRepository } from "../repositories/filmesRepository";

export interface Iprops {
    id: string,
    title: string
    description: string,
    director: string,
    producer: string,
    movie_banner: string
}

export class GetFilmesLocaisService {

    async getFilmesLocais():Promise<any> {
        const filmes = await filmeRepository
            .createQueryBuilder("filmes")
            .limit(10)
            .getMany()
        
            const postCount = filmes.length;
            const perPage = 2;
        const pageCount = Math.ceil(postCount / perPage);

        return ({
            filmes: filmes,
            pages: pageCount
        });
    }
}