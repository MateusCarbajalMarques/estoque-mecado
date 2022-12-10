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
exports.RelatorioServices = void 0;
const PrismaClient_1 = require("../database/PrismaClient");
class RelatorioServices {
    create({ produto, codigo, quantidade, unidcxfd }) {
        return __awaiter(this, void 0, void 0, function* () {
            const registro = yield PrismaClient_1.prisma.relatorio.create({
                data: {
                    produto,
                    codigo,
                    quantidade,
                    unidcxfd,
                }
            });
            return registro;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const registro = yield PrismaClient_1.prisma.relatorio.delete({
                where: {
                    id
                }
            });
            return registro;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const registro = yield PrismaClient_1.prisma.relatorio.findMany({
                orderBy: {
                    produto: 'desc'
                }
            });
            return registro;
        });
    }
}
exports.RelatorioServices = RelatorioServices;
