import { filmeRepository } from "../../../repositories";


export class GetFilmesLocaisService {
    async getFilmesLocais(pagina: string): Promise<any> {
        const quantidadeRegistros: number = 10;
    const filmes = await filmeRepository
            .findAndCount({
            take: quantidadeRegistros,
            skip: (parseInt(pagina) - 1) * quantidadeRegistros,
            });
        
        filmes[1] = Math.ceil(filmes[1] / quantidadeRegistros);
        
        return ({
            filmes: filmes
        });
    }
}