import { filmeRepository } from "../../../repositories";

export class Search {
    async search(title: string) {
        const filme = await filmeRepository.findOneBy({ title })
        return filme;
    }
}