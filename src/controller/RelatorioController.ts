import { Request, Response } from 'express';
import { RelatorioServices } from '../services/RelatorioServices';



export class RelatorioController {
    async create(request: Request, response: Response) {
        const {
            produto,
            codigo,
            quantidade,
            unidcxfd,

        } = request.body;

        const relatorioServices = new RelatorioServices();

        const result = await relatorioServices.create({
            produto,
            codigo,
            quantidade,
            unidcxfd,
        });
        return response.json(result);
    }


    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const relatorioServices = new RelatorioServices();
        const result = await relatorioServices.delete(
            id
        )
        response.json(result);
    }

    async list(request: Request, response: Response) {
        const relatorioServices = new RelatorioServices();

        const result = await relatorioServices.list();

        response.json(result);
    }


}