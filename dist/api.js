"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiHeroku = exports.api = void 0;
const axios_1 = __importDefault(require("axios"));
require("dotenv/config");
exports.api = axios_1.default.create({
    baseURL: process.env.ENVIROMENT === 'local'
        ? process.env.DB_HOST_LOCAL
        : process.env.DB_HOST_DEV
});
exports.apiHeroku = axios_1.default.create({
    baseURL: process.env.DB_HEROKU
});
