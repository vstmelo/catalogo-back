import { AppDataSource } from "../connection";
import { Filmes } from "../infra/typeorm/model/Filmes";

export const filmeRepository = AppDataSource.getRepository(Filmes);
