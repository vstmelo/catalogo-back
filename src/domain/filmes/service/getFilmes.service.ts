import { api, } from "./api";
import { SaveBDLocal } from "./saveBDLocalService";

const bdLocal = new SaveBDLocal();

export class GetFilmesService {

    async getFilmes() {
        

        const { data: filmes } = await api.get('/films', {
            params:{
                per_page: 5
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