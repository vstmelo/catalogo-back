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

    async getFilmesLocais() {
        const filmes = await filmeRepository
            .createQueryBuilder("filme")
            .getMany()
        return filmes;
    }
}