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
exports.routes = void 0;
const express_1 = require("express");
const CartaoController_1 = require("./controller/CartaoController");
const ProdutoController_1 = require("./controller/ProdutoController");
const RegistroContrller_1 = require("./controller/RegistroContrller");
const RelatorioController_1 = require("./controller/RelatorioController");
const routes = (0, express_1.Router)();
exports.routes = routes;
const produtoController = new ProdutoController_1.ProdutoController();
const cartaoController = new CartaoController_1.CartaoController();
const registroController = new RegistroContrller_1.RegistroController();
const relatorioController = new RelatorioController_1.RelatorioController();
routes.get(`/`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ up: true });
}));
//Produto
routes.post("/produto", produtoController.create);
routes.patch("/produto/update/:id", produtoController.update);
routes.delete("/produto/delete/:id", produtoController.delete);
routes.get("/produto/list", produtoController.list);
routes.get("/produto/validade", produtoController.validade);
routes.post("/produto/codigobarra/:pagina", produtoController.produtoCodigo);
routes.get("/produto/allestoque", produtoController.estoqueall);
//Cartao
routes.post("/cartao", cartaoController.create);
routes.patch("/cartao/update/:id", cartaoController.update);
routes.delete("/cartao/delete/:id", cartaoController.delete);
routes.get("/cartao/list", cartaoController.list);
routes.get("/cartao/nomecpf/:nomecpf", cartaoController.produtoCodigo);
//Registro
routes.post("/registro", registroController.create);
routes.delete("/registro/delete/:id", registroController.delete);
routes.delete("/registro/deleteall", registroController.deleteAll);
routes.get("/registro/list", registroController.list);
//Relatorio
routes.post("/relatorio", relatorioController.create);
routes.delete("/relatorio/delete/:id", relatorioController.delete);
routes.get("/relatorio/list", relatorioController.list);
//DATABASE_URL="postgresql://postgres:12345678@localhost:5434/mydb?schema=public"
