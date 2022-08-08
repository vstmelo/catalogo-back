import { api } from "../api";
import { filmeRepository } from "../repositories/filmesRepository";
export interface Iprops {
    id : string,
    title: string
    description: string,
    director: string,
    producer: string,
    movie_banner: string
}
export interface ISaveLocal {
    filmes: [{ title: any, producer: any, director: any, movie_banner: any, description: any, id : string }];
}
export class GetFilmesService {

    async getFilmes() {
        const quantidadePaginas: any[] = [];

        const { data: filmes } = await api.get('/films')

        const dataFilmes = filmes.map((item: any) => {
            return ({
                title: item.title,
                id: item.id,
                movie_banner: item.movie_banner,
                description: item.description,
                director: item.director,
                producer: item.producer,
            });
        });

        this.saveBDLocal({ filmes: dataFilmes });

        return dataFilmes;

    }; 

    async saveBDLocal(data: ISaveLocal) {

        data.filmes.forEach((filme) => {
            const filmeLocal = filmeRepository.save({
                id: filme.id,
                title: filme.title,
                movie_banner: filme.movie_banner,
                description: filme.description,
                director: filme.director,
                producer: filme.producer,
            });
        });
    }

}