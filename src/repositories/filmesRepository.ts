import { AppDataSource } from "../connection";
import { Filme } from "../model/Filme";

export const filmeRepository = AppDataSource.getRepository(Filme);
