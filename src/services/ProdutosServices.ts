import { prisma } from "../database/PrismaClient";

interface ICreateProduto {
    id?: string,
    nome: string,
    codigo_barra: string,
    preco_venda: string,
    estoque: number,
    estoque_min: number,
    unkgpreso: string,
    fdcx: string,
    datavalidade: string,
}



export class CreateProdutosServices {
    async create({ nome, codigo_barra, preco_venda, estoque, estoque_min, unkgpreso, fdcx, datavalidade }: ICreateProduto) {
        const produtoExist = await prisma.produto.findFirst({
            where: {
                codigo_barra,

            },
        })
        if (produtoExist) {
            throw new Error("Produto already exists");
        }
        const produto = await prisma.produto.create({
            data: {
                nome,
                codigo_barra,
                preco_venda,
                estoque,
                estoque_min,
                unkgpreso,
                fdcx,
                datavalidade,
            }
        })
        return produto;

    }

    async update({ id, nome, codigo_barra, preco_venda, estoque, estoque_min, unkgpreso, fdcx, datavalidade }: ICreateProduto) {
        const produto = await prisma.produto.update({
            where: {
                id
            },
            data: {
                nome,
                codigo_barra,
                preco_venda,
                estoque,
                estoque_min,
                unkgpreso,
                fdcx,
                datavalidade,
            }
        })
        return produto;
    }

    async delete(id: string) {
        const produto = await prisma.produto.delete({
            where: {
                id
            }
        })
        return produto;
    }

    async list() {
        const produto = await prisma.produto.findMany();
        return produto;
    }

    async produtoCodigo(codigo_barra: string, pagina: number) {
        const produto = await prisma.produto.findMany({
            skip: 0,
            take: pagina,
            where: {
                OR: [
                    {
                        codigo_barra
                    }, {
                        nome: {
                            contains: codigo_barra,
                            mode: "insensitive"
                        },

                    }
                ]
            },
        })


        console.log(produto)
        return produto;
    }

    async validade() {
        const produto = await prisma.produto.findMany({
            orderBy: {
                datavalidade: 'desc',
            },
            select: {
                nome: true,
                codigo_barra: true,
                estoque: true,
                datavalidade: true,
            }
        });

        return produto;

    }

    async All() {
        const produto = await prisma.produto.findMany();
        return produto;
    }


}

