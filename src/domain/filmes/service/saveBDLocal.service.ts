import { filmeRepository } from "../../../repositories";
import ISaveLocal from "../dtos/saveBDLocal.dto";

export class SaveBDLocal {

    async save(data: ISaveLocal) {
    const films = data.filmes;

    const filmeLocal = data.filmes.map((filme) => ({
                id: filme.id,
                title: filme.title,
                movie_banner: filme.movie_banner,
                description: filme.description,
                director: filme.director,
                producer: filme.producer,
            }));

    await filmeRepository.insert(filmeLocal);
    }
}