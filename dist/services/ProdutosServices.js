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
exports.CreateProdutosServices = void 0;
const PrismaClient_1 = require("../database/PrismaClient");
class CreateProdutosServices {
    create({ nome, codigo_barra, preco_venda, estoque, estoque_min, unkgpreso, fdcx, datavalidade, atualizacao }) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoExist = yield PrismaClient_1.prisma.produto.findFirst({
                where: {
                    codigo_barra,
                },
            });
            if (produtoExist) {
                throw new Error("Produto already exists");
            }
            const produto = yield PrismaClient_1.prisma.produto.create({
                data: {
                    nome,
                    codigo_barra,
                    preco_venda,
                    estoque,
                    estoque_min,
                    unkgpreso,
                    fdcx,
                    datavalidade,
                    atualizacao
                }
            });
            return produto;
        });
    }
    update({ id, nome, codigo_barra, preco_venda, estoque, estoque_min, unkgpreso, fdcx, datavalidade, atualizacao }) {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield PrismaClient_1.prisma.produto.update({
                where: {
                    id
                },
                data: {
                    nome,
                    codigo_barra,
                    preco_venda,
                    estoque,
                    estoque_min,
                    unkgpreso,
                    fdcx,
                    datavalidade,
                    atualizacao
                }
            });
            return produto;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield PrismaClient_1.prisma.produto.delete({
                where: {
                    id
                }
            });
            return produto;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield PrismaClient_1.prisma.produto.findMany();
            return produto;
        });
    }
    produtoCodigo(codigo_barra, pagina) {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield PrismaClient_1.prisma.produto.findMany({
                skip: 0,
                take: pagina,
                orderBy: {
                    nome: 'desc'
                },
                where: {
                    OR: [
                        {
                            codigo_barra
                        }, {
                            nome: {
                                contains: codigo_barra,
                                mode: "insensitive"
                            },
                        }
                    ]
                },
            });
            console.log(produto);
            return produto;
        });
    }
    validade() {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield PrismaClient_1.prisma.produto.findMany({
                orderBy: {
                    datavalidade: 'desc',
                },
                select: {
                    nome: true,
                    codigo_barra: true,
                    estoque: true,
                    datavalidade: true,
                }
            });
            return produto;
        });
    }
    All() {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield PrismaClient_1.prisma.produto.findMany();
            return produto;
        });
    }
}
exports.CreateProdutosServices = CreateProdutosServices;
