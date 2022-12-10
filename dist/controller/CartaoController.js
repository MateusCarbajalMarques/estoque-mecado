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
exports.CartaoController = void 0;
const CartaoServices_1 = require("../services/CartaoServices");
class CartaoController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, numero, cpf, telefone } = request.body;
            const cartaoServices = new CartaoServices_1.CartaoServices();
            const result = yield cartaoServices.create({
                nome,
                numero,
                cpf,
                telefone
            });
            return response.json(result);
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { nome, numero, cpf, telefone } = request.body;
            const cartaoServices = new CartaoServices_1.CartaoServices();
            const result = yield cartaoServices.update({
                id,
                nome,
                numero,
                cpf,
                telefone
            });
            response.json(result);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const cartaoServices = new CartaoServices_1.CartaoServices();
            const result = yield cartaoServices.delete(id);
            response.json(result);
        });
    }
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const cartaoServices = new CartaoServices_1.CartaoServices();
            const result = yield cartaoServices.list();
            response.json(result);
        });
    }
    produtoCodigo(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nomecpf } = request.params;
            const cartaoServices = new CartaoServices_1.CartaoServices();
            const result = yield cartaoServices.produtoCartao(nomecpf);
            response.json(result);
        });
    }
}
exports.CartaoController = CartaoController;
