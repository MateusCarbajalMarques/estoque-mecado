import { Request, Response } from 'express';
import { RegistroServices } from '../services/RegistroServices';


export class RegistroController {
    async create(request: Request, response: Response) {
        const {
            nome,
            codigobarra,
            quantidade,
            fdcx,
            tipo,
            observacao,
            data,
            funcionario
            } = request.body;

        const registroServices = new RegistroServices();

        const result = await registroServices.create({
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
    }
 

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const registroServices = new RegistroServices();
        const result = await registroServices.delete(
            id
        )
        response.json(result);
    }

    async list(request: Request, response: Response) {
        const registroServices = new RegistroServices();

        const result = await registroServices.list();

        response.json(result);
    }

    async deleteAll(request: Request, response: Response) {
        const registroServices = new RegistroServices();

        const result = await registroServices.deleteAll();

        response.json(result);
    }

 
}