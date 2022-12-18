-- CreateTable
CREATE TABLE "produto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "codigo_barra" TEXT NOT NULL,
    "preco_venda" TEXT NOT NULL,
    "estoque" INTEGER NOT NULL,
    "estoque_min" INTEGER NOT NULL,
    "unkgpreso" TEXT NOT NULL,
    "fdcx" TEXT NOT NULL,
    "datavalidade" TEXT NOT NULL,
    "atualizacao" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" TIMESTAMP(3),

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cartao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "cpf" TEXT,
    "telefone" TEXT,

    CONSTRAINT "cartao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "registro" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "codigobarra" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "fdcx" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "observacao" TEXT,
    "data" TEXT NOT NULL,
    "funcionario" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end_at" TIMESTAMP(3),

    CONSTRAINT "registro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "relatorio" (
    "id" TEXT NOT NULL,
    "produto" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "unidcxfd" TEXT NOT NULL,

    CONSTRAINT "relatorio_pkey" PRIMARY KEY ("id")
);
