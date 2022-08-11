import { AppDataSource } from "../connection";
import { Filmes } from "../model/Filmes";

export const filmeRepository = AppDataSource.getRepository(Filmes);
