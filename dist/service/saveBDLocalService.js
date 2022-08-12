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
exports.SaveBDLocal = void 0;
const filmesRepository_1 = require("../repositories/filmesRepository");
class SaveBDLocal {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            data.filmes.forEach((filme) => {
                const filmeLocal = filmesRepository_1.filmeRepository.save({
                    id: filme.id,
                    title: filme.title,
                    movie_banner: filme.movie_banner,
                    description: filme.description,
                    director: filme.director,
                    producer: filme.producer,
                });
            });
        });
    }
}
exports.SaveBDLocal = SaveBDLocal;
