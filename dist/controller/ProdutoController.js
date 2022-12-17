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
exports.ProdutoController = void 0;
const ProdutosServices_1 = require("../services/ProdutosServices");
class ProdutoController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, codigo_barra, preco_venda, estoque, estoque_min, unkgpreso, fdcx, datavalidade, atualizacao } = request.body;
            const createProdutosServices = new ProdutosServices_1.CreateProdutosServices();
            const result = yield createProdutosServices.create({
                nome,
                codigo_barra,
                preco_venda,
                estoque,
                estoque_min,
                unkgpreso,
                fdcx,
                datavalidade,
                atualizacao
            });
            return response.json(result);
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const { nome, codigo_barra, preco_venda, estoque, estoque_min, unkgpreso, fdcx, datavalidade, atualizacao } = request.body;
            const createProdutosServices = new ProdutosServices_1.CreateProdutosServices();
            const result = yield createProdutosServices.update({
                id,
                nome,
                codigo_barra,
                preco_venda,
                estoque,
                estoque_min,
                unkgpreso,
                fdcx,
                datavalidade,
                atualizacao
            });
            response.json(result);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const createProdutosServices = new ProdutosServices_1.CreateProdutosServices();
            const result = yield createProdutosServices.delete(id);
            response.json(result);
        });
    }
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const createProdutosServices = new ProdutosServices_1.CreateProdutosServices();
            const result = yield createProdutosServices.list();
            response.json(result);
        });
    }
    validade(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const createProdutosServices = new ProdutosServices_1.CreateProdutosServices();
            const result = yield createProdutosServices.validade();
            response.json(result);
        });
    }
    produtoCodigo(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pagina } = request.params;
            const { codigo_barra } = request.body;
            const createProdutosServices = new ProdutosServices_1.CreateProdutosServices();
            const pag = parseInt(pagina);
            const result = yield createProdutosServices.produtoCodigo(codigo_barra, pag);
            response.json(result);
        });
    }
    estoqueall(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const createProdutosServices = new ProdutosServices_1.CreateProdutosServices();
            const result = yield createProdutosServices.All();
            response.json(result);
        });
    }
}
exports.ProdutoController = ProdutoController;
