import { prisma } from "../database/PrismaClient";

interface IRegistro {
  id?: string,
  nome: string,
  codigobarra: string,
  quantidade: number,
  fdcx: string,
  tipo: string,
  observacao?:  string,
  data: string,
  funcionario: string

}

export class RegistroServices {
  async create({ nome, codigobarra, quantidade, fdcx,tipo, observacao, data, funcionario }: IRegistro) {
    const registro = await prisma.registro.create({
      data: {
        nome,
        codigobarra,
        quantidade,
        fdcx,
        tipo,
        observacao,
        data,
        funcionario
      }
    })
    return registro;
  }


  async delete(id: string) {
    const registro = await prisma.registro.delete({
      where: {
        id
      }
    })
    return registro;
  }


  async deleteAll() {
    const registro = await prisma.registro.deleteMany({})
    return registro;
  
  }

  async list() {
    const registro = await prisma.registro.findMany({
      orderBy: {
        data: 'desc'
      }
    });
    return registro;
  }

  // async produtoCartao(nomecpf: string) {
  // const produto = await prisma.cartao.findMany({
  //   where: {
  //    OR:[
  //   {
  //     cpf: nomecpf
  //},{
  //  nome: {
  //    contains: nomecpf,
  //  mode:"insensitive"
  //},

  //}
  //]
  // },
  // })


  //console.log(produto)
  //return produto;
  // }



}