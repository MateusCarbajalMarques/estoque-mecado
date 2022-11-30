import { Request, Response } from 'express';
import { CartaoServices } from '../services/CartaoServices';

export class CartaoController {
    async create(request: Request, response: Response) {
        const {
            nome,
            numero,
            cpf,
            telefone
            } = request.body;

        const cartaoServices = new CartaoServices();

        const result = await cartaoServices.create({
            nome,
            numero,
            cpf,
            telefone
        });
        return response.json(result);
    }
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const {  
            nome,
            numero,
            cpf,
            telefone
        } = request.body;

        const cartaoServices = new CartaoServices();

        const result = await cartaoServices.update({
            id,
            nome,
            numero,
            cpf,
            telefone
        })

        response.json(result);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const cartaoServices = new CartaoServices();
        const result = await cartaoServices.delete(
            id
        )
        response.json(result);
    }
    async list(request: Request, response: Response) {
       const cartaoServices = new CartaoServices();

        const result = await cartaoServices.list();

        response.json(result);
    }

    async produtoCodigo(request: Request, response: Response) {
        const { nomecpf } = request.params;

       const cartaoServices = new CartaoServices();

        const result = await cartaoServices.produtoCartao(
            nomecpf
        )

        response.json(result);
    }
}