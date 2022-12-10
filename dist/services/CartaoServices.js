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
exports.CartaoServices = void 0;
const PrismaClient_1 = require("../database/PrismaClient");
class CartaoServices {
    create({ nome, numero, cpf, telefone }) {
        return __awaiter(this, void 0, void 0, function* () {
            const cartaoExist = yield PrismaClient_1.prisma.cartao.findFirst({
                where: {
                    numero
                }
            });
            if (cartaoExist) {
                throw new Error("Cartão already exists");
            }
            const cartao = yield PrismaClient_1.prisma.cartao.create({
                data: {
                    nome,
                    numero,
                    cpf,
                    telefone
                }
            });
            return cartao;
        });
    }
    update({ id, nome, numero, cpf, telefone }) {
        return __awaiter(this, void 0, void 0, function* () {
            const cartaoExist = yield PrismaClient_1.prisma.cartao.findFirst({
                where: {
                    numero
                }
            });
            if (cartaoExist) {
                throw new Error("Cartão não existe");
            }
            const cartao = yield PrismaClient_1.prisma.cartao.update({
                where: {
                    id
                },
                data: {
                    nome,
                    numero,
                    cpf,
                    telefone
                }
            });
            return cartao;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield PrismaClient_1.prisma.cartao.delete({
                where: {
                    id
                }
            });
            return produto;
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const cartao = yield PrismaClient_1.prisma.cartao.findMany();
            return cartao;
        });
    }
    produtoCartao(nomecpf) {
        return __awaiter(this, void 0, void 0, function* () {
            const produto = yield PrismaClient_1.prisma.cartao.findMany({
                where: {
                    OR: [
                        {
                            cpf: nomecpf
                        }, {
                            nome: {
                                contains: nomecpf,
                                mode: "insensitive"
                            },
                        }
                    ]
                },
            });
            //console.log(produto)
            return produto;
        });
    }
}
exports.CartaoServices = CartaoServices;
