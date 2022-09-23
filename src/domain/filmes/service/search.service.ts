import { filmeRepository } from "../../../repositories";

interface ISearch{
    query: string;
}
export default class Search {
    async search(params: ISearch) : Promise<any> {
        const search = await filmeRepository.findOneBy(params.query)
        return search;
    }
}