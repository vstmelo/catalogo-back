"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFilmesLocaisService = void 0;
const filmesRepository_1 = require("../repositories/filmesRepository");
class GetFilmesLocaisService {
    getFilmesLocais() {
        return __awaiter(this, void 0, void 0, function* () {
            const filmes = yield filmesRepository_1.filmeRepository
                .createQueryBuilder("filmes")
                .limit(10)
                .getManyAndCount();
            const postCount = filmes.length;
            const perPage = 2;
            const pageCount = Math.ceil(postCount / perPage);
            return ({
                filmes: filmes,
                pages: pageCount
            });
        });
    }
}
exports.GetFilmesLocaisService = GetFilmesLocaisService;
