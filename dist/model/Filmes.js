"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filmes = void 0;
const typeorm_1 = require("typeorm");
let Filmes = class Filmes {
};
__decorate([
    (0, typeorm_1.Column)("tinytext", { name: "title" }),
    __metadata("design:type", String)
], Filmes.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("longtext", { name: "description" }),
    __metadata("design:type", String)
], Filmes.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "producer", length: 45 }),
    __metadata("design:type", String)
], Filmes.prototype, "producer", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", {
        name: "create_time",
        nullable: true,
        default: () => "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Object)
], Filmes.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { primary: true, name: "id", length: 45 }),
    __metadata("design:type", String)
], Filmes.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("mediumtext", { name: "movie_banner" }),
    __metadata("design:type", String)
], Filmes.prototype, "movieBanner", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "director", length: 45 }),
    __metadata("design:type", String)
], Filmes.prototype, "director", void 0);
Filmes = __decorate([
    (0, typeorm_1.Entity)("filmes", { schema: "heroku_d60e6747797871b" })
], Filmes);
exports.Filmes = Filmes;
