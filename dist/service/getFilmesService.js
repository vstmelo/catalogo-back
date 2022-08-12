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
exports.GetFilmesService = void 0;
const api_1 = require("../api");
const saveBDLocalService_1 = require("./saveBDLocalService");
const bdLocal = new saveBDLocalService_1.SaveBDLocal();
class GetFilmesService {
    getFilmes() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data: filmes } = yield api_1.apiHeroku.get('/films', {
                params: {
                    per_page: 50
                }
            });
            const dataFilmes = filmes.map((item) => {
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
        });
    }
    ;
}
exports.GetFilmesService = GetFilmesService;
