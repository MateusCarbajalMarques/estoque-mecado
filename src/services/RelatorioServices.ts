import { prisma } from "../database/PrismaClient";

interface IRelatorio {
  id?: string,
  produto: string,
  codigo: string,
  quantidade: number,
  unidcxfd: string,
  

}

export class RelatorioServices {
  async create({ produto, codigo, quantidade, unidcxfd  }: IRelatorio) {
    const registro = await prisma.relatorio.create({
      data: {
        produto,
        codigo,
        quantidade,
        unidcxfd,
    
      }
    })
    return registro;
  }


  async delete(id: string) {
    const registro = await prisma.relatorio.delete({
      where: {
        id
      }
    })
    return registro;
  }

  async list() {
    const registro = await prisma.relatorio.findMany({
      orderBy: {
        produto: 'desc'
      }
    });
    return registro;
  }

}