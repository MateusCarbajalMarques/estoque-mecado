import { prisma } from "../database/PrismaClient";

interface ICartao {
    id?: string
    nome: string
    numero: string
    cpf?: string
    telefone?: string

}

export class CartaoServices {
    async create({nome, numero, cpf, telefone}: ICartao){
        const cartaoExist = await prisma.cartao.findFirst({
            where: {
                numero
            }
        })
        if(cartaoExist){
            throw new Error("Cartão already exists");
        }
        const cartao = await prisma.cartao.create({
          data:{
            nome,
            numero,
            cpf,
            telefone
          }  
        })
        return cartao;
    }
    async update({id, nome, numero, cpf, telefone}: ICartao){
        const cartaoExist = await prisma.cartao.findFirst({
            where: {
                numero
            }
        })
        if(cartaoExist){
            throw new Error("Cartão não existe");
        }

        const cartao = await prisma.cartao.update({
            where: {
                id
            },
            data:{
            nome,
            numero,
            cpf,
            telefone
            }
        })

        return cartao;

    }

    async delete(id: string) {
        const produto = await prisma.cartao.delete({
            where: {
                id
            }
        })
        return produto;
    }

    async list() {
        const cartao = await prisma.cartao.findMany();
        return cartao;
    }

    async produtoCartao(nomecpf: string) {
        const produto = await prisma.cartao.findMany({
            where: {
               OR:[
                {
                    cpf: nomecpf
                },{
                    nome: {
                        contains: nomecpf,
                        mode:"insensitive"
                    },
            
                }
               ]
            },
        })
    
    
        //console.log(produto)
        return produto;
    }




}