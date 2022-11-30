import { request, response, Router } from "express";
import { CartaoController } from "./controller/CartaoController";
import { ProdutoController } from "./controller/ProdutoController";
import { RegistroController } from "./controller/RegistroContrller";
import { RelatorioController } from "./controller/RelatorioController";


const routes = Router();

const produtoController = new ProdutoController();
const cartaoController = new CartaoController();
const registroController = new RegistroController();
const relatorioController = new RelatorioController();

routes.get(`/`, async (req, res) => {
    res.json({ up: true })
  })
  

//Produto
routes.post("/produto", produtoController.create);
routes.patch("/produto/update/:id", produtoController.update);
routes.delete("/produto/delete/:id", produtoController.delete);
routes.get("/produto/list", produtoController.list);
routes.get("/produto/validade", produtoController.validade);
routes.post("/produto/codigobarra/:pagina", produtoController.produtoCodigo);
routes.get("/produto/allestoque", produtoController.estoqueall);

//Cartao
routes.post("/cartao", cartaoController.create);
routes.patch("/cartao/update/:id", cartaoController.update);
routes.delete("/cartao/delete/:id", cartaoController.delete);
routes.get("/cartao/list", cartaoController.list);
routes.get("/cartao/nomecpf/:nomecpf", cartaoController.produtoCodigo)

//Registro
routes.post("/registro", registroController.create);
routes.delete("/registro/delete/:id", registroController.delete);
routes.delete("/registro/deleteall", registroController.deleteAll);
routes.get("/registro/list", registroController.list);

//Relatorio
routes.post("/relatorio", relatorioController.create);
routes.delete("/relatorio/delete/:id", relatorioController.delete);
routes.get("/relatorio/list", relatorioController.list);

export { routes }

//DATABASE_URL="postgresql://postgres:12345678@localhost:5434/mydb?schema=public"