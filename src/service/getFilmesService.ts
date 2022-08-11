import { apiHeroku } from "../api";
import { SaveBDLocal } from "./saveBDLocalService";

const bdLocal = new SaveBDLocal();
export interface Iprops {
    id: string,
    title: string
    description: string,
    director: string,
    producer: string,
    movie_banner: string
}
export class GetFilmesService {

    async getFilmes() {
        

        const { data: filmes } = await apiHeroku.get('/films', {
            params:{
                per_page: 50
            }
        })

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

        bdLocal.save({ filmes: dataFilmes });

        return dataFilmes;

    };

} 