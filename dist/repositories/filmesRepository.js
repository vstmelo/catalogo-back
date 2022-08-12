"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filmeRepository = void 0;
const connection_1 = require("../connection");
const Filmes_1 = require("../model/Filmes");
exports.filmeRepository = connection_1.AppDataSource.getRepository(Filmes_1.Filmes);
