import { Request, Response } from 'express';
import { CreateProdutosServices } from '../services/ProdutosServices';
export class ProdutoController {
    async create(request: Request, response: Response) {
        const {
            nome,
            codigo_barra,
            preco_venda,
            estoque,
            estoque_min,
            unkgpreso,
            fdcx,
            datavalidade,
            atualizacao 
        } = request.body;

        const createProdutosServices = new CreateProdutosServices();

        const result = await createProdutosServices.create({
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
    }
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { 
            nome,
            codigo_barra,
            preco_venda,
            estoque,
            estoque_min,
            unkgpreso,
            fdcx,
            datavalidade,
            atualizacao
        } = request.body;

        const createProdutosServices = new CreateProdutosServices();

        const result = await createProdutosServices.update({
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
        })

        response.json(result);
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;
        const createProdutosServices = new CreateProdutosServices();
        const result = await createProdutosServices.delete(
            id
        )
        response.json(result);
    }
    async list(request: Request, response: Response) {
        const createProdutosServices = new CreateProdutosServices();

        const result = await createProdutosServices.list();

        response.json(result);
    }
    async validade(request: Request, response: Response) {
        const createProdutosServices = new CreateProdutosServices();

        const result = await createProdutosServices.validade();

        response.json(result);
    }

    async produtoCodigo(request: Request, response: Response) {
        const { pagina } = request.params;
        const { codigo_barra } = request.body;

        const createProdutosServices = new CreateProdutosServices();
        const pag = parseInt(pagina);
        const result = await createProdutosServices.produtoCodigo(
            codigo_barra,
            pag
        )

        response.json(result);
    }

    async estoqueall(request: Request, response: Response){

        const createProdutosServices = new CreateProdutosServices();

        const result = await createProdutosServices.All();

        response.json(result);
    }
}