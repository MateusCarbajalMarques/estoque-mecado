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
exports.RelatorioController = void 0;
const RelatorioServices_1 = require("../services/RelatorioServices");
class RelatorioController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { produto, codigo, quantidade, unidcxfd, } = request.body;
            const relatorioServices = new RelatorioServices_1.RelatorioServices();
            const result = yield relatorioServices.create({
                produto,
                codigo,
                quantidade,
                unidcxfd,
            });
            return response.json(result);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const relatorioServices = new RelatorioServices_1.RelatorioServices();
            const result = yield relatorioServices.delete(id);
            response.json(result);
        });
    }
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const relatorioServices = new RelatorioServices_1.RelatorioServices();
            const result = yield relatorioServices.list();
            response.json(result);
        });
    }
}
exports.RelatorioController = RelatorioController;
