import { filmeRepository } from "../../../repositories";
import ISaveLocal from "../dtos/saveBDLocal.dto";

export class SaveBDLocal {

    async save(data: ISaveLocal) {
    const films = data.filmes;

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