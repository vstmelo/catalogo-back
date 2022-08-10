import { filmeRepository } from "../repositories/filmesRepository";

export interface ISaveLocal {
    filmes: [{ title: any, producer: any, director: any, movie_banner: any, description: any, id : string }];
}

export  class SaveBDLocal{

    async save(data: ISaveLocal) {

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