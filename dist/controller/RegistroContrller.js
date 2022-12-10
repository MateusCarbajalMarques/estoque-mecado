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
exports.RegistroController = void 0;
const RegistroServices_1 = require("../services/RegistroServices");
class RegistroController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, codigobarra, quantidade, fdcx, tipo, observacao, data, funcionario } = request.body;
            const registroServices = new RegistroServices_1.RegistroServices();
            const result = yield registroServices.create({
                nome,
                codigobarra,
                quantidade,
                fdcx,
                tipo,
                observacao,
                data,
                funcionario
            });
            return response.json(result);
        });
    }
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.params;
            const registroServices = new RegistroServices_1.RegistroServices();
            const result = yield registroServices.delete(id);
            response.json(result);
        });
    }
    list(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const registroServices = new RegistroServices_1.RegistroServices();
            const result = yield registroServices.list();
            response.json(result);
        });
    }
    deleteAll(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const registroServices = new RegistroServices_1.RegistroServices();
            const result = yield registroServices.deleteAll();
            response.json(result);
        });
    }
}
exports.RegistroController = RegistroController;
