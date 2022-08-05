import { api } from "../api";
export interface Iprops {
    title: string
    description: string,
    director: string,
    producer: string,
}
export class GetFilmesService {

    async getFilmes() {
        const quantidadePaginas: any[] = [];

        const filmes = await api.get('/films').then((response) => {
            const data = response.data;
            return data
        }).catch((err) => {
            throw (err);
        });

        return filmes;
    }
}